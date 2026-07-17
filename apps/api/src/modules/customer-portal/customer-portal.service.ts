import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { eq, and, desc, sql, count } from 'drizzle-orm';
import { db } from '../../database';
import {
  users, entities, relationships, transactions,
  activities, media, notifications, sessions,
  conversations, conversationParticipants, messages,
} from '../../database/schema';

@Injectable()
export class CustomerPortalService {
  async getDashboard(userId: string) {
    const user = await db.query.users.findFirst({ where: eq(users.id, userId) });
    if (!user) throw new NotFoundException('User not found');
    const { password: _, ...userWithoutPassword } = user;

    const userRoles = await db.select().from(relationships)
      .where(and(eq(relationships.fromType, 'USER'), eq(relationships.fromId, userId), eq(relationships.relationshipType, 'ROLE')));
    const roles = userRoles.map(r => (r.metadata as Record<string, unknown>)?.role as string).filter(Boolean);

    const [notifCount] = await db.select({ count: count() }).from(notifications)
      .where(and(eq(notifications.userId, userId), eq(notifications.isRead, false)));
    const recentNotifications = await db.select().from(notifications)
      .where(eq(notifications.userId, userId)).orderBy(desc(notifications.createdAt)).limit(5);
    const recentActivity = await db.select().from(activities)
      .where(eq(activities.userId, userId)).orderBy(desc(activities.createdAt)).limit(10);

    const roleStats: Record<string, unknown> = {};
    if (roles.some(r => ['BUYER', 'TENANT', 'SELLER'].includes(r))) {
      const [saved] = await db.select({ c: count() }).from(relationships)
        .where(and(eq(relationships.fromType, 'USER'), eq(relationships.fromId, userId), eq(relationships.relationshipType, 'FAVORITE')));
      const [viewings] = await db.select({ c: count() }).from(entities)
        .where(and(eq(entities.type, 'PROPERTY_VIEWING'), eq(entities.createdById, userId), eq(entities.isDeleted, false)));
      const [offers] = await db.select({ c: count() }).from(entities)
        .where(and(eq(entities.type, 'OFFER'), eq(entities.createdById, userId), eq(entities.status, 'PENDING'), eq(entities.isDeleted, false)));
      roleStats.savedProperties = Number(saved.c);
      roleStats.viewings = Number(viewings.c);
      roleStats.activeOffers = Number(offers.c);
    }
    if (roles.some(r => ['TENANT', 'PROPERTY_OWNER'].includes(r))) {
      const [maint] = await db.select({ c: count() }).from(entities)
        .where(and(eq(entities.type, 'MAINTENANCE_REQUEST'), eq(entities.createdById, userId), eq(entities.isDeleted, false)));
      roleStats.maintenanceRequests = Number(maint.c);
    }
    if (roles.includes('INVESTOR')) {
      const [inv] = await db.select({ c: count() }).from(transactions)
        .where(and(eq(transactions.userId, userId), eq(transactions.type, 'INVESTMENT'), eq(transactions.status, 'COMPLETED')));
      roleStats.activeInvestments = Number(inv.c);
    }
    if (roles.includes('DONOR')) {
      const [don] = await db.select({ c: count() }).from(transactions)
        .where(and(eq(transactions.userId, userId), eq(transactions.type, 'DONATION'), eq(transactions.status, 'COMPLETED')));
      roleStats.totalDonations = Number(don.c);
    }

    const [totalPaid] = await db.select({
      total: sql<string>`COALESCE(SUM(CASE WHEN ${transactions.status} = 'COMPLETED' THEN ${transactions.amount} ELSE 0 END), 0)`,
    }).from(transactions).where(eq(transactions.userId, userId));
    const [pendingBal] = await db.select({
      total: sql<string>`COALESCE(SUM(CASE WHEN ${transactions.status} = 'PENDING' THEN ${transactions.amount} ELSE 0 END), 0)`,
    }).from(transactions).where(eq(transactions.userId, userId));
    roleStats.totalPaid = totalPaid.total;
    roleStats.pendingBalance = pendingBal.total;

    return { user: userWithoutPassword, roles, unreadNotifications: Number(notifCount.count), recentNotifications, recentActivity, stats: roleStats };
  }

  async getUserRoles(userId: string) {
    const roles = await db.select().from(relationships)
      .where(and(eq(relationships.fromType, 'USER'), eq(relationships.fromId, userId), eq(relationships.relationshipType, 'ROLE')));
    return roles.map(r => ({ id: r.id, ...(r.metadata as Record<string, unknown>), createdAt: r.createdAt }));
  }

  async assignRole(userId: string, role: string, sourceEvent: string) {
    const existing = await db.select().from(relationships).where(and(
      eq(relationships.fromType, 'USER'), eq(relationships.fromId, userId),
      eq(relationships.toType, 'USER'), eq(relationships.toId, userId),
      eq(relationships.relationshipType, 'ROLE'),
    ));
    const found = existing.find(r => (r.metadata as Record<string, unknown>)?.role === role);
    if (found) return found;

    const id = crypto.randomUUID();
    await db.insert(relationships).values({
      id, fromType: 'USER', fromId: userId, toType: 'USER', toId: userId,
      relationshipType: 'ROLE',
      metadata: JSON.stringify({ role, assignedAt: new Date().toISOString(), sourceEvent, active: true }),
    });
    await db.insert(activities).values({
      id: crypto.randomUUID(), userId, action: 'ROLE_ASSIGNED' as never,
      entityType: 'user_role', description: `Role ${role} assigned: ${sourceEvent}`,
    });
    return { id, role, sourceEvent, active: true };
  }

  async removeRole(userId: string, role: string) {
    const existing = await db.select().from(relationships).where(and(
      eq(relationships.fromType, 'USER'), eq(relationships.fromId, userId),
      eq(relationships.relationshipType, 'ROLE'),
    ));
    const roleRec = existing.find(r => (r.metadata as Record<string, unknown>)?.role === role);
    if (!roleRec) throw new NotFoundException('Role not found');
    await db.update(relationships).set({
      metadata: JSON.stringify({ ...(roleRec.metadata as Record<string, unknown>), active: false, removedAt: new Date().toISOString() }),
    }).where(eq(relationships.id, roleRec.id));
    await db.insert(activities).values({
      id: crypto.randomUUID(), userId, action: 'ROLE_REMOVED' as never,
      entityType: 'user_role', description: `Role ${role} removed`,
    });
    return { message: `Role ${role} removed` };
  }

  async getProfile(userId: string) {
    const user = await db.query.users.findFirst({ where: eq(users.id, userId) });
    if (!user) throw new NotFoundException('User not found');
    const { password: _, ...rest } = user;
    return rest;
  }

  async updateProfile(userId: string, data: { firstName?: string; lastName?: string; phone?: string; avatar?: string }) {
    const safe: Record<string, unknown> = { updatedAt: new Date() };
    if (data.firstName) safe.firstName = data.firstName;
    if (data.lastName) safe.lastName = data.lastName;
    if (data.phone !== undefined) safe.phone = data.phone;
    if (data.avatar !== undefined) safe.avatar = data.avatar;
    await db.update(users).set(safe).where(eq(users.id, userId));
    return this.getProfile(userId);
  }

  async getSavedProperties(userId: string) {
    return db.select({ id: relationships.id, entityId: relationships.toId, savedAt: relationships.createdAt, entity: entities })
      .from(relationships).innerJoin(entities, eq(relationships.toId, entities.id))
      .where(and(eq(relationships.fromType, 'USER'), eq(relationships.fromId, userId),
        eq(relationships.relationshipType, 'FAVORITE'), eq(entities.isDeleted, false)))
      .orderBy(desc(relationships.createdAt));
  }

  async toggleSaveProperty(userId: string, propertyEntityId: string) {
    const existing = await db.select().from(relationships).where(and(
      eq(relationships.fromType, 'USER'), eq(relationships.fromId, userId),
      eq(relationships.toType, 'ENTITY'), eq(relationships.toId, propertyEntityId),
      eq(relationships.relationshipType, 'FAVORITE'),
    ));
    if (existing.length > 0) {
      await db.delete(relationships).where(eq(relationships.id, existing[0].id));
      return { saved: false };
    }
    await db.insert(relationships).values({
      id: crypto.randomUUID(), fromType: 'USER', fromId: userId,
      toType: 'ENTITY', toId: propertyEntityId, relationshipType: 'FAVORITE',
    });
    return { saved: true };
  }

  async getViewings(userId: string) {
    return db.select().from(entities)
      .where(and(eq(entities.type, 'PROPERTY_VIEWING'), eq(entities.createdById, userId), eq(entities.isDeleted, false)))
      .orderBy(desc(entities.createdAt));
  }

  async createViewing(userId: string, data: { propertyId: string; scheduledAt: string; notes?: string }) {
    const id = crypto.randomUUID();
    await db.insert(entities).values({
      id, type: 'PROPERTY_VIEWING', slug: `viewing-${id.slice(0, 8)}`, title: 'Viewing Request',
      description: data.notes || '', status: 'PENDING', createdById: userId,
      attributes: JSON.stringify({ propertyId: data.propertyId, scheduledAt: data.scheduledAt, status: 'PENDING', notes: data.notes }),
    });
    return { id, status: 'PENDING', scheduledAt: data.scheduledAt };
  }

  async getOffers(userId: string) {
    return db.select().from(entities)
      .where(and(eq(entities.type, 'OFFER'), eq(entities.createdById, userId), eq(entities.isDeleted, false)))
      .orderBy(desc(entities.createdAt));
  }

  async createOffer(userId: string, data: { propertyId: string; amount: number; notes?: string }) {
    const id = crypto.randomUUID();
    await db.insert(entities).values({
      id, type: 'OFFER', slug: `offer-${id.slice(0, 8)}`, title: `Offer - KES ${data.amount.toLocaleString()}`,
      description: data.notes || '', status: 'PENDING', createdById: userId,
      attributes: JSON.stringify({
        propertyId: data.propertyId, amount: data.amount, currency: 'KES', status: 'PENDING',
        expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(), notes: data.notes,
      }),
    });
    return { id, amount: data.amount, status: 'PENDING' };
  }

  async getLeases(userId: string) {
    return db.select().from(entities)
      .where(and(eq(entities.type, 'LEASE_AGREEMENT'), eq(entities.createdById, userId), eq(entities.isDeleted, false)))
      .orderBy(desc(entities.createdAt));
  }

  async getMaintenanceRequests(userId: string) {
    return db.select().from(entities)
      .where(and(eq(entities.type, 'MAINTENANCE_REQUEST'), eq(entities.createdById, userId), eq(entities.isDeleted, false)))
      .orderBy(desc(entities.createdAt));
  }

  async createMaintenanceRequest(userId: string, data: { propertyId: string; title: string; description: string; priority: string }) {
    const id = crypto.randomUUID();
    await db.insert(entities).values({
      id, type: 'MAINTENANCE_REQUEST', slug: `maintenance-${id.slice(0, 8)}`, title: data.title,
      description: data.description, status: 'PENDING', createdById: userId,
      attributes: JSON.stringify({ propertyId: data.propertyId, priority: data.priority || 'MEDIUM', status: 'SUBMITTED' }),
    });
    return { id, title: data.title, status: 'SUBMITTED' };
  }

  async getPayments(userId: string, page = 1, limit = 20) {
    const offset = (page - 1) * limit;
    const [totalResult] = await db.select({ count: count() }).from(transactions).where(eq(transactions.userId, userId));
    const data = await db.select().from(transactions).where(eq(transactions.userId, userId))
      .orderBy(desc(transactions.createdAt)).limit(limit).offset(offset);
    return { data, pagination: { page, limit, total: Number(totalResult.count), totalPages: Math.ceil(Number(totalResult.count) / limit) } };
  }

  async getDocuments(userId: string) {
    return db.select().from(media)
      .where(and(eq(media.uploadedById, userId), eq(media.type, 'DOCUMENT'), eq(media.isDeleted, false)))
      .orderBy(desc(media.createdAt));
  }

  async uploadDocument(userId: string, data: { entityId: string; filename: string; url: string; mimeType: string; fileSize: number }) {
    const id = crypto.randomUUID();
    await db.insert(media).values({
      id, entityId: data.entityId, uploadedById: userId, type: 'DOCUMENT',
      url: data.url, filename: data.filename, mimeType: data.mimeType, fileSize: data.fileSize,
    });
    await db.insert(activities).values({
      id: crypto.randomUUID(), userId, action: 'DOCUMENT_UPLOADED' as never,
      entityType: 'document', description: `Uploaded ${data.filename}`,
    });
    return { id, filename: data.filename };
  }

  async getNotifications(userId: string, page = 1, limit = 20) {
    const offset = (page - 1) * limit;
    const [total] = await db.select({ count: count() }).from(notifications).where(eq(notifications.userId, userId));
    const [unread] = await db.select({ count: count() }).from(notifications)
      .where(and(eq(notifications.userId, userId), eq(notifications.isRead, false)));
    const data = await db.select().from(notifications).where(eq(notifications.userId, userId))
      .orderBy(desc(notifications.createdAt)).limit(limit).offset(offset);
    return { data, unreadCount: Number(unread.count), pagination: { page, limit, total: Number(total.count), totalPages: Math.ceil(Number(total.count) / limit) } };
  }

  async markNotificationRead(userId: string, notificationId: string) {
    await db.update(notifications).set({ isRead: true, readAt: new Date() })
      .where(and(eq(notifications.id, notificationId), eq(notifications.userId, userId)));
    return { success: true };
  }

  async markAllNotificationsRead(userId: string) {
    await db.update(notifications).set({ isRead: true, readAt: new Date() })
      .where(and(eq(notifications.userId, userId), eq(notifications.isRead, false)));
    return { success: true };
  }

  async getConversations(userId: string) {
    const parts = await db.select().from(conversationParticipants).where(eq(conversationParticipants.userId, userId));
    const convIds = parts.map(p => p.conversationId);
    if (convIds.length === 0) return [];
    return Promise.all(convIds.map(async (convId) => {
      const [conv] = await db.select().from(conversations).where(eq(conversations.id, convId)).limit(1);
      const [lastMsg] = await db.select().from(messages).where(eq(messages.conversationId, convId))
        .orderBy(desc(messages.createdAt)).limit(1);
      return { ...conv, lastMessage: lastMsg || null };
    }));
  }

  async getMessages(userId: string, conversationId: string) {
    const part = await db.select().from(conversationParticipants)
      .where(and(eq(conversationParticipants.conversationId, conversationId), eq(conversationParticipants.userId, userId)));
    if (part.length === 0) throw new BadRequestException('Not a participant');
    return db.select().from(messages).where(eq(messages.conversationId, conversationId)).orderBy(desc(messages.createdAt)).limit(50);
  }

  async sendMessage(userId: string, conversationId: string, content: string) {
    const part = await db.select().from(conversationParticipants)
      .where(and(eq(conversationParticipants.conversationId, conversationId), eq(conversationParticipants.userId, userId)));
    if (part.length === 0) throw new BadRequestException('Not a participant');
    const id = crypto.randomUUID();
    await db.insert(messages).values({ id, conversationId, senderId: userId, content });
    await db.update(conversations).set({ lastMessageAt: new Date() }).where(eq(conversations.id, conversationId));
    return { id, content, createdAt: new Date() };
  }

  async getLoginHistory(userId: string) {
    return db.select().from(activities)
      .where(and(eq(activities.userId, userId), eq(activities.action, 'LOGIN')))
      .orderBy(desc(activities.createdAt)).limit(20);
  }

  async getActiveSessions(userId: string) {
    return db.select().from(sessions)
      .where(and(eq(sessions.userId, userId), eq(sessions.isRevoked, false)))
      .orderBy(desc(sessions.createdAt));
  }

  async revokeSession(userId: string, sessionId: string) {
    const [session] = await db.select().from(sessions)
      .where(and(eq(sessions.id, sessionId), eq(sessions.userId, userId)));
    if (!session) throw new NotFoundException('Session not found');
    await db.update(sessions).set({ isRevoked: true }).where(eq(sessions.id, sessionId));
    return { success: true };
  }
}

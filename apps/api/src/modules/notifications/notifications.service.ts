import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { eq, desc, sql } from 'drizzle-orm';
import { db } from '../../database';
import { notifications } from '../../database/schema';
// TODO: Migrate to new schema (entities/transactions/activities)
// import { emailLogs, smsLogs } from '../../database/schema';

@Injectable()
export class NotificationsService {
  constructor(private configService: ConfigService) {}

  // In-App Notifications
  async createNotification(data: typeof notifications.$inferInsert) {
    await db
      .insert(notifications)
      .values(data);

    return data as any;
  }

  async getUserNotifications(userId: string, unreadOnly?: boolean) {
    const conditions = [eq(notifications.userId, userId)];
    if (unreadOnly) conditions.push(eq(notifications.isRead, false));

    return db.query.notifications.findMany({
      where: conditions.length > 0 ? sql`${conditions.join(' AND ')}` : undefined,
      orderBy: [desc(notifications.createdAt)],
      limit: 50,
    });
  }

  async markAsRead(id: string) {
    await db.update(notifications).set({ isRead: true }).where(eq(notifications.id, id));
    return { message: 'Notification marked as read' };
  }

  async markAllAsRead(userId: string) {
    await db
      .update(notifications)
      .set({ isRead: true })
      .where(eq(notifications.userId, userId));
    return { message: 'All notifications marked as read' };
  }

  async getUnreadCount(userId: string) {
    const [result] = await db
      .select({ count: sql<number>`count(*)` })
      .from(notifications)
      .where(sql`${notifications.userId} = ${userId} AND ${notifications.isRead} = false`);
    
    return { count: Number(result.count) };
  }

  async deleteNotification(id: string) {
    await db.delete(notifications).where(eq(notifications.id, id));
    return { message: 'Notification deleted' };
  }

  // Email
  // TODO: Migrate to new schema (entities/transactions/activities) — emailLogs table removed
  async sendEmail(to: string, subject: string, html: string, template?: string) {
    console.log(`Email sent to ${to}: ${subject}`);
    return { success: true, logId: crypto.randomUUID() };
  }

  // SMS
  // TODO: Migrate to new schema (entities/transactions/activities) — smsLogs table removed
  async sendSMS(to: string, message: string) {
    console.log(`SMS sent to ${to}: ${message}`);
    return { success: true, logId: crypto.randomUUID() };
  }

  // Push Notification
  async sendPushNotification(userId: string, title: string, body: string, data?: Record<string, unknown>) {
    // Create in-app notification
    await this.createNotification({
      id: crypto.randomUUID(),
      userId,
      type: 'PUSH',
      title,
      message: body,
      metadata: data,
    });

    // TODO: Integrate with Firebase Cloud Messaging
    console.log(`Push notification sent to ${userId}: ${title}`);

    return { success: true };
  }

  // Bulk Notifications
  async sendBulkEmail(recipients: string[], subject: string, html: string) {
    const results = await Promise.allSettled(
      recipients.map((to) => this.sendEmail(to, subject, html))
    );

    return {
      sent: results.filter((r) => r.status === 'fulfilled' && r.value.success).length,
      failed: results.filter((r) => r.status === 'rejected' || !r.value?.success).length,
      total: recipients.length,
    };
  }

  // Email Templates
  getWelcomeEmail(name: string): string {
    return `
      <h1>Welcome to Aurora Havens!</h1>
      <p>Dear ${name},</p>
      <p>Thank you for joining Aurora Havens Digital Ecosystem. We're excited to have you on board!</p>
      <p>You can now explore our properties, investment opportunities, and support our foundation initiatives.</p>
      <p>Best regards,<br>The Aurora Havens Team</p>
    `;
  }

  getDonationReceipt(name: string, amount: number, program: string): string {
    return `
      <h1>Donation Receipt</h1>
      <p>Dear ${name},</p>
      <p>Thank you for your generous donation of $${amount.toFixed(2)} to our ${program} program.</p>
      <p>Your contribution helps us make a real difference in communities across Africa.</p>
      <p>Best regards,<br>The Aurora Havens Foundation Team</p>
    `;
  }

  getInvestmentConfirmation(name: string, amount: number, opportunity: string): string {
    return `
      <h1>Investment Confirmation</h1>
      <p>Dear ${name},</p>
      <p>Your investment of $${amount.toFixed(2)} in ${opportunity} has been confirmed.</p>
      <p>You can track your investment and returns through your investor dashboard.</p>
      <p>Best regards,<br>The Aurora Havens Investment Team</p>
    `;
  }
}

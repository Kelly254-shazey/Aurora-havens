import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { eq, desc, asc, ilike, sql } from 'drizzle-orm';
import * as bcrypt from 'bcryptjs';
import { db } from '../../database';
import { users } from '../../database/schema';
import { PaginationDto } from '../../common/dto/pagination.dto';

@Injectable()
export class UsersService {
  async findAll(paginationDto: PaginationDto & { search?: string; role?: string }) {
    const { page = 1, limit = 12, sortBy = 'createdAt', sortOrder = 'desc', search, role } = paginationDto;
    const offset = (page - 1) * limit;

    let query = db.select().from(users).$dynamic();

    if (search) {
      query = query.where(
        sql`${ilike(users.firstName, `%${search}%`)} OR ${ilike(users.lastName, `%${search}%`)} OR ${ilike(users.email, `%${search}%`)}`,
      );
    }

    if (role) {
      query = query.where(eq(users.role, role as never));
    }

    const orderFn = sortOrder === 'asc' ? asc : desc;
    const orderByColumn = users.createdAt;
    query = query.orderBy(orderFn(orderByColumn));

    const [countResult] = await db
      .select({ count: sql<number>`count(*)` })
      .from(users);

    const data = await query.limit(limit).offset(offset);

    // Remove passwords
    const sanitizedData = data.map(({ password, ...rest }) => rest);

    return {
      data: sanitizedData,
      pagination: {
        page,
        limit,
        total: Number(countResult.count),
        totalPages: Math.ceil(Number(countResult.count) / limit),
      },
    };
  }

  async findById(id: string) {
    const user = await db.query.users.findFirst({
      where: eq(users.id, id),
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    const { password, ...result } = user;
    return result;
  }

  async update(id: string, updateData: Partial<typeof users.$inferInsert>) {
    const { password: _pw, role: _role, id: _id, createdAt: _createdAt, ...safeData } = updateData;

    const user = await this.findById(id);

    if (safeData.email && safeData.email !== user.email) {
      const existing = await db.query.users.findFirst({
        where: eq(users.email, safeData.email),
      });
      if (existing) {
        throw new ConflictException('Email already in use');
      }
    }

    const setData: Record<string, unknown> = { ...safeData, updatedAt: new Date() };
    if (_pw) {
      setData.password = await bcrypt.hash(_pw, 12);
    }

    await db
      .update(users)
      .set(setData)
      .where(eq(users.id, id));

    const updated = await this.findById(id);
    return updated;
  }

  async remove(id: string) {
    await this.findById(id);
    await db.delete(users).where(eq(users.id, id));
    return { message: 'User deleted successfully' };
  }

  async getStats() {
    const [totalUsers] = await db
      .select({ count: sql<number>`count(*)` })
      .from(users);

    const [activeUsers] = await db
      .select({ count: sql<number>`count(*)` })
      .from(users)
      .where(eq(users.isActive, true));

    const roleStats = await db
      .select({
        role: users.role,
        count: sql<number>`count(*)`,
      })
      .from(users)
      .groupBy(users.role);

    return {
      total: Number(totalUsers.count),
      active: Number(activeUsers.count),
      byRole: roleStats.map((stat) => ({
        role: stat.role,
        count: Number(stat.count),
      })),
    };
  }
}

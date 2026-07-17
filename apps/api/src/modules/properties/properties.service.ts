import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { eq, desc, asc, sql, and, ilike, gte, lte, inArray } from 'drizzle-orm';
import { db } from '../../database';
// TODO: Migrate to new schema (entities/transactions/activities)
// import { properties, propertyImages, propertyFavorites, propertyInquiries } from '../../database/schema';
import { slugify } from '../../utils/helpers';

@Injectable()
export class PropertiesService {
  async findAll(query: {
    type?: string;
    status?: string;
    minPrice?: number;
    maxPrice?: number;
    bedrooms?: number;
    bathrooms?: number;
    city?: string;
    state?: string;
    features?: string[];
    search?: string;
    page?: number;
    limit?: number;
    sortBy?: string;
    sortOrder?: 'asc' | 'desc';
  }) {
    // TODO: Migrate to new schema (entities/transactions/activities)
    // const { type, status, minPrice, maxPrice, bedrooms, bathrooms, city, state, features, search, page = 1, limit = 12, sortBy = 'createdAt', sortOrder = 'desc' } = query;
    // const offset = (page - 1) * limit;
    // const conditions = [];
    // if (type) conditions.push(eq(properties.type, type as never));
    // if (status) conditions.push(eq(properties.status, status as never));
    // if (minPrice) conditions.push(gte(properties.price, minPrice.toString()));
    // if (maxPrice) conditions.push(lte(properties.price, maxPrice.toString()));
    // if (bedrooms) conditions.push(eq(properties.bedrooms, bedrooms));
    // if (bathrooms) conditions.push(eq(properties.bathrooms, bathrooms));
    // if (city) conditions.push(sql`address->>'city' ILIKE ${`%${city}%`}`);
    // if (state) conditions.push(sql`address->>'state' ILIKE ${`%${state}%`}`);
    // if (search) {
    //   conditions.push(
    //     sql`${ilike(properties.title, `%${search}%`)} OR ${ilike(properties.description, `%${search}%`)}`,
    //   );
    // }
    // const whereClause = conditions.length > 0 ? and(...conditions) : undefined;
    // const [countResult] = await db.select({ count: sql<number>`count(*)` }).from(properties).where(whereClause);
    // const orderFn = sortOrder === 'asc' ? asc : desc;
    // const orderByColumn = properties.createdAt;
    // const data = await db.query.properties.findMany({
    //   where: whereClause,
    //   with: {
    //     images: true,
    //     agent: { columns: { id: true, firstName: true, lastName: true, email: true, phone: true, avatar: true } },
    //   },
    //   orderBy: [orderFn(orderByColumn)],
    //   limit,
    //   offset,
    // });
    // return { data, pagination: { page, limit, total: Number(countResult.count), totalPages: Math.ceil(Number(countResult.count) / limit) } };
    throw new Error('TODO: Migrate to new schema (entities/transactions/activities)');
  }

  async findBySlug(slug: string) {
    // TODO: Migrate to new schema (entities/transactions/activities)
    // const property = await db.query.properties.findFirst({
    //   where: eq(properties.slug, slug),
    //   with: {
    //     images: { orderBy: [asc(propertyImages.order)] },
    //     agent: { columns: { id: true, firstName: true, lastName: true, email: true, phone: true, avatar: true } },
    //   },
    // });
    // if (!property) throw new NotFoundException('Property not found');
    // await db.update(properties).set({ views: sql`${properties.views} + 1` }).where(eq(properties.id, property.id));
    // return property;
    throw new Error('TODO: Migrate to new schema (entities/transactions/activities)');
  }

  async findById(id: string) {
    // TODO: Migrate to new schema (entities/transactions/activities)
    // const property = await db.query.properties.findFirst({
    //   where: eq(properties.id, id),
    //   with: {
    //     images: { orderBy: [asc(propertyImages.order)] },
    //     agent: { columns: { id: true, firstName: true, lastName: true, email: true, phone: true, avatar: true } },
    //   },
    // });
    // if (!property) throw new NotFoundException('Property not found');
    // return property;
    throw new Error('TODO: Migrate to new schema (entities/transactions/activities)');
  }

  async create(data: any, images?: Array<{ url: string; alt: string; isPrimary?: boolean }>) {
    // TODO: Migrate to new schema (entities/transactions/activities)
    // const slug = slugify(data.title);
    // const existing = await db.query.properties.findFirst({ where: eq(properties.slug, slug) });
    // if (existing) throw new BadRequestException('A property with this title already exists');
    // const id = crypto.randomUUID();
    // await db.insert(properties).values({ ...data, slug, id });
    // if (images && images.length > 0) {
    //   await db.insert(propertyImages).values(
    //     images.map((img, index) => ({ propertyId: id, url: img.url, alt: img.alt, isPrimary: img.isPrimary || index === 0, order: index })),
    //   );
    // }
    // return this.findById(id);
    throw new Error('TODO: Migrate to new schema (entities/transactions/activities)');
  }

  async update(id: string, data: any) {
    // TODO: Migrate to new schema (entities/transactions/activities)
    // await this.findById(id);
    // if (data.title) data.slug = slugify(data.title);
    // await db.update(properties).set({ ...data, updatedAt: new Date() }).where(eq(properties.id, id));
    // return this.findById(id);
    throw new Error('TODO: Migrate to new schema (entities/transactions/activities)');
  }

  async remove(id: string) {
    // TODO: Migrate to new schema (entities/transactions/activities)
    // await this.findById(id);
    // await db.delete(properties).where(eq(properties.id, id));
    // return { message: 'Property deleted successfully' };
    throw new Error('TODO: Migrate to new schema (entities/transactions/activities)');
  }

  async toggleFavorite(userId: string, propertyId: string) {
    // TODO: Migrate to new schema (entities/transactions/activities)
    // const existing = await db.query.propertyFavorites.findFirst({
    //   where: and(eq(propertyFavorites.userId, userId), eq(propertyFavorites.propertyId, propertyId)),
    // });
    // if (existing) {
    //   await db.delete(propertyFavorites).where(eq(propertyFavorites.id, existing.id));
    //   return { isFavorite: false };
    // } else {
    //   await db.insert(propertyFavorites).values({ userId, propertyId });
    //   return { isFavorite: true };
    // }
    throw new Error('TODO: Migrate to new schema (entities/transactions/activities)');
  }

  async getUserFavorites(userId: string) {
    // TODO: Migrate to new schema (entities/transactions/activities)
    // const favorites = await db.query.propertyFavorites.findMany({
    //   where: eq(propertyFavorites.userId, userId),
    //   with: { property: { with: { images: true } } },
    // });
    // return favorites.map((fav) => fav.property);
    throw new Error('TODO: Migrate to new schema (entities/transactions/activities)');
  }

  async createInquiry(data: {
    propertyId: string;
    userId?: string;
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    message?: string;
  }) {
    // TODO: Migrate to new schema (entities/transactions/activities)
    // await this.findById(data.propertyId);
    // await db.insert(propertyInquiries).values(data);
    // await db.update(properties).set({ inquiries: sql`${properties.inquiries} + 1` }).where(eq(properties.id, data.propertyId));
    // return data as any;
    throw new Error('TODO: Migrate to new schema (entities/transactions/activities)');
  }

  async getFeatured() {
    // TODO: Migrate to new schema (entities/transactions/activities)
    // const featured = await db.query.properties.findMany({
    //   where: and(eq(properties.isFeatured, true), eq(properties.status, 'AVAILABLE')),
    //   with: { images: true },
    //   orderBy: [desc(properties.createdAt)],
    //   limit: 6,
    // });
    // return featured;
    throw new Error('TODO: Migrate to new schema (entities/transactions/activities)');
  }

  async getStats() {
    // TODO: Migrate to new schema (entities/transactions/activities)
    // const [totalProperties] = await db.select({ count: sql<number>`count(*)` }).from(properties);
    // const [availableProperties] = await db.select({ count: sql<number>`count(*)` }).from(properties).where(eq(properties.status, 'AVAILABLE'));
    // const [soldProperties] = await db.select({ count: sql<number>`count(*)` }).from(properties).where(eq(properties.status, 'SOLD'));
    // const typeStats = await db.select({ type: properties.type, count: sql<number>`count(*)` }).from(properties).groupBy(properties.type);
    // return {
    //   total: Number(totalProperties.count),
    //   available: Number(availableProperties.count),
    //   sold: Number(soldProperties.count),
    //   byType: typeStats.map((stat) => ({ type: stat.type, count: Number(stat.count) })),
    // };
    throw new Error('TODO: Migrate to new schema (entities/transactions/activities)');
  }
}

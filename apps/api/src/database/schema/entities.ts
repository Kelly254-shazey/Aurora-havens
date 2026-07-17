import { mysqlTable, varchar, text, boolean, int, timestamp, json, mysqlEnum } from 'drizzle-orm/mysql-core';

export const entities = mysqlTable('entities', {
  id: varchar('id', { length: 36 }).notNull().primaryKey(),
  type: mysqlEnum('type', ['PROPERTY','INVESTMENT_OPPORTUNITY','CONSTRUCTION_PROJECT','FOUNDATION_PROGRAM','FOUNDATION_EVENT','BLOG_POST','NEWS','PAGE','PROPERTY_VIEWING','OFFER','LEASE_AGREEMENT','MAINTENANCE_REQUEST','SUPPORT_TICKET','USER_PREFERENCE']).notNull(),
  slug: varchar('slug', { length: 255 }).notNull().unique(),
  title: varchar('title', { length: 255 }).notNull(),
  description: text('description'),
  status: mysqlEnum('status', ['DRAFT','PUBLISHED','ARCHIVED','SOLD','COMPLETED','ACTIVE','INACTIVE','PENDING','CONFIRMED','CANCELLED','EXPIRED','TERMINATED','RENEWED']).notNull().default('DRAFT'),
  createdById: varchar('created_by_id', { length: 36 }).notNull(),
  parentEntityId: varchar('parent_entity_id', { length: 36 }),
  attributes: json('attributes').notNull(),
  isFeatured: boolean('is_featured').notNull().default(false),
  isDeleted: boolean('is_deleted').notNull().default(false),
  viewCount: int('view_count').notNull().default(0),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

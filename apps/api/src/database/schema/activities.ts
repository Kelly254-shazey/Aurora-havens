import { mysqlTable, varchar, text, boolean, int, timestamp, json, mysqlEnum } from 'drizzle-orm/mysql-core';

export const activities = mysqlTable('activities', {
  id: varchar('id', { length: 36 }).notNull().primaryKey(),
  userId: varchar('user_id', { length: 36 }),
  entityId: varchar('entity_id', { length: 36 }),
  action: mysqlEnum('action', ['CREATE','UPDATE','DELETE','VIEW','LOGIN','LOGOUT','EXPORT','IMPORT','APPROVE','REJECT','PUBLISH','ARCHIVE','COMMENT','LIKE','SHARE','BOOKMARK','INQUIRY','SUPPORT_TICKET','SYSTEM','ROLE_ASSIGNED','ROLE_REMOVED','PAYMENT_RECEIVED','DOCUMENT_UPLOADED']).notNull(),
  entityType: varchar('entity_type', { length: 50 }),
  description: text('description'),
  oldValues: json('old_values'),
  newValues: json('new_values'),
  ipAddress: varchar('ip_address', { length: 45 }),
  userAgent: text('user_agent'),
  metadata: json('metadata'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

export const media = mysqlTable('media', {
  id: varchar('id', { length: 36 }).notNull().primaryKey(),
  entityId: varchar('entity_id', { length: 36 }).notNull(),
  uploadedById: varchar('uploaded_by_id', { length: 36 }).notNull(),
  type: mysqlEnum('type', ['IMAGE','DOCUMENT','VIDEO','AUDIO','FILE']).notNull(),
  url: text('url').notNull(),
  thumbnailUrl: text('thumbnail_url'),
  filename: varchar('filename', { length: 255 }).notNull(),
  mimeType: varchar('mime_type', { length: 100 }).notNull(),
  fileSize: int('file_size').notNull(),
  altText: varchar('alt_text', { length: 255 }),
  sortOrder: int('sort_order').notNull().default(0),
  isPrimary: boolean('is_primary').notNull().default(false),
  isDeleted: boolean('is_deleted').notNull().default(false),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

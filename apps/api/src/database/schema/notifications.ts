import { mysqlTable, varchar, text, boolean, timestamp, mysqlEnum, json } from 'drizzle-orm/mysql-core';

export const notifications = mysqlTable('notifications', {
  id: varchar('id', { length: 36 }).notNull().primaryKey(),
  userId: varchar('user_id', { length: 36 }).notNull(),
  type: mysqlEnum('type', ['EMAIL','SMS','PUSH','IN_APP']).notNull().default('IN_APP'),
  title: varchar('title', { length: 255 }).notNull(),
  message: text('message').notNull(),
  entityId: varchar('entity_id', { length: 36 }),
  actionUrl: text('action_url'),
  isRead: boolean('is_read').notNull().default(false),
  readAt: timestamp('read_at'),
  metadata: json('metadata'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

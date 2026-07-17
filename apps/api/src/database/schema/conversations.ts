import { mysqlTable, varchar, text, boolean, timestamp, int, mysqlEnum } from 'drizzle-orm/mysql-core';

export const conversations = mysqlTable('conversations', {
  id: varchar('id', { length: 36 }).notNull().primaryKey(),
  title: varchar('title', { length: 255 }),
  isGroup: boolean('is_group').notNull().default(false),
  createdById: varchar('created_by_id', { length: 36 }).notNull(),
  lastMessageAt: timestamp('last_message_at'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

export const conversationParticipants = mysqlTable('conversation_participants', {
  id: varchar('id', { length: 36 }).notNull().primaryKey(),
  conversationId: varchar('conversation_id', { length: 36 }).notNull(),
  userId: varchar('user_id', { length: 36 }).notNull(),
  role: mysqlEnum('role', ['MEMBER','ADMIN']).notNull().default('MEMBER'),
  lastReadAt: timestamp('last_read_at'),
  isMuted: boolean('is_muted').notNull().default(false),
  joinedAt: timestamp('joined_at').notNull().defaultNow(),
});

export const messages = mysqlTable('messages', {
  id: varchar('id', { length: 36 }).notNull().primaryKey(),
  conversationId: varchar('conversation_id', { length: 36 }).notNull(),
  senderId: varchar('sender_id', { length: 36 }).notNull(),
  content: text('content').notNull(),
  type: mysqlEnum('type', ['TEXT','IMAGE','FILE','SYSTEM']).notNull().default('TEXT'),
  isDeleted: boolean('is_deleted').notNull().default(false),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

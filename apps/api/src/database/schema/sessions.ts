import { mysqlTable, varchar, text, boolean, timestamp, mysqlEnum } from 'drizzle-orm/mysql-core';

export const sessions = mysqlTable('sessions', {
  id: varchar('id', { length: 36 }).notNull().primaryKey(),
  userId: varchar('user_id', { length: 36 }).notNull(),
  tokenHash: varchar('token_hash', { length: 255 }).notNull(),
  tokenType: mysqlEnum('token_type', ['REFRESH','API_KEY','EMAIL_VERIFY','PASSWORD_RESET']).notNull(),
  ipAddress: varchar('ip_address', { length: 45 }),
  userAgent: text('user_agent'),
  expiresAt: timestamp('expires_at').notNull(),
  isRevoked: boolean('is_revoked').notNull().default(false),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

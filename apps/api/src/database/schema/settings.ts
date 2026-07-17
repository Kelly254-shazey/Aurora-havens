import { mysqlTable, varchar, text, boolean, timestamp, mysqlEnum } from 'drizzle-orm/mysql-core';

export const settings = mysqlTable('settings', {
  id: varchar('id', { length: 36 }).notNull().primaryKey(),
  category: varchar('category', { length: 50 }).notNull(),
  keyName: varchar('key_name', { length: 100 }).notNull(),
  value: text('value'),
  valueType: mysqlEnum('value_type', ['STRING','NUMBER','BOOLEAN','JSON']).notNull().default('STRING'),
  isPublic: boolean('is_public').notNull().default(false),
  updatedById: varchar('updated_by_id', { length: 36 }),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

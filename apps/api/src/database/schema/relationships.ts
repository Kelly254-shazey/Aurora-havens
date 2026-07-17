import { mysqlTable, varchar, text, boolean, int, timestamp, json, mysqlEnum, decimal } from 'drizzle-orm/mysql-core';

export const relationships = mysqlTable('relationships', {
  id: varchar('id', { length: 36 }).notNull().primaryKey(),
  fromType: mysqlEnum('from_type', ['USER','ENTITY']).notNull(),
  fromId: varchar('from_id', { length: 36 }).notNull(),
  toType: mysqlEnum('to_type', ['USER','ENTITY']).notNull(),
  toId: varchar('to_id', { length: 36 }).notNull(),
  relationshipType: mysqlEnum('relationship_type', ['OWNER','AGENT','TENANT','INVESTOR','DONOR','FAVORITE','BOOKMARK','AUTHOR','CATEGORY','TAG','PARENT','CHILD','ASSIGNEE','VIEWER','ROLE','SAVED','BOOKED','OFFERED','LEASED']).notNull(),
  metadata: json('metadata'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

export const transactions = mysqlTable('transactions', {
  id: varchar('id', { length: 36 }).notNull().primaryKey(),
  userId: varchar('user_id', { length: 36 }).notNull(),
  entityId: varchar('entity_id', { length: 36 }),
  type: mysqlEnum('type', ['PAYMENT','DONATION','INVESTMENT','REFUND','SUBSCRIPTION','FEE']).notNull(),
  status: mysqlEnum('status', ['PENDING','PROCESSING','COMPLETED','FAILED','REFUNDED','CANCELLED']).notNull().default('PENDING'),
  amount: decimal('amount', { precision: 15, scale: 2 }).notNull(),
  currency: varchar('currency', { length: 3 }).notNull().default('KES'),
  paymentMethod: mysqlEnum('payment_method', ['MPESA','CARD','PAYPAL','BANK_TRANSFER','CASH','OTHER']),
  paymentReference: varchar('payment_reference', { length: 255 }),
  paymentMetadata: json('payment_metadata'),
  notes: text('notes'),
  isDeleted: boolean('is_deleted').notNull().default(false),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

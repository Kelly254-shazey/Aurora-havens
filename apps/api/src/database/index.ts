import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2';
import * as schema from './schema';

const pool = mysql.createPool({
  uri: process.env.DATABASE_URL || 'mysql://root@localhost:3306/aurora_havens',
  connectionLimit: 25,
  connectTimeout: 60000,
  idleTimeout: 300000,
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
});

export const db = drizzle(pool.promise(), { schema, mode: 'default' });

export default db;

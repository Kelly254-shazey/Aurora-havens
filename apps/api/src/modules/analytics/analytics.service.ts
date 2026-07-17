import { Injectable } from '@nestjs/common';
import { sql, eq, desc, and } from 'drizzle-orm';
import { db } from '../../database';
import { users } from '../../database/schema';
// TODO: Migrate to new schema (entities/transactions/activities)
// import {
//   properties,
//   investments,
//   donations,
//   leads,
//   supportTickets,
//   foundationPrograms,
// } from '../../database/schema';

@Injectable()
export class AnalyticsService {
  async getDashboardStats() {
    // TODO: Migrate to new schema (entities/transactions/activities)
    // const [totalProperties] = await db.select({ count: sql<number>`count(*)` }).from(properties);
    // const [totalSales] = await db.select({ count: sql<number>`count(*)` }).from(properties).where(eq(properties.status, 'SOLD'));
    // const [totalRevenue] = await db.select({ sum: sql<string>`COALESCE(SUM(price), 0)` }).from(properties).where(eq(properties.status, 'SOLD'));
    // const [totalLeads] = await db.select({ count: sql<number>`count(*)` }).from(leads);
    // const [totalInvestors] = await db.select({ count: sql<number>`count(DISTINCT investor_id)` }).from(investments);
    // const [totalDonations] = await db.select({ sum: sql<string>`COALESCE(SUM(amount), 0)` }).from(donations).where(eq(donations.status, 'COMPLETED'));
    // const [totalBeneficiaries] = await db.select({ sum: sql<string>`COALESCE(SUM(beneficiaries), 0)` }).from(foundationPrograms);
    // return {
    //   totalProperties: Number(totalProperties.count),
    //   totalSales: Number(totalSales.count),
    //   totalRevenue: Number(totalRevenue.sum),
    //   totalLeads: Number(totalLeads.count),
    //   totalInvestors: Number(totalInvestors.count),
    //   totalDonations: Number(totalDonations.sum),
    //   totalBeneficiaries: Number(totalBeneficiaries.sum),
    // };
    throw new Error('TODO: Migrate to new schema (entities/transactions/activities)');
  }

  async getMonthlyRevenue(months: number = 12) {
    // TODO: Migrate to new schema (entities/transactions/activities)
    throw new Error('TODO: Migrate to new schema (entities/transactions/activities)');
  }

  async getMonthlyDonations(months: number = 12) {
    // TODO: Migrate to new schema (entities/transactions/activities)
    throw new Error('TODO: Migrate to new schema (entities/transactions/activities)');
  }

  async getMonthlyInvestments(months: number = 12) {
    // TODO: Migrate to new schema (entities/transactions/activities)
    throw new Error('TODO: Migrate to new schema (entities/transactions/activities)');
  }

  async getPropertyByType() {
    // TODO: Migrate to new schema (entities/transactions/activities)
    throw new Error('TODO: Migrate to new schema (entities/transactions/activities)');
  }

  async getLeadBySource() {
    // TODO: Migrate to new schema (entities/transactions/activities)
    throw new Error('TODO: Migrate to new schema (entities/transactions/activities)');
  }

  async getLeadByStatus() {
    // TODO: Migrate to new schema (entities/transactions/activities)
    throw new Error('TODO: Migrate to new schema (entities/transactions/activities)');
  }

  async getDonationByCategory() {
    // TODO: Migrate to new schema (entities/transactions/activities)
    throw new Error('TODO: Migrate to new schema (entities/transactions/activities)');
  }

  async getRecentActivity(limit: number = 10) {
    // TODO: Migrate to new schema (entities/transactions/activities)
    throw new Error('TODO: Migrate to new schema (entities/transactions/activities)');
  }

  async getConversionRate() {
    // TODO: Migrate to new schema (entities/transactions/activities)
    throw new Error('TODO: Migrate to new schema (entities/transactions/activities)');
  }

  async getPropertyStats() {
    // TODO: Migrate to new schema (entities/transactions/activities)
    throw new Error('TODO: Migrate to new schema (entities/transactions/activities)');
  }

  async getTopProperties(limit: number = 5) {
    // TODO: Migrate to new schema (entities/transactions/activities)
    throw new Error('TODO: Migrate to new schema (entities/transactions/activities)');
  }
}

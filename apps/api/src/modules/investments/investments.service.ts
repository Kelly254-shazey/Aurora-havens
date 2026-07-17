import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { eq, desc, sql, and, lt } from 'drizzle-orm';
import { db } from '../../database';
// TODO: Migrate to new schema (entities/transactions/activities)
// import {
//   investmentOpportunities,
//   investments,
//   investmentReturns,
//   investmentDocuments,
// } from '../../database/schema';

@Injectable()
export class InvestmentsService {
  // Opportunities
  async findAllOpportunities(query: { type?: string; status?: string; page?: number; limit?: number }) {
    // TODO: Migrate to new schema (entities/transactions/activities)
    throw new Error('TODO: Migrate to new schema (entities/transactions/activities)');
  }

  async findOpportunityById(id: string) {
    // TODO: Migrate to new schema (entities/transactions/activities)
    throw new Error('TODO: Migrate to new schema (entities/transactions/activities)');
  }

  async createOpportunity(data: any) {
    // TODO: Migrate to new schema (entities/transactions/activities)
    throw new Error('TODO: Migrate to new schema (entities/transactions/activities)');
  }

  async updateOpportunity(id: string, data: any) {
    // TODO: Migrate to new schema (entities/transactions/activities)
    throw new Error('TODO: Migrate to new schema (entities/transactions/activities)');
  }

  async removeOpportunity(id: string) {
    // TODO: Migrate to new schema (entities/transactions/activities)
    throw new Error('TODO: Migrate to new schema (entities/transactions/activities)');
  }

  // Investments
  async createInvestment(data: any) {
    // TODO: Migrate to new schema (entities/transactions/activities)
    throw new Error('TODO: Migrate to new schema (entities/transactions/activities)');
  }

  async getInvestments(query: { investorId?: string; opportunityId?: string; status?: string; userId?: string }) {
    // TODO: Migrate to new schema (entities/transactions/activities)
    throw new Error('TODO: Migrate to new schema (entities/transactions/activities)');
  }

  async getInvestmentById(id: string, userId?: string) {
    // TODO: Migrate to new schema (entities/transactions/activities)
    throw new Error('TODO: Migrate to new schema (entities/transactions/activities)');
  }

  async updateInvestmentStatus(id: string, status: string, userId?: string) {
    // TODO: Migrate to new schema (entities/transactions/activities)
    throw new Error('TODO: Migrate to new schema (entities/transactions/activities)');
  }

  // Returns
  async addReturn(data: any) {
    // TODO: Migrate to new schema (entities/transactions/activities)
    throw new Error('TODO: Migrate to new schema (entities/transactions/activities)');
  }

  async getReturns(investmentId: string) {
    // TODO: Migrate to new schema (entities/transactions/activities)
    throw new Error('TODO: Migrate to new schema (entities/transactions/activities)');
  }

  // Documents
  async addDocument(data: any) {
    // TODO: Migrate to new schema (entities/transactions/activities)
    throw new Error('TODO: Migrate to new schema (entities/transactions/activities)');
  }

  async getDocuments(investmentId: string) {
    // TODO: Migrate to new schema (entities/transactions/activities)
    throw new Error('TODO: Migrate to new schema (entities/transactions/activities)');
  }

  // Stats
  async getStats(investorId?: string) {
    // TODO: Migrate to new schema (entities/transactions/activities)
    throw new Error('TODO: Migrate to new schema (entities/transactions/activities)');
  }

  // Investor Dashboard
  async getInvestorDashboard(investorId: string) {
    // TODO: Migrate to new schema (entities/transactions/activities)
    throw new Error('TODO: Migrate to new schema (entities/transactions/activities)');
  }
}

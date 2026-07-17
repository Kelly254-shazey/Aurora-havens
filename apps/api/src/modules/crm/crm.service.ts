import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { eq, desc, sql, and, ilike } from 'drizzle-orm';
import { db } from '../../database';
// TODO: Migrate to new schema (entities/transactions/activities)
// import {
//   leads,
//   leadNotes,
//   leadActivities,
//   supportTickets,
//   ticketMessages,
// } from '../../database/schema';
import { generateTicketNumber } from '../../utils/helpers';

@Injectable()
export class CrmService {
  // Leads
  async findAllLeads(query: {
    status?: string;
    source?: string;
    assignedToId?: string;
    search?: string;
    page?: number;
    limit?: number;
  }) {
    // TODO: Migrate to new schema (entities/transactions/activities)
    throw new Error('TODO: Migrate to new schema (entities/transactions/activities)');
  }

  async findLeadById(id: string) {
    // TODO: Migrate to new schema (entities/transactions/activities)
    throw new Error('TODO: Migrate to new schema (entities/transactions/activities)');
  }

  async createLead(data: any) {
    // TODO: Migrate to new schema (entities/transactions/activities)
    throw new Error('TODO: Migrate to new schema (entities/transactions/activities)');
  }

  async updateLead(id: string, data: any) {
    // TODO: Migrate to new schema (entities/transactions/activities)
    throw new Error('TODO: Migrate to new schema (entities/transactions/activities)');
  }

  async removeLead(id: string) {
    // TODO: Migrate to new schema (entities/transactions/activities)
    throw new Error('TODO: Migrate to new schema (entities/transactions/activities)');
  }

  async addLeadNote(leadId: string, data: { content: string; authorId: string }) {
    // TODO: Migrate to new schema (entities/transactions/activities)
    throw new Error('TODO: Migrate to new schema (entities/transactions/activities)');
  }

  async addLeadActivity(leadId: string, data: any) {
    // TODO: Migrate to new schema (entities/transactions/activities)
    throw new Error('TODO: Migrate to new schema (entities/transactions/activities)');
  }

  async getLeadStats() {
    // TODO: Migrate to new schema (entities/transactions/activities)
    throw new Error('TODO: Migrate to new schema (entities/transactions/activities)');
  }

  // Support Tickets
  async findAllTickets(query: {
    status?: string;
    priority?: string;
    category?: string;
    assignedToId?: string;
    userId?: string;
    page?: number;
    limit?: number;
  }) {
    // TODO: Migrate to new schema (entities/transactions/activities)
    throw new Error('TODO: Migrate to new schema (entities/transactions/activities)');
  }

  async findTicketById(id: string) {
    // TODO: Migrate to new schema (entities/transactions/activities)
    throw new Error('TODO: Migrate to new schema (entities/transactions/activities)');
  }

  async createTicket(data: any) {
    // TODO: Migrate to new schema (entities/transactions/activities)
    throw new Error('TODO: Migrate to new schema (entities/transactions/activities)');
  }

  async updateTicket(id: string, data: any) {
    // TODO: Migrate to new schema (entities/transactions/activities)
    throw new Error('TODO: Migrate to new schema (entities/transactions/activities)');
  }

  async addTicketMessage(ticketId: string, data: any) {
    // TODO: Migrate to new schema (entities/transactions/activities)
    throw new Error('TODO: Migrate to new schema (entities/transactions/activities)');
  }

  async getTicketStats() {
    // TODO: Migrate to new schema (entities/transactions/activities)
    throw new Error('TODO: Migrate to new schema (entities/transactions/activities)');
  }
}

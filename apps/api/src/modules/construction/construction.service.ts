import { Injectable, NotFoundException } from '@nestjs/common';
import { eq, desc, sql, and } from 'drizzle-orm';
import { db } from '../../database';
// TODO: Migrate to new schema (entities/transactions/activities)
// import {
//   constructionPackages,
//   constructionProjects,
//   constructionUpdates,
//   constructionImages,
// } from '../../database/schema';

@Injectable()
export class ConstructionService {
  // Packages
  async findAllPackages() {
    // TODO: Migrate to new schema (entities/transactions/activities)
    throw new Error('TODO: Migrate to new schema (entities/transactions/activities)');
  }

  async findPackageById(id: string) {
    // TODO: Migrate to new schema (entities/transactions/activities)
    throw new Error('TODO: Migrate to new schema (entities/transactions/activities)');
  }

  async createPackage(data: any) {
    // TODO: Migrate to new schema (entities/transactions/activities)
    throw new Error('TODO: Migrate to new schema (entities/transactions/activities)');
  }

  async updatePackage(id: string, data: any) {
    // TODO: Migrate to new schema (entities/transactions/activities)
    throw new Error('TODO: Migrate to new schema (entities/transactions/activities)');
  }

  // Projects
  async findAllProjects(query: { status?: string; page?: number; limit?: number }) {
    // TODO: Migrate to new schema (entities/transactions/activities)
    throw new Error('TODO: Migrate to new schema (entities/transactions/activities)');
  }

  async findProjectById(id: string) {
    // TODO: Migrate to new schema (entities/transactions/activities)
    throw new Error('TODO: Migrate to new schema (entities/transactions/activities)');
  }

  async createProject(data: any) {
    // TODO: Migrate to new schema (entities/transactions/activities)
    throw new Error('TODO: Migrate to new schema (entities/transactions/activities)');
  }

  async updateProject(id: string, data: any) {
    // TODO: Migrate to new schema (entities/transactions/activities)
    throw new Error('TODO: Migrate to new schema (entities/transactions/activities)');
  }

  async removeProject(id: string) {
    // TODO: Migrate to new schema (entities/transactions/activities)
    throw new Error('TODO: Migrate to new schema (entities/transactions/activities)');
  }

  // Updates
  async addUpdate(data: any) {
    // TODO: Migrate to new schema (entities/transactions/activities)
    throw new Error('TODO: Migrate to new schema (entities/transactions/activities)');
  }

  async getUpdates(projectId: string) {
    // TODO: Migrate to new schema (entities/transactions/activities)
    throw new Error('TODO: Migrate to new schema (entities/transactions/activities)');
  }

  // Images
  async addImage(data: any) {
    // TODO: Migrate to new schema (entities/transactions/activities)
    throw new Error('TODO: Migrate to new schema (entities/transactions/activities)');
  }

  async getImages(projectId: string) {
    // TODO: Migrate to new schema (entities/transactions/activities)
    throw new Error('TODO: Migrate to new schema (entities/transactions/activities)');
  }

  // Stats
  async getStats() {
    // TODO: Migrate to new schema (entities/transactions/activities)
    throw new Error('TODO: Migrate to new schema (entities/transactions/activities)');
  }
}

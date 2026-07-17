import { Injectable, NotFoundException } from '@nestjs/common';
import { eq, desc, sql, and, ilike } from 'drizzle-orm';
import { db } from '../../database';
// TODO: Migrate to new schema (entities/transactions/activities)
// import {
//   pages,
//   blogPosts,
//   testimonials,
//   galleryImages,
//   news,
//   siteSettings,
// } from '../../database/schema';
import { slugify } from '../../utils/helpers';

@Injectable()
export class CmsService {
  // Pages
  async findAllPages(query: { isPublished?: boolean }) {
    // TODO: Migrate to new schema (entities/transactions/activities)
    throw new Error('TODO: Migrate to new schema (entities/transactions/activities)');
  }

  async findPageBySlug(slug: string) {
    // TODO: Migrate to new schema (entities/transactions/activities)
    throw new Error('TODO: Migrate to new schema (entities/transactions/activities)');
  }

  async createPage(data: any) {
    // TODO: Migrate to new schema (entities/transactions/activities)
    throw new Error('TODO: Migrate to new schema (entities/transactions/activities)');
  }

  async updatePage(id: string, data: any) {
    // TODO: Migrate to new schema (entities/transactions/activities)
    throw new Error('TODO: Migrate to new schema (entities/transactions/activities)');
  }

  async removePage(id: string) {
    // TODO: Migrate to new schema (entities/transactions/activities)
    throw new Error('TODO: Migrate to new schema (entities/transactions/activities)');
  }

  // Blog Posts
  async findAllPosts(query: { category?: string; isPublished?: boolean; search?: string; page?: number; limit?: number }) {
    // TODO: Migrate to new schema (entities/transactions/activities)
    throw new Error('TODO: Migrate to new schema (entities/transactions/activities)');
  }

  async findPostBySlug(slug: string) {
    // TODO: Migrate to new schema (entities/transactions/activities)
    throw new Error('TODO: Migrate to new schema (entities/transactions/activities)');
  }

  async createPost(data: any) {
    // TODO: Migrate to new schema (entities/transactions/activities)
    throw new Error('TODO: Migrate to new schema (entities/transactions/activities)');
  }

  async updatePost(id: string, data: any) {
    // TODO: Migrate to new schema (entities/transactions/activities)
    throw new Error('TODO: Migrate to new schema (entities/transactions/activities)');
  }

  async removePost(id: string) {
    // TODO: Migrate to new schema (entities/transactions/activities)
    throw new Error('TODO: Migrate to new schema (entities/transactions/activities)');
  }

  // Testimonials
  async findAllTestimonials(query: { isPublished?: boolean }) {
    // TODO: Migrate to new schema (entities/transactions/activities)
    throw new Error('TODO: Migrate to new schema (entities/transactions/activities)');
  }

  async createTestimonial(data: any) {
    // TODO: Migrate to new schema (entities/transactions/activities)
    throw new Error('TODO: Migrate to new schema (entities/transactions/activities)');
  }

  async updateTestimonial(id: string, data: any) {
    // TODO: Migrate to new schema (entities/transactions/activities)
    throw new Error('TODO: Migrate to new schema (entities/transactions/activities)');
  }

  async removeTestimonial(id: string) {
    // TODO: Migrate to new schema (entities/transactions/activities)
    throw new Error('TODO: Migrate to new schema (entities/transactions/activities)');
  }

  // Gallery
  async findAllGalleryImages(query: { category?: string }) {
    // TODO: Migrate to new schema (entities/transactions/activities)
    throw new Error('TODO: Migrate to new schema (entities/transactions/activities)');
  }

  async createGalleryImage(data: any) {
    // TODO: Migrate to new schema (entities/transactions/activities)
    throw new Error('TODO: Migrate to new schema (entities/transactions/activities)');
  }

  async removeGalleryImage(id: string) {
    // TODO: Migrate to new schema (entities/transactions/activities)
    throw new Error('TODO: Migrate to new schema (entities/transactions/activities)');
  }

  // News
  async findAllNews(query: { category?: string; isPublished?: boolean; page?: number; limit?: number }) {
    // TODO: Migrate to new schema (entities/transactions/activities)
    throw new Error('TODO: Migrate to new schema (entities/transactions/activities)');
  }

  async findNewsBySlug(slug: string) {
    // TODO: Migrate to new schema (entities/transactions/activities)
    throw new Error('TODO: Migrate to new schema (entities/transactions/activities)');
  }

  async createNews(data: any) {
    // TODO: Migrate to new schema (entities/transactions/activities)
    throw new Error('TODO: Migrate to new schema (entities/transactions/activities)');
  }

  // Site Settings
  async getSetting(key: string) {
    // TODO: Migrate to new schema (entities/transactions/activities)
    throw new Error('TODO: Migrate to new schema (entities/transactions/activities)');
  }

  async setSetting(key: string, value: unknown) {
    // TODO: Migrate to new schema (entities/transactions/activities)
    throw new Error('TODO: Migrate to new schema (entities/transactions/activities)');
  }

  async getAllSettings() {
    // TODO: Migrate to new schema (entities/transactions/activities)
    throw new Error('TODO: Migrate to new schema (entities/transactions/activities)');
  }
}

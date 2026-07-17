import { Injectable, BadRequestException } from '@nestjs/common';
import { db } from '../../database';
import { entities } from '../../database/schema/entities';

@Injectable()
export class ContactService {
  async submitContact(data: {
    name: string;
    email: string;
    phone?: string;
    subject: string;
    message: string;
  }) {
    if (!data.name || !data.email || !data.subject || !data.message) {
      throw new BadRequestException('Name, email, subject, and message are required');
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      throw new BadRequestException('Invalid email address');
    }

    const sanitizedMessage = data.message.replace(/<[^>]*>/g, '').trim();
    if (sanitizedMessage.length < 10) {
      throw new BadRequestException('Message must be at least 10 characters');
    }

    const slug = `contact-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;

    const [result] = await db.insert(entities).values({
      id: crypto.randomUUID(),
      type: 'SUPPORT_TICKET',
      slug,
      title: `[Contact] ${data.subject}`,
      description: sanitizedMessage,
      status: 'PENDING',
      createdById: '00000000-0000-0000-0000-000000000000',
      attributes: JSON.stringify({
        source: 'CONTACT_FORM',
        contactName: data.name.trim(),
        contactEmail: data.email.trim().toLowerCase(),
        contactPhone: data.phone?.trim() || null,
        category: data.subject,
        priority: 'MEDIUM',
      }),
      isFeatured: false,
      isDeleted: false,
      viewCount: 0,
    });

    return {
      success: true,
      message: 'Your message has been received. Our team will get back to you within 24 hours.',
      ticketId: slug,
    };
  }
}

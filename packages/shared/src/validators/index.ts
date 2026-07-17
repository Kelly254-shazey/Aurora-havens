import { z } from 'zod';

// Auth Validators
export const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

export const registerSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  password: z.string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number'),
  confirmPassword: z.string(),
  phone: z.string().optional(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword'],
});

export const forgotPasswordSchema = z.object({
  email: z.string().email('Invalid email address'),
});

export const resetPasswordSchema = z.object({
  token: z.string(),
  password: z.string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number'),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword'],
});

// Property Validators
export const propertySchema = z.object({
  title: z.string().min(5, 'Title must be at least 5 characters'),
  description: z.string().min(50, 'Description must be at least 50 characters'),
  type: z.enum(['RESIDENTIAL', 'COMMERCIAL', 'LAND', 'LUXURY', 'APARTMENT', 'VILLA']),
  status: z.enum(['AVAILABLE', 'SOLD', 'RENTED', 'PENDING', 'UNDER_CONSTRUCTION']),
  price: z.number().positive('Price must be positive'),
  currency: z.string().default('USD'),
  bedrooms: z.number().min(0).optional(),
  bathrooms: z.number().min(0).optional(),
  squareFeet: z.number().positive().optional(),
  lotSize: z.number().positive().optional(),
  yearBuilt: z.number().min(1900).max(new Date().getFullYear()).optional(),
  address: z.object({
    street: z.string().min(5, 'Street address is required'),
    city: z.string().min(2, 'City is required'),
    state: z.string().min(2, 'State is required'),
    country: z.string().min(2, 'Country is required'),
    zipCode: z.string().min(3, 'ZIP code is required'),
  }),
  features: z.array(z.string()).optional(),
  mapCoordinates: z.object({
    lat: z.number().min(-90).max(90),
    lng: z.number().min(-180).max(180),
  }).optional(),
  agentId: z.string().uuid().optional(),
  isFeatured: z.boolean().default(false),
  isNew: z.boolean().default(true),
});

export const propertyQuerySchema = z.object({
  type: z.enum(['RESIDENTIAL', 'COMMERCIAL', 'LAND', 'LUXURY', 'APARTMENT', 'VILLA']).optional(),
  status: z.enum(['AVAILABLE', 'SOLD', 'RENTED', 'PENDING', 'UNDER_CONSTRUCTION']).optional(),
  minPrice: z.number().min(0).optional(),
  maxPrice: z.number().min(0).optional(),
  bedrooms: z.number().min(0).optional(),
  bathrooms: z.number().min(0).optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  features: z.array(z.string()).optional(),
  search: z.string().optional(),
  page: z.number().min(1).default(1),
  limit: z.number().min(1).max(100).default(12),
  sortBy: z.string().optional(),
  sortOrder: z.enum(['asc', 'desc']).default('desc'),
});

// Investment Validators
export const investmentSchema = z.object({
  opportunityId: z.string().uuid('Invalid opportunity ID'),
  amount: z.number().positive('Amount must be positive'),
  currency: z.string().default('USD'),
});

export const investmentOpportunitySchema = z.object({
  title: z.string().min(5, 'Title must be at least 5 characters'),
  description: z.string().min(50, 'Description must be at least 50 characters'),
  propertyId: z.string().uuid().optional(),
  type: z.enum(['REAL_ESTATE', 'CONSTRUCTION', 'DEVELOPMENT', 'FIXED_INCOME']),
  minInvestment: z.number().positive('Minimum investment must be positive'),
  maxInvestment: z.number().positive('Maximum investment must be positive'),
  expectedROI: z.number().min(0).max(100, 'ROI must be between 0 and 100'),
  duration: z.number().positive('Duration must be positive'),
  currency: z.string().default('USD'),
  totalSlots: z.number().positive('Total slots must be positive'),
}).refine((data) => data.maxInvestment > data.minInvestment, {
  message: 'Maximum investment must be greater than minimum',
  path: ['maxInvestment'],
});

// Donation Validators
export const donationSchema = z.object({
  programId: z.string().uuid('Invalid program ID'),
  amount: z.number().positive('Amount must be positive'),
  currency: z.string().default('USD'),
  paymentMethod: z.enum(['CARD', 'PAYPAL', 'BANK_TRANSFER', 'MOBILE_MONEY']),
  isRecurring: z.boolean().default(false),
  recurringInterval: z.enum(['WEEKLY', 'MONTHLY', 'QUARTERLY', 'YEARLY']).optional(),
  message: z.string().max(500, 'Message must be at most 500 characters').optional(),
  isAnonymous: z.boolean().default(false),
}).refine((data) => !data.isRecurring || data.recurringInterval, {
  message: 'Recurring interval is required for recurring donations',
  path: ['recurringInterval'],
});

// Foundation Program Validators
export const foundationProgramSchema = z.object({
  title: z.string().min(5, 'Title must be at least 5 characters'),
  description: z.string().min(50, 'Description must be at least 50 characters'),
  category: z.enum(['HEALTHCARE', 'EDUCATION', 'FEEDING', 'WOMEN', 'YOUTH', 'COMMUNITY']),
  goals: z.string().min(20, 'Goals must be at least 20 characters'),
  targetAmount: z.number().positive('Target amount must be positive'),
  status: z.enum(['ACTIVE', 'COMPLETED', 'UPCOMING']),
  startDate: z.string().or(z.date()),
  endDate: z.string().or(z.date()).optional(),
});

// Construction Validators
export const constructionProjectSchema = z.object({
  title: z.string().min(5, 'Title must be at least 5 characters'),
  description: z.string().min(50, 'Description must be at least 50 characters'),
  propertyId: z.string().uuid().optional(),
  packageId: z.string().uuid('Invalid package ID'),
  startDate: z.string().or(z.date()),
  expectedEndDate: z.string().or(z.date()),
  cost: z.number().positive('Cost must be positive'),
  currency: z.string().default('USD'),
  contractorId: z.string().uuid().optional(),
});

// Lead Validators
export const leadSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 characters'),
  source: z.enum(['WEBSITE', 'PHONE', 'EMAIL', 'REFERRAL', 'SOCIAL_MEDIA', 'WALK_IN', 'ADVERTISEMENT']),
  propertyId: z.string().uuid().optional(),
  assignedToId: z.string().uuid().optional(),
  notes: z.string().optional(),
});

// Support Ticket Validators
export const supportTicketSchema = z.object({
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  description: z.string().min(20, 'Description must be at least 20 characters'),
  category: z.enum(['GENERAL', 'PROPERTY_INQUIRY', 'PAYMENT', 'INVESTMENT', 'DONATION', 'TECHNICAL']),
  priority: z.enum(['LOW', 'MEDIUM', 'HIGH', 'URGENT']).default('MEDIUM'),
});

// CMS Validators
export const pageSchema = z.object({
  title: z.string().min(5, 'Title must be at least 5 characters'),
  slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'Invalid slug format'),
  content: z.string().min(10, 'Content is required'),
  metaTitle: z.string().max(60).optional(),
  metaDescription: z.string().max(160).optional(),
  isPublished: z.boolean().default(false),
});

export const blogPostSchema = z.object({
  title: z.string().min(5, 'Title must be at least 5 characters'),
  slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'Invalid slug format'),
  excerpt: z.string().min(20, 'Excerpt must be at least 20 characters'),
  content: z.string().min(100, 'Content must be at least 100 characters'),
  featuredImage: z.string().url('Featured image URL is required'),
  category: z.string().min(2, 'Category is required'),
  tags: z.array(z.string()).default([]),
  isPublished: z.boolean().default(false),
});

export const testimonialSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  role: z.string().min(2, 'Role is required'),
  content: z.string().min(20, 'Content must be at least 20 characters'),
  image: z.string().url('Image URL is required'),
  rating: z.number().min(1).max(5),
  isPublished: z.boolean().default(false),
});

// Contact Form Validator
export const contactFormSchema = z.object({
  firstName: z.string().min(2, 'First name is required'),
  lastName: z.string().min(2, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number is required'),
  subject: z.string().min(5, 'Subject is required'),
  message: z.string().min(20, 'Message must be at least 20 characters'),
});

// User Profile Validators
export const updateProfileSchema = z.object({
  firstName: z.string().min(2).optional(),
  lastName: z.string().min(2).optional(),
  phone: z.string().optional(),
  avatar: z.string().url().optional(),
});

export const changePasswordSchema = z.object({
  currentPassword: z.string().min(8),
  newPassword: z.string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number'),
  confirmPassword: z.string(),
}).refine((data) => data.newPassword === data.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword'],
});

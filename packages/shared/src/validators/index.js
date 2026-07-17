"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changePasswordSchema = exports.updateProfileSchema = exports.contactFormSchema = exports.testimonialSchema = exports.blogPostSchema = exports.pageSchema = exports.supportTicketSchema = exports.leadSchema = exports.constructionProjectSchema = exports.foundationProgramSchema = exports.donationSchema = exports.investmentOpportunitySchema = exports.investmentSchema = exports.propertyQuerySchema = exports.propertySchema = exports.resetPasswordSchema = exports.forgotPasswordSchema = exports.registerSchema = exports.loginSchema = void 0;
const zod_1 = require("zod");
exports.loginSchema = zod_1.z.object({
    email: zod_1.z.string().email('Invalid email address'),
    password: zod_1.z.string().min(8, 'Password must be at least 8 characters'),
});
exports.registerSchema = zod_1.z.object({
    firstName: zod_1.z.string().min(2, 'First name must be at least 2 characters'),
    lastName: zod_1.z.string().min(2, 'Last name must be at least 2 characters'),
    email: zod_1.z.string().email('Invalid email address'),
    password: zod_1.z.string()
        .min(8, 'Password must be at least 8 characters')
        .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
        .regex(/[0-9]/, 'Password must contain at least one number'),
    confirmPassword: zod_1.z.string(),
    phone: zod_1.z.string().optional(),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
});
exports.forgotPasswordSchema = zod_1.z.object({
    email: zod_1.z.string().email('Invalid email address'),
});
exports.resetPasswordSchema = zod_1.z.object({
    token: zod_1.z.string(),
    password: zod_1.z.string()
        .min(8, 'Password must be at least 8 characters')
        .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
        .regex(/[0-9]/, 'Password must contain at least one number'),
    confirmPassword: zod_1.z.string(),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
});
exports.propertySchema = zod_1.z.object({
    title: zod_1.z.string().min(5, 'Title must be at least 5 characters'),
    description: zod_1.z.string().min(50, 'Description must be at least 50 characters'),
    type: zod_1.z.enum(['RESIDENTIAL', 'COMMERCIAL', 'LAND', 'LUXURY', 'APARTMENT', 'VILLA']),
    status: zod_1.z.enum(['AVAILABLE', 'SOLD', 'RENTED', 'PENDING', 'UNDER_CONSTRUCTION']),
    price: zod_1.z.number().positive('Price must be positive'),
    currency: zod_1.z.string().default('USD'),
    bedrooms: zod_1.z.number().min(0).optional(),
    bathrooms: zod_1.z.number().min(0).optional(),
    squareFeet: zod_1.z.number().positive().optional(),
    lotSize: zod_1.z.number().positive().optional(),
    yearBuilt: zod_1.z.number().min(1900).max(new Date().getFullYear()).optional(),
    address: zod_1.z.object({
        street: zod_1.z.string().min(5, 'Street address is required'),
        city: zod_1.z.string().min(2, 'City is required'),
        state: zod_1.z.string().min(2, 'State is required'),
        country: zod_1.z.string().min(2, 'Country is required'),
        zipCode: zod_1.z.string().min(3, 'ZIP code is required'),
    }),
    features: zod_1.z.array(zod_1.z.string()).optional(),
    mapCoordinates: zod_1.z.object({
        lat: zod_1.z.number().min(-90).max(90),
        lng: zod_1.z.number().min(-180).max(180),
    }).optional(),
    agentId: zod_1.z.string().uuid().optional(),
    isFeatured: zod_1.z.boolean().default(false),
    isNew: zod_1.z.boolean().default(true),
});
exports.propertyQuerySchema = zod_1.z.object({
    type: zod_1.z.enum(['RESIDENTIAL', 'COMMERCIAL', 'LAND', 'LUXURY', 'APARTMENT', 'VILLA']).optional(),
    status: zod_1.z.enum(['AVAILABLE', 'SOLD', 'RENTED', 'PENDING', 'UNDER_CONSTRUCTION']).optional(),
    minPrice: zod_1.z.number().min(0).optional(),
    maxPrice: zod_1.z.number().min(0).optional(),
    bedrooms: zod_1.z.number().min(0).optional(),
    bathrooms: zod_1.z.number().min(0).optional(),
    city: zod_1.z.string().optional(),
    state: zod_1.z.string().optional(),
    features: zod_1.z.array(zod_1.z.string()).optional(),
    search: zod_1.z.string().optional(),
    page: zod_1.z.number().min(1).default(1),
    limit: zod_1.z.number().min(1).max(100).default(12),
    sortBy: zod_1.z.string().optional(),
    sortOrder: zod_1.z.enum(['asc', 'desc']).default('desc'),
});
exports.investmentSchema = zod_1.z.object({
    opportunityId: zod_1.z.string().uuid('Invalid opportunity ID'),
    amount: zod_1.z.number().positive('Amount must be positive'),
    currency: zod_1.z.string().default('USD'),
});
exports.investmentOpportunitySchema = zod_1.z.object({
    title: zod_1.z.string().min(5, 'Title must be at least 5 characters'),
    description: zod_1.z.string().min(50, 'Description must be at least 50 characters'),
    propertyId: zod_1.z.string().uuid().optional(),
    type: zod_1.z.enum(['REAL_ESTATE', 'CONSTRUCTION', 'DEVELOPMENT', 'FIXED_INCOME']),
    minInvestment: zod_1.z.number().positive('Minimum investment must be positive'),
    maxInvestment: zod_1.z.number().positive('Maximum investment must be positive'),
    expectedROI: zod_1.z.number().min(0).max(100, 'ROI must be between 0 and 100'),
    duration: zod_1.z.number().positive('Duration must be positive'),
    currency: zod_1.z.string().default('USD'),
    totalSlots: zod_1.z.number().positive('Total slots must be positive'),
}).refine((data) => data.maxInvestment > data.minInvestment, {
    message: 'Maximum investment must be greater than minimum',
    path: ['maxInvestment'],
});
exports.donationSchema = zod_1.z.object({
    programId: zod_1.z.string().uuid('Invalid program ID'),
    amount: zod_1.z.number().positive('Amount must be positive'),
    currency: zod_1.z.string().default('USD'),
    paymentMethod: zod_1.z.enum(['CARD', 'PAYPAL', 'BANK_TRANSFER', 'MOBILE_MONEY']),
    isRecurring: zod_1.z.boolean().default(false),
    recurringInterval: zod_1.z.enum(['WEEKLY', 'MONTHLY', 'QUARTERLY', 'YEARLY']).optional(),
    message: zod_1.z.string().max(500, 'Message must be at most 500 characters').optional(),
    isAnonymous: zod_1.z.boolean().default(false),
}).refine((data) => !data.isRecurring || data.recurringInterval, {
    message: 'Recurring interval is required for recurring donations',
    path: ['recurringInterval'],
});
exports.foundationProgramSchema = zod_1.z.object({
    title: zod_1.z.string().min(5, 'Title must be at least 5 characters'),
    description: zod_1.z.string().min(50, 'Description must be at least 50 characters'),
    category: zod_1.z.enum(['HEALTHCARE', 'EDUCATION', 'FEEDING', 'WOMEN', 'YOUTH', 'COMMUNITY']),
    goals: zod_1.z.string().min(20, 'Goals must be at least 20 characters'),
    targetAmount: zod_1.z.number().positive('Target amount must be positive'),
    status: zod_1.z.enum(['ACTIVE', 'COMPLETED', 'UPCOMING']),
    startDate: zod_1.z.string().or(zod_1.z.date()),
    endDate: zod_1.z.string().or(zod_1.z.date()).optional(),
});
exports.constructionProjectSchema = zod_1.z.object({
    title: zod_1.z.string().min(5, 'Title must be at least 5 characters'),
    description: zod_1.z.string().min(50, 'Description must be at least 50 characters'),
    propertyId: zod_1.z.string().uuid().optional(),
    packageId: zod_1.z.string().uuid('Invalid package ID'),
    startDate: zod_1.z.string().or(zod_1.z.date()),
    expectedEndDate: zod_1.z.string().or(zod_1.z.date()),
    cost: zod_1.z.number().positive('Cost must be positive'),
    currency: zod_1.z.string().default('USD'),
    contractorId: zod_1.z.string().uuid().optional(),
});
exports.leadSchema = zod_1.z.object({
    firstName: zod_1.z.string().min(2, 'First name must be at least 2 characters'),
    lastName: zod_1.z.string().min(2, 'Last name must be at least 2 characters'),
    email: zod_1.z.string().email('Invalid email address'),
    phone: zod_1.z.string().min(10, 'Phone number must be at least 10 characters'),
    source: zod_1.z.enum(['WEBSITE', 'PHONE', 'EMAIL', 'REFERRAL', 'SOCIAL_MEDIA', 'WALK_IN', 'ADVERTISEMENT']),
    propertyId: zod_1.z.string().uuid().optional(),
    assignedToId: zod_1.z.string().uuid().optional(),
    notes: zod_1.z.string().optional(),
});
exports.supportTicketSchema = zod_1.z.object({
    subject: zod_1.z.string().min(5, 'Subject must be at least 5 characters'),
    description: zod_1.z.string().min(20, 'Description must be at least 20 characters'),
    category: zod_1.z.enum(['GENERAL', 'PROPERTY_INQUIRY', 'PAYMENT', 'INVESTMENT', 'DONATION', 'TECHNICAL']),
    priority: zod_1.z.enum(['LOW', 'MEDIUM', 'HIGH', 'URGENT']).default('MEDIUM'),
});
exports.pageSchema = zod_1.z.object({
    title: zod_1.z.string().min(5, 'Title must be at least 5 characters'),
    slug: zod_1.z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'Invalid slug format'),
    content: zod_1.z.string().min(10, 'Content is required'),
    metaTitle: zod_1.z.string().max(60).optional(),
    metaDescription: zod_1.z.string().max(160).optional(),
    isPublished: zod_1.z.boolean().default(false),
});
exports.blogPostSchema = zod_1.z.object({
    title: zod_1.z.string().min(5, 'Title must be at least 5 characters'),
    slug: zod_1.z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'Invalid slug format'),
    excerpt: zod_1.z.string().min(20, 'Excerpt must be at least 20 characters'),
    content: zod_1.z.string().min(100, 'Content must be at least 100 characters'),
    featuredImage: zod_1.z.string().url('Featured image URL is required'),
    category: zod_1.z.string().min(2, 'Category is required'),
    tags: zod_1.z.array(zod_1.z.string()).default([]),
    isPublished: zod_1.z.boolean().default(false),
});
exports.testimonialSchema = zod_1.z.object({
    name: zod_1.z.string().min(2, 'Name is required'),
    role: zod_1.z.string().min(2, 'Role is required'),
    content: zod_1.z.string().min(20, 'Content must be at least 20 characters'),
    image: zod_1.z.string().url('Image URL is required'),
    rating: zod_1.z.number().min(1).max(5),
    isPublished: zod_1.z.boolean().default(false),
});
exports.contactFormSchema = zod_1.z.object({
    firstName: zod_1.z.string().min(2, 'First name is required'),
    lastName: zod_1.z.string().min(2, 'Last name is required'),
    email: zod_1.z.string().email('Invalid email address'),
    phone: zod_1.z.string().min(10, 'Phone number is required'),
    subject: zod_1.z.string().min(5, 'Subject is required'),
    message: zod_1.z.string().min(20, 'Message must be at least 20 characters'),
});
exports.updateProfileSchema = zod_1.z.object({
    firstName: zod_1.z.string().min(2).optional(),
    lastName: zod_1.z.string().min(2).optional(),
    phone: zod_1.z.string().optional(),
    avatar: zod_1.z.string().url().optional(),
});
exports.changePasswordSchema = zod_1.z.object({
    currentPassword: zod_1.z.string().min(8),
    newPassword: zod_1.z.string()
        .min(8, 'Password must be at least 8 characters')
        .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
        .regex(/[0-9]/, 'Password must contain at least one number'),
    confirmPassword: zod_1.z.string(),
}).refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
});
//# sourceMappingURL=index.js.map
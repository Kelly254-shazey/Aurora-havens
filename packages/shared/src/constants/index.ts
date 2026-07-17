// API Constants
export const API_VERSION = 'v1';
export const API_PREFIX = `/api/${API_VERSION}`;

// Pagination
export const DEFAULT_PAGE = 1;
export const DEFAULT_LIMIT = 12;
export const MAX_LIMIT = 100;

// Authentication
export const JWT_EXPIRY = '7d';
export const REFRESH_TOKEN_EXPIRY = '30d';
export const MAX_LOGIN_ATTEMPTS = 5;
export const LOCKOUT_DURATION = 15 * 60 * 1000; // 15 minutes

// Property
export const PROPERTY_TYPES = [
  'RESIDENTIAL',
  'COMMERCIAL',
  'LAND',
  'LUXURY',
  'APARTMENT',
  'VILLA',
] as const;

export const PROPERTY_STATUSES = [
  'AVAILABLE',
  'SOLD',
  'RENTED',
  'PENDING',
  'UNDER_CONSTRUCTION',
] as const;

export const PROPERTY_FEATURES = [
  'Swimming Pool',
  'Gym',
  'Parking',
  'Security',
  'Garden',
  'Balcony',
  'Air Conditioning',
  'Central Heating',
  'Fireplace',
  'Laundry Room',
  'Storage',
  'Elevator',
  'Concierge',
  'Rooftop',
  'Smart Home',
  'Solar Panels',
  'EV Charging',
  'Pet Friendly',
] as const;

// Investment
export const INVESTMENT_TYPES = [
  'REAL_ESTATE',
  'CONSTRUCTION',
  'DEVELOPMENT',
  'FIXED_INCOME',
] as const;

export const INVESTMENT_STATUSES = [
  'PENDING',
  'ACTIVE',
  'MATURED',
  'WITHDRAWN',
  'DEFAULTED',
] as const;

// Foundation
export const PROGRAM_CATEGORIES = [
  'HEALTHCARE',
  'EDUCATION',
  'FEEDING',
  'WOMEN',
  'YOUTH',
  'COMMUNITY',
] as const;

// Payment
export const PAYMENT_METHODS = [
  'CARD',
  'PAYPAL',
  'BANK_TRANSFER',
  'MOBILE_MONEY',
] as const;

export const CURRENCIES = [
  'USD',
  'KES',
  'UGX',
  'TZS',
  'NGN',
  'GHS',
  'ZAR',
] as const;

// CRM
export const LEAD_SOURCES = [
  'WEBSITE',
  'PHONE',
  'EMAIL',
  'REFERRAL',
  'SOCIAL_MEDIA',
  'WALK_IN',
  'ADVERTISEMENT',
] as const;

export const LEAD_STATUSES = [
  'NEW',
  'CONTACTED',
  'QUALIFIED',
  'PROPOSAL',
  'NEGOTIATION',
  'CLOSED_WON',
  'CLOSED_LOST',
] as const;

export const TICKET_CATEGORIES = [
  'GENERAL',
  'PROPERTY_INQUIRY',
  'PAYMENT',
  'INVESTMENT',
  'DONATION',
  'TECHNICAL',
] as const;

export const TICKET_PRIORITIES = ['LOW', 'MEDIUM', 'HIGH', 'URGENT'] as const;
export const TICKET_STATUSES = ['OPEN', 'IN_PROGRESS', 'WAITING', 'RESOLVED', 'CLOSED'] as const;

// Construction
export const CONSTRUCTION_STATUSES = [
  'PLANNING',
  'IN_PROGRESS',
  'ON_HOLD',
  'COMPLETED',
  'CANCELLED',
] as const;

// User Roles
export const USER_ROLES = [
  'SUPER_ADMIN',
  'ADMIN',
  'PROPERTY_MANAGER',
  'SALES_AGENT',
  'FOUNDATION_MANAGER',
  'CUSTOMER_SUPPORT',
  'INVESTOR',
  'BUYER',
  'TENANT',
  'DONOR',
] as const;

export const ADMIN_ROLES = [
  'SUPER_ADMIN',
  'ADMIN',
  'PROPERTY_MANAGER',
  'SALES_AGENT',
  'FOUNDATION_MANAGER',
  'CUSTOMER_SUPPORT',
] as const;

// File Upload
export const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
export const ALLOWED_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
export const ALLOWED_DOCUMENT_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/vnd.ms-excel',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
];

// Cache
export const CACHE_TTL = {
  SHORT: 60 * 5, // 5 minutes
  MEDIUM: 60 * 30, // 30 minutes
  LONG: 60 * 60, // 1 hour
  VERY_LONG: 60 * 60 * 24, // 24 hours
} as const;

// Rate Limiting
export const RATE_LIMIT = {
  GLOBAL: { ttl: 60, limit: 100 },
  AUTH: { ttl: 60, limit: 5 },
  API: { ttl: 60, limit: 60 },
  CONTACT: { ttl: 60 * 60, limit: 10 },
} as const;

// Social Impact
export const IMPACT_METRICS = [
  'Meals Served',
  'Children Sponsored',
  'Medical Camps',
  'Communities Reached',
  'Women Supported',
  'Youth Trained',
  'Homes Built',
  'Trees Planted',
] as const;

// Email Templates
export const EMAIL_TEMPLATES = {
  WELCOME: 'welcome',
  VERIFY_EMAIL: 'verify-email',
  RESET_PASSWORD: 'reset-password',
  BOOKING_CONFIRMATION: 'booking-confirmation',
  PAYMENT_RECEIPT: 'payment-receipt',
  DONATION_RECEIPT: 'donation-receipt',
  INVESTMENT_CONFIRMATION: 'investment-confirmation',
  SUPPORT_TICKET: 'support-ticket',
  NEWSLETTER: 'newsletter',
} as const;

// Navigation
export const MAIN_NAVIGATION = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Properties', href: '/properties' },
  { label: 'Construction', href: '/construction' },
  { label: 'Foundation', href: '/foundation' },
  { label: 'Invest', href: '/invest' },
  { label: 'Donate', href: '/donate' },
  { label: 'News', href: '/news' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
] as const;

// Footer Links
export const FOOTER_LINKS = {
  properties: [
    { label: 'Residential', href: '/properties?type=RESIDENTIAL' },
    { label: 'Commercial', href: '/properties?type=COMMERCIAL' },
    { label: 'Land', href: '/properties?type=LAND' },
    { label: 'Luxury', href: '/properties?type=LUXURY' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Team', href: '/about#team' },
    { label: 'Foundation', href: '/foundation' },
    { label: 'Invest', href: '/invest' },
  ],
  support: [
    { label: 'Contact Us', href: '/contact' },
    { label: 'News', href: '/news' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'How It Works', href: '/invest/how-it-works' },
  ],
  social: [
    { label: 'Facebook', href: 'https://facebook.com', icon: 'facebook' },
    { label: 'Twitter', href: 'https://twitter.com', icon: 'twitter' },
    { label: 'Instagram', href: 'https://instagram.com', icon: 'instagram' },
    { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'linkedin' },
    { label: 'YouTube', href: 'https://youtube.com', icon: 'youtube' },
  ],
} as const;

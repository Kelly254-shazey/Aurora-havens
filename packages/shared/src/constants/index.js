"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FOOTER_LINKS = exports.MAIN_NAVIGATION = exports.EMAIL_TEMPLATES = exports.IMPACT_METRICS = exports.RATE_LIMIT = exports.CACHE_TTL = exports.ALLOWED_DOCUMENT_TYPES = exports.ALLOWED_IMAGE_TYPES = exports.MAX_FILE_SIZE = exports.ADMIN_ROLES = exports.USER_ROLES = exports.CONSTRUCTION_STATUSES = exports.TICKET_STATUSES = exports.TICKET_PRIORITIES = exports.TICKET_CATEGORIES = exports.LEAD_STATUSES = exports.LEAD_SOURCES = exports.CURRENCIES = exports.PAYMENT_METHODS = exports.PROGRAM_CATEGORIES = exports.INVESTMENT_STATUSES = exports.INVESTMENT_TYPES = exports.PROPERTY_FEATURES = exports.PROPERTY_STATUSES = exports.PROPERTY_TYPES = exports.LOCKOUT_DURATION = exports.MAX_LOGIN_ATTEMPTS = exports.REFRESH_TOKEN_EXPIRY = exports.JWT_EXPIRY = exports.MAX_LIMIT = exports.DEFAULT_LIMIT = exports.DEFAULT_PAGE = exports.API_PREFIX = exports.API_VERSION = void 0;
exports.API_VERSION = 'v1';
exports.API_PREFIX = `/api/${exports.API_VERSION}`;
exports.DEFAULT_PAGE = 1;
exports.DEFAULT_LIMIT = 12;
exports.MAX_LIMIT = 100;
exports.JWT_EXPIRY = '7d';
exports.REFRESH_TOKEN_EXPIRY = '30d';
exports.MAX_LOGIN_ATTEMPTS = 5;
exports.LOCKOUT_DURATION = 15 * 60 * 1000;
exports.PROPERTY_TYPES = [
    'RESIDENTIAL',
    'COMMERCIAL',
    'LAND',
    'LUXURY',
    'APARTMENT',
    'VILLA',
];
exports.PROPERTY_STATUSES = [
    'AVAILABLE',
    'SOLD',
    'RENTED',
    'PENDING',
    'UNDER_CONSTRUCTION',
];
exports.PROPERTY_FEATURES = [
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
];
exports.INVESTMENT_TYPES = [
    'REAL_ESTATE',
    'CONSTRUCTION',
    'DEVELOPMENT',
    'FIXED_INCOME',
];
exports.INVESTMENT_STATUSES = [
    'PENDING',
    'ACTIVE',
    'MATURED',
    'WITHDRAWN',
    'DEFAULTED',
];
exports.PROGRAM_CATEGORIES = [
    'HEALTHCARE',
    'EDUCATION',
    'FEEDING',
    'WOMEN',
    'YOUTH',
    'COMMUNITY',
];
exports.PAYMENT_METHODS = [
    'CARD',
    'PAYPAL',
    'BANK_TRANSFER',
    'MOBILE_MONEY',
];
exports.CURRENCIES = [
    'USD',
    'KES',
    'UGX',
    'TZS',
    'NGN',
    'GHS',
    'ZAR',
];
exports.LEAD_SOURCES = [
    'WEBSITE',
    'PHONE',
    'EMAIL',
    'REFERRAL',
    'SOCIAL_MEDIA',
    'WALK_IN',
    'ADVERTISEMENT',
];
exports.LEAD_STATUSES = [
    'NEW',
    'CONTACTED',
    'QUALIFIED',
    'PROPOSAL',
    'NEGOTIATION',
    'CLOSED_WON',
    'CLOSED_LOST',
];
exports.TICKET_CATEGORIES = [
    'GENERAL',
    'PROPERTY_INQUIRY',
    'PAYMENT',
    'INVESTMENT',
    'DONATION',
    'TECHNICAL',
];
exports.TICKET_PRIORITIES = ['LOW', 'MEDIUM', 'HIGH', 'URGENT'];
exports.TICKET_STATUSES = ['OPEN', 'IN_PROGRESS', 'WAITING', 'RESOLVED', 'CLOSED'];
exports.CONSTRUCTION_STATUSES = [
    'PLANNING',
    'IN_PROGRESS',
    'ON_HOLD',
    'COMPLETED',
    'CANCELLED',
];
exports.USER_ROLES = [
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
];
exports.ADMIN_ROLES = [
    'SUPER_ADMIN',
    'ADMIN',
    'PROPERTY_MANAGER',
    'SALES_AGENT',
    'FOUNDATION_MANAGER',
    'CUSTOMER_SUPPORT',
];
exports.MAX_FILE_SIZE = 10 * 1024 * 1024;
exports.ALLOWED_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
exports.ALLOWED_DOCUMENT_TYPES = [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
];
exports.CACHE_TTL = {
    SHORT: 60 * 5,
    MEDIUM: 60 * 30,
    LONG: 60 * 60,
    VERY_LONG: 60 * 60 * 24,
};
exports.RATE_LIMIT = {
    GLOBAL: { ttl: 60, limit: 100 },
    AUTH: { ttl: 60, limit: 5 },
    API: { ttl: 60, limit: 60 },
    CONTACT: { ttl: 60 * 60, limit: 10 },
};
exports.IMPACT_METRICS = [
    'Meals Served',
    'Children Sponsored',
    'Medical Camps',
    'Communities Reached',
    'Women Supported',
    'Youth Trained',
    'Homes Built',
    'Trees Planted',
];
exports.EMAIL_TEMPLATES = {
    WELCOME: 'welcome',
    VERIFY_EMAIL: 'verify-email',
    RESET_PASSWORD: 'reset-password',
    BOOKING_CONFIRMATION: 'booking-confirmation',
    PAYMENT_RECEIPT: 'payment-receipt',
    DONATION_RECEIPT: 'donation-receipt',
    INVESTMENT_CONFIRMATION: 'investment-confirmation',
    SUPPORT_TICKET: 'support-ticket',
    NEWSLETTER: 'newsletter',
};
exports.MAIN_NAVIGATION = [
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
];
exports.FOOTER_LINKS = {
    properties: [
        { label: 'Residential', href: '/properties?type=RESIDENTIAL' },
        { label: 'Commercial', href: '/properties?type=COMMERCIAL' },
        { label: 'Land', href: '/properties?type=LAND' },
        { label: 'Luxury', href: '/properties?type=LUXURY' },
    ],
    company: [
        { label: 'About Us', href: '/about' },
        { label: 'Our Team', href: '/about#team' },
        { label: 'Careers', href: '/careers' },
        { label: 'Press', href: '/press' },
    ],
    support: [
        { label: 'Contact Us', href: '/contact' },
        { label: 'FAQ', href: '/faq' },
        { label: 'Help Center', href: '/help' },
        { label: 'Terms of Service', href: '/terms' },
        { label: 'Privacy Policy', href: '/privacy' },
    ],
    social: [
        { label: 'Facebook', href: 'https://facebook.com', icon: 'facebook' },
        { label: 'Twitter', href: 'https://twitter.com', icon: 'twitter' },
        { label: 'Instagram', href: 'https://instagram.com', icon: 'instagram' },
        { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'linkedin' },
        { label: 'YouTube', href: 'https://youtube.com', icon: 'youtube' },
    ],
};
//# sourceMappingURL=index.js.map
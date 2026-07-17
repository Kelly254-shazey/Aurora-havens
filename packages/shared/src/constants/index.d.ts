export declare const API_VERSION = "v1";
export declare const API_PREFIX = "/api/v1";
export declare const DEFAULT_PAGE = 1;
export declare const DEFAULT_LIMIT = 12;
export declare const MAX_LIMIT = 100;
export declare const JWT_EXPIRY = "7d";
export declare const REFRESH_TOKEN_EXPIRY = "30d";
export declare const MAX_LOGIN_ATTEMPTS = 5;
export declare const LOCKOUT_DURATION: number;
export declare const PROPERTY_TYPES: readonly ["RESIDENTIAL", "COMMERCIAL", "LAND", "LUXURY", "APARTMENT", "VILLA"];
export declare const PROPERTY_STATUSES: readonly ["AVAILABLE", "SOLD", "RENTED", "PENDING", "UNDER_CONSTRUCTION"];
export declare const PROPERTY_FEATURES: readonly ["Swimming Pool", "Gym", "Parking", "Security", "Garden", "Balcony", "Air Conditioning", "Central Heating", "Fireplace", "Laundry Room", "Storage", "Elevator", "Concierge", "Rooftop", "Smart Home", "Solar Panels", "EV Charging", "Pet Friendly"];
export declare const INVESTMENT_TYPES: readonly ["REAL_ESTATE", "CONSTRUCTION", "DEVELOPMENT", "FIXED_INCOME"];
export declare const INVESTMENT_STATUSES: readonly ["PENDING", "ACTIVE", "MATURED", "WITHDRAWN", "DEFAULTED"];
export declare const PROGRAM_CATEGORIES: readonly ["HEALTHCARE", "EDUCATION", "FEEDING", "WOMEN", "YOUTH", "COMMUNITY"];
export declare const PAYMENT_METHODS: readonly ["CARD", "PAYPAL", "BANK_TRANSFER", "MOBILE_MONEY"];
export declare const CURRENCIES: readonly ["USD", "KES", "UGX", "TZS", "NGN", "GHS", "ZAR"];
export declare const LEAD_SOURCES: readonly ["WEBSITE", "PHONE", "EMAIL", "REFERRAL", "SOCIAL_MEDIA", "WALK_IN", "ADVERTISEMENT"];
export declare const LEAD_STATUSES: readonly ["NEW", "CONTACTED", "QUALIFIED", "PROPOSAL", "NEGOTIATION", "CLOSED_WON", "CLOSED_LOST"];
export declare const TICKET_CATEGORIES: readonly ["GENERAL", "PROPERTY_INQUIRY", "PAYMENT", "INVESTMENT", "DONATION", "TECHNICAL"];
export declare const TICKET_PRIORITIES: readonly ["LOW", "MEDIUM", "HIGH", "URGENT"];
export declare const TICKET_STATUSES: readonly ["OPEN", "IN_PROGRESS", "WAITING", "RESOLVED", "CLOSED"];
export declare const CONSTRUCTION_STATUSES: readonly ["PLANNING", "IN_PROGRESS", "ON_HOLD", "COMPLETED", "CANCELLED"];
export declare const USER_ROLES: readonly ["SUPER_ADMIN", "ADMIN", "PROPERTY_MANAGER", "SALES_AGENT", "FOUNDATION_MANAGER", "CUSTOMER_SUPPORT", "INVESTOR", "BUYER", "TENANT", "DONOR"];
export declare const ADMIN_ROLES: readonly ["SUPER_ADMIN", "ADMIN", "PROPERTY_MANAGER", "SALES_AGENT", "FOUNDATION_MANAGER", "CUSTOMER_SUPPORT"];
export declare const MAX_FILE_SIZE: number;
export declare const ALLOWED_IMAGE_TYPES: string[];
export declare const ALLOWED_DOCUMENT_TYPES: string[];
export declare const CACHE_TTL: {
    readonly SHORT: number;
    readonly MEDIUM: number;
    readonly LONG: number;
    readonly VERY_LONG: number;
};
export declare const RATE_LIMIT: {
    readonly GLOBAL: {
        readonly ttl: 60;
        readonly limit: 100;
    };
    readonly AUTH: {
        readonly ttl: 60;
        readonly limit: 5;
    };
    readonly API: {
        readonly ttl: 60;
        readonly limit: 60;
    };
    readonly CONTACT: {
        readonly ttl: number;
        readonly limit: 10;
    };
};
export declare const IMPACT_METRICS: readonly ["Meals Served", "Children Sponsored", "Medical Camps", "Communities Reached", "Women Supported", "Youth Trained", "Homes Built", "Trees Planted"];
export declare const EMAIL_TEMPLATES: {
    readonly WELCOME: "welcome";
    readonly VERIFY_EMAIL: "verify-email";
    readonly RESET_PASSWORD: "reset-password";
    readonly BOOKING_CONFIRMATION: "booking-confirmation";
    readonly PAYMENT_RECEIPT: "payment-receipt";
    readonly DONATION_RECEIPT: "donation-receipt";
    readonly INVESTMENT_CONFIRMATION: "investment-confirmation";
    readonly SUPPORT_TICKET: "support-ticket";
    readonly NEWSLETTER: "newsletter";
};
export declare const MAIN_NAVIGATION: readonly [{
    readonly label: "Home";
    readonly href: "/";
}, {
    readonly label: "About";
    readonly href: "/about";
}, {
    readonly label: "Properties";
    readonly href: "/properties";
}, {
    readonly label: "Construction";
    readonly href: "/construction";
}, {
    readonly label: "Foundation";
    readonly href: "/foundation";
}, {
    readonly label: "Invest";
    readonly href: "/invest";
}, {
    readonly label: "Donate";
    readonly href: "/donate";
}, {
    readonly label: "News";
    readonly href: "/news";
}, {
    readonly label: "Gallery";
    readonly href: "/gallery";
}, {
    readonly label: "Contact";
    readonly href: "/contact";
}];
export declare const FOOTER_LINKS: {
    readonly properties: readonly [{
        readonly label: "Residential";
        readonly href: "/properties?type=RESIDENTIAL";
    }, {
        readonly label: "Commercial";
        readonly href: "/properties?type=COMMERCIAL";
    }, {
        readonly label: "Land";
        readonly href: "/properties?type=LAND";
    }, {
        readonly label: "Luxury";
        readonly href: "/properties?type=LUXURY";
    }];
    readonly company: readonly [{
        readonly label: "About Us";
        readonly href: "/about";
    }, {
        readonly label: "Our Team";
        readonly href: "/about#team";
    }, {
        readonly label: "Foundation";
        readonly href: "/foundation";
    }, {
        readonly label: "Invest";
        readonly href: "/invest";
    }];
    readonly support: readonly [{
        readonly label: "Contact Us";
        readonly href: "/contact";
    }, {
        readonly label: "News";
        readonly href: "/news";
    }, {
        readonly label: "Gallery";
        readonly href: "/gallery";
    }, {
        readonly label: "How It Works";
        readonly href: "/invest/how-it-works";
    }];
    readonly social: readonly [{
        readonly label: "Facebook";
        readonly href: "https://facebook.com";
        readonly icon: "facebook";
    }, {
        readonly label: "Twitter";
        readonly href: "https://twitter.com";
        readonly icon: "twitter";
    }, {
        readonly label: "Instagram";
        readonly href: "https://instagram.com";
        readonly icon: "instagram";
    }, {
        readonly label: "LinkedIn";
        readonly href: "https://linkedin.com";
        readonly icon: "linkedin";
    }, {
        readonly label: "YouTube";
        readonly href: "https://youtube.com";
        readonly icon: "youtube";
    }];
};

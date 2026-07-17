import { z } from 'zod';
export declare const loginSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
}, {
    email: string;
    password: string;
}>;
export declare const registerSchema: z.ZodEffects<z.ZodObject<{
    firstName: z.ZodString;
    lastName: z.ZodString;
    email: z.ZodString;
    password: z.ZodString;
    confirmPassword: z.ZodString;
    phone: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    confirmPassword: string;
    phone?: string | undefined;
}, {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    confirmPassword: string;
    phone?: string | undefined;
}>, {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    confirmPassword: string;
    phone?: string | undefined;
}, {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    confirmPassword: string;
    phone?: string | undefined;
}>;
export declare const forgotPasswordSchema: z.ZodObject<{
    email: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
}, {
    email: string;
}>;
export declare const resetPasswordSchema: z.ZodEffects<z.ZodObject<{
    token: z.ZodString;
    password: z.ZodString;
    confirmPassword: z.ZodString;
}, "strip", z.ZodTypeAny, {
    password: string;
    token: string;
    confirmPassword: string;
}, {
    password: string;
    token: string;
    confirmPassword: string;
}>, {
    password: string;
    token: string;
    confirmPassword: string;
}, {
    password: string;
    token: string;
    confirmPassword: string;
}>;
export declare const propertySchema: z.ZodObject<{
    title: z.ZodString;
    description: z.ZodString;
    type: z.ZodEnum<["RESIDENTIAL", "COMMERCIAL", "LAND", "LUXURY", "APARTMENT", "VILLA"]>;
    status: z.ZodEnum<["AVAILABLE", "SOLD", "RENTED", "PENDING", "UNDER_CONSTRUCTION"]>;
    price: z.ZodNumber;
    currency: z.ZodDefault<z.ZodString>;
    bedrooms: z.ZodOptional<z.ZodNumber>;
    bathrooms: z.ZodOptional<z.ZodNumber>;
    squareFeet: z.ZodOptional<z.ZodNumber>;
    lotSize: z.ZodOptional<z.ZodNumber>;
    yearBuilt: z.ZodOptional<z.ZodNumber>;
    address: z.ZodObject<{
        street: z.ZodString;
        city: z.ZodString;
        state: z.ZodString;
        country: z.ZodString;
        zipCode: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        street: string;
        city: string;
        state: string;
        country: string;
        zipCode: string;
    }, {
        street: string;
        city: string;
        state: string;
        country: string;
        zipCode: string;
    }>;
    features: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    mapCoordinates: z.ZodOptional<z.ZodObject<{
        lat: z.ZodNumber;
        lng: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        lat: number;
        lng: number;
    }, {
        lat: number;
        lng: number;
    }>>;
    agentId: z.ZodOptional<z.ZodString>;
    isFeatured: z.ZodDefault<z.ZodBoolean>;
    isNew: z.ZodDefault<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    title: string;
    description: string;
    type: "RESIDENTIAL" | "COMMERCIAL" | "LAND" | "LUXURY" | "APARTMENT" | "VILLA";
    status: "AVAILABLE" | "SOLD" | "RENTED" | "PENDING" | "UNDER_CONSTRUCTION";
    price: number;
    currency: string;
    address: {
        street: string;
        city: string;
        state: string;
        country: string;
        zipCode: string;
    };
    isFeatured: boolean;
    isNew: boolean;
    bedrooms?: number | undefined;
    bathrooms?: number | undefined;
    squareFeet?: number | undefined;
    lotSize?: number | undefined;
    yearBuilt?: number | undefined;
    features?: string[] | undefined;
    mapCoordinates?: {
        lat: number;
        lng: number;
    } | undefined;
    agentId?: string | undefined;
}, {
    title: string;
    description: string;
    type: "RESIDENTIAL" | "COMMERCIAL" | "LAND" | "LUXURY" | "APARTMENT" | "VILLA";
    status: "AVAILABLE" | "SOLD" | "RENTED" | "PENDING" | "UNDER_CONSTRUCTION";
    price: number;
    address: {
        street: string;
        city: string;
        state: string;
        country: string;
        zipCode: string;
    };
    currency?: string | undefined;
    bedrooms?: number | undefined;
    bathrooms?: number | undefined;
    squareFeet?: number | undefined;
    lotSize?: number | undefined;
    yearBuilt?: number | undefined;
    features?: string[] | undefined;
    mapCoordinates?: {
        lat: number;
        lng: number;
    } | undefined;
    agentId?: string | undefined;
    isFeatured?: boolean | undefined;
    isNew?: boolean | undefined;
}>;
export declare const propertyQuerySchema: z.ZodObject<{
    type: z.ZodOptional<z.ZodEnum<["RESIDENTIAL", "COMMERCIAL", "LAND", "LUXURY", "APARTMENT", "VILLA"]>>;
    status: z.ZodOptional<z.ZodEnum<["AVAILABLE", "SOLD", "RENTED", "PENDING", "UNDER_CONSTRUCTION"]>>;
    minPrice: z.ZodOptional<z.ZodNumber>;
    maxPrice: z.ZodOptional<z.ZodNumber>;
    bedrooms: z.ZodOptional<z.ZodNumber>;
    bathrooms: z.ZodOptional<z.ZodNumber>;
    city: z.ZodOptional<z.ZodString>;
    state: z.ZodOptional<z.ZodString>;
    features: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    search: z.ZodOptional<z.ZodString>;
    page: z.ZodDefault<z.ZodNumber>;
    limit: z.ZodDefault<z.ZodNumber>;
    sortBy: z.ZodOptional<z.ZodString>;
    sortOrder: z.ZodDefault<z.ZodEnum<["asc", "desc"]>>;
}, "strip", z.ZodTypeAny, {
    limit: number;
    page: number;
    sortOrder: "asc" | "desc";
    search?: string | undefined;
    type?: "RESIDENTIAL" | "COMMERCIAL" | "LAND" | "LUXURY" | "APARTMENT" | "VILLA" | undefined;
    status?: "AVAILABLE" | "SOLD" | "RENTED" | "PENDING" | "UNDER_CONSTRUCTION" | undefined;
    bedrooms?: number | undefined;
    bathrooms?: number | undefined;
    features?: string[] | undefined;
    sortBy?: string | undefined;
    city?: string | undefined;
    state?: string | undefined;
    minPrice?: number | undefined;
    maxPrice?: number | undefined;
}, {
    search?: string | undefined;
    type?: "RESIDENTIAL" | "COMMERCIAL" | "LAND" | "LUXURY" | "APARTMENT" | "VILLA" | undefined;
    status?: "AVAILABLE" | "SOLD" | "RENTED" | "PENDING" | "UNDER_CONSTRUCTION" | undefined;
    bedrooms?: number | undefined;
    bathrooms?: number | undefined;
    features?: string[] | undefined;
    limit?: number | undefined;
    page?: number | undefined;
    sortBy?: string | undefined;
    sortOrder?: "asc" | "desc" | undefined;
    city?: string | undefined;
    state?: string | undefined;
    minPrice?: number | undefined;
    maxPrice?: number | undefined;
}>;
export declare const investmentSchema: z.ZodObject<{
    opportunityId: z.ZodString;
    amount: z.ZodNumber;
    currency: z.ZodDefault<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    currency: string;
    opportunityId: string;
    amount: number;
}, {
    opportunityId: string;
    amount: number;
    currency?: string | undefined;
}>;
export declare const investmentOpportunitySchema: z.ZodEffects<z.ZodObject<{
    title: z.ZodString;
    description: z.ZodString;
    propertyId: z.ZodOptional<z.ZodString>;
    type: z.ZodEnum<["REAL_ESTATE", "CONSTRUCTION", "DEVELOPMENT", "FIXED_INCOME"]>;
    minInvestment: z.ZodNumber;
    maxInvestment: z.ZodNumber;
    expectedROI: z.ZodNumber;
    duration: z.ZodNumber;
    currency: z.ZodDefault<z.ZodString>;
    totalSlots: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    title: string;
    description: string;
    type: "REAL_ESTATE" | "CONSTRUCTION" | "DEVELOPMENT" | "FIXED_INCOME";
    currency: string;
    minInvestment: number;
    maxInvestment: number;
    expectedROI: number;
    duration: number;
    totalSlots: number;
    propertyId?: string | undefined;
}, {
    title: string;
    description: string;
    type: "REAL_ESTATE" | "CONSTRUCTION" | "DEVELOPMENT" | "FIXED_INCOME";
    minInvestment: number;
    maxInvestment: number;
    expectedROI: number;
    duration: number;
    totalSlots: number;
    currency?: string | undefined;
    propertyId?: string | undefined;
}>, {
    title: string;
    description: string;
    type: "REAL_ESTATE" | "CONSTRUCTION" | "DEVELOPMENT" | "FIXED_INCOME";
    currency: string;
    minInvestment: number;
    maxInvestment: number;
    expectedROI: number;
    duration: number;
    totalSlots: number;
    propertyId?: string | undefined;
}, {
    title: string;
    description: string;
    type: "REAL_ESTATE" | "CONSTRUCTION" | "DEVELOPMENT" | "FIXED_INCOME";
    minInvestment: number;
    maxInvestment: number;
    expectedROI: number;
    duration: number;
    totalSlots: number;
    currency?: string | undefined;
    propertyId?: string | undefined;
}>;
export declare const donationSchema: z.ZodEffects<z.ZodObject<{
    programId: z.ZodString;
    amount: z.ZodNumber;
    currency: z.ZodDefault<z.ZodString>;
    paymentMethod: z.ZodEnum<["CARD", "PAYPAL", "BANK_TRANSFER", "MOBILE_MONEY"]>;
    isRecurring: z.ZodDefault<z.ZodBoolean>;
    recurringInterval: z.ZodOptional<z.ZodEnum<["WEEKLY", "MONTHLY", "QUARTERLY", "YEARLY"]>>;
    message: z.ZodOptional<z.ZodString>;
    isAnonymous: z.ZodDefault<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    currency: string;
    amount: number;
    programId: string;
    paymentMethod: "CARD" | "PAYPAL" | "BANK_TRANSFER" | "MOBILE_MONEY";
    isRecurring: boolean;
    isAnonymous: boolean;
    message?: string | undefined;
    recurringInterval?: "WEEKLY" | "MONTHLY" | "QUARTERLY" | "YEARLY" | undefined;
}, {
    amount: number;
    programId: string;
    paymentMethod: "CARD" | "PAYPAL" | "BANK_TRANSFER" | "MOBILE_MONEY";
    currency?: string | undefined;
    message?: string | undefined;
    isRecurring?: boolean | undefined;
    recurringInterval?: "WEEKLY" | "MONTHLY" | "QUARTERLY" | "YEARLY" | undefined;
    isAnonymous?: boolean | undefined;
}>, {
    currency: string;
    amount: number;
    programId: string;
    paymentMethod: "CARD" | "PAYPAL" | "BANK_TRANSFER" | "MOBILE_MONEY";
    isRecurring: boolean;
    isAnonymous: boolean;
    message?: string | undefined;
    recurringInterval?: "WEEKLY" | "MONTHLY" | "QUARTERLY" | "YEARLY" | undefined;
}, {
    amount: number;
    programId: string;
    paymentMethod: "CARD" | "PAYPAL" | "BANK_TRANSFER" | "MOBILE_MONEY";
    currency?: string | undefined;
    message?: string | undefined;
    isRecurring?: boolean | undefined;
    recurringInterval?: "WEEKLY" | "MONTHLY" | "QUARTERLY" | "YEARLY" | undefined;
    isAnonymous?: boolean | undefined;
}>;
export declare const foundationProgramSchema: z.ZodObject<{
    title: z.ZodString;
    description: z.ZodString;
    category: z.ZodEnum<["HEALTHCARE", "EDUCATION", "FEEDING", "WOMEN", "YOUTH", "COMMUNITY"]>;
    goals: z.ZodString;
    targetAmount: z.ZodNumber;
    status: z.ZodEnum<["ACTIVE", "COMPLETED", "UPCOMING"]>;
    startDate: z.ZodUnion<[z.ZodString, z.ZodDate]>;
    endDate: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodDate]>>;
}, "strip", z.ZodTypeAny, {
    title: string;
    description: string;
    status: "ACTIVE" | "COMPLETED" | "UPCOMING";
    startDate: string | Date;
    category: "HEALTHCARE" | "EDUCATION" | "FEEDING" | "WOMEN" | "YOUTH" | "COMMUNITY";
    goals: string;
    targetAmount: number;
    endDate?: string | Date | undefined;
}, {
    title: string;
    description: string;
    status: "ACTIVE" | "COMPLETED" | "UPCOMING";
    startDate: string | Date;
    category: "HEALTHCARE" | "EDUCATION" | "FEEDING" | "WOMEN" | "YOUTH" | "COMMUNITY";
    goals: string;
    targetAmount: number;
    endDate?: string | Date | undefined;
}>;
export declare const constructionProjectSchema: z.ZodObject<{
    title: z.ZodString;
    description: z.ZodString;
    propertyId: z.ZodOptional<z.ZodString>;
    packageId: z.ZodString;
    startDate: z.ZodUnion<[z.ZodString, z.ZodDate]>;
    expectedEndDate: z.ZodUnion<[z.ZodString, z.ZodDate]>;
    cost: z.ZodNumber;
    currency: z.ZodDefault<z.ZodString>;
    contractorId: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    title: string;
    description: string;
    currency: string;
    startDate: string | Date;
    packageId: string;
    expectedEndDate: string | Date;
    cost: number;
    propertyId?: string | undefined;
    contractorId?: string | undefined;
}, {
    title: string;
    description: string;
    startDate: string | Date;
    packageId: string;
    expectedEndDate: string | Date;
    cost: number;
    currency?: string | undefined;
    propertyId?: string | undefined;
    contractorId?: string | undefined;
}>;
export declare const leadSchema: z.ZodObject<{
    firstName: z.ZodString;
    lastName: z.ZodString;
    email: z.ZodString;
    phone: z.ZodString;
    source: z.ZodEnum<["WEBSITE", "PHONE", "EMAIL", "REFERRAL", "SOCIAL_MEDIA", "WALK_IN", "ADVERTISEMENT"]>;
    propertyId: z.ZodOptional<z.ZodString>;
    assignedToId: z.ZodOptional<z.ZodString>;
    notes: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    email: string;
    firstName: string;
    lastName: string;
    phone: string;
    source: "WEBSITE" | "PHONE" | "EMAIL" | "REFERRAL" | "SOCIAL_MEDIA" | "WALK_IN" | "ADVERTISEMENT";
    propertyId?: string | undefined;
    assignedToId?: string | undefined;
    notes?: string | undefined;
}, {
    email: string;
    firstName: string;
    lastName: string;
    phone: string;
    source: "WEBSITE" | "PHONE" | "EMAIL" | "REFERRAL" | "SOCIAL_MEDIA" | "WALK_IN" | "ADVERTISEMENT";
    propertyId?: string | undefined;
    assignedToId?: string | undefined;
    notes?: string | undefined;
}>;
export declare const supportTicketSchema: z.ZodObject<{
    subject: z.ZodString;
    description: z.ZodString;
    category: z.ZodEnum<["GENERAL", "PROPERTY_INQUIRY", "PAYMENT", "INVESTMENT", "DONATION", "TECHNICAL"]>;
    priority: z.ZodDefault<z.ZodEnum<["LOW", "MEDIUM", "HIGH", "URGENT"]>>;
}, "strip", z.ZodTypeAny, {
    description: string;
    category: "GENERAL" | "PROPERTY_INQUIRY" | "PAYMENT" | "INVESTMENT" | "DONATION" | "TECHNICAL";
    subject: string;
    priority: "LOW" | "MEDIUM" | "HIGH" | "URGENT";
}, {
    description: string;
    category: "GENERAL" | "PROPERTY_INQUIRY" | "PAYMENT" | "INVESTMENT" | "DONATION" | "TECHNICAL";
    subject: string;
    priority?: "LOW" | "MEDIUM" | "HIGH" | "URGENT" | undefined;
}>;
export declare const pageSchema: z.ZodObject<{
    title: z.ZodString;
    slug: z.ZodString;
    content: z.ZodString;
    metaTitle: z.ZodOptional<z.ZodString>;
    metaDescription: z.ZodOptional<z.ZodString>;
    isPublished: z.ZodDefault<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    title: string;
    slug: string;
    content: string;
    isPublished: boolean;
    metaTitle?: string | undefined;
    metaDescription?: string | undefined;
}, {
    title: string;
    slug: string;
    content: string;
    isPublished?: boolean | undefined;
    metaTitle?: string | undefined;
    metaDescription?: string | undefined;
}>;
export declare const blogPostSchema: z.ZodObject<{
    title: z.ZodString;
    slug: z.ZodString;
    excerpt: z.ZodString;
    content: z.ZodString;
    featuredImage: z.ZodString;
    category: z.ZodString;
    tags: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    isPublished: z.ZodDefault<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    title: string;
    slug: string;
    category: string;
    content: string;
    isPublished: boolean;
    excerpt: string;
    featuredImage: string;
    tags: string[];
}, {
    title: string;
    slug: string;
    category: string;
    content: string;
    excerpt: string;
    featuredImage: string;
    isPublished?: boolean | undefined;
    tags?: string[] | undefined;
}>;
export declare const testimonialSchema: z.ZodObject<{
    name: z.ZodString;
    role: z.ZodString;
    content: z.ZodString;
    image: z.ZodString;
    rating: z.ZodNumber;
    isPublished: z.ZodDefault<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    name: string;
    role: string;
    image: string;
    content: string;
    isPublished: boolean;
    rating: number;
}, {
    name: string;
    role: string;
    image: string;
    content: string;
    rating: number;
    isPublished?: boolean | undefined;
}>;
export declare const contactFormSchema: z.ZodObject<{
    firstName: z.ZodString;
    lastName: z.ZodString;
    email: z.ZodString;
    phone: z.ZodString;
    subject: z.ZodString;
    message: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    firstName: string;
    lastName: string;
    phone: string;
    message: string;
    subject: string;
}, {
    email: string;
    firstName: string;
    lastName: string;
    phone: string;
    message: string;
    subject: string;
}>;
export declare const updateProfileSchema: z.ZodObject<{
    firstName: z.ZodOptional<z.ZodString>;
    lastName: z.ZodOptional<z.ZodString>;
    phone: z.ZodOptional<z.ZodString>;
    avatar: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    firstName?: string | undefined;
    lastName?: string | undefined;
    phone?: string | undefined;
    avatar?: string | undefined;
}, {
    firstName?: string | undefined;
    lastName?: string | undefined;
    phone?: string | undefined;
    avatar?: string | undefined;
}>;
export declare const changePasswordSchema: z.ZodEffects<z.ZodObject<{
    currentPassword: z.ZodString;
    newPassword: z.ZodString;
    confirmPassword: z.ZodString;
}, "strip", z.ZodTypeAny, {
    confirmPassword: string;
    currentPassword: string;
    newPassword: string;
}, {
    confirmPassword: string;
    currentPassword: string;
    newPassword: string;
}>, {
    confirmPassword: string;
    currentPassword: string;
    newPassword: string;
}, {
    confirmPassword: string;
    currentPassword: string;
    newPassword: string;
}>;

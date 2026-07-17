export interface User {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    phone?: string;
    avatar?: string;
    role: UserRole;
    isEmailVerified: boolean;
    isPhoneVerified: boolean;
    createdAt: Date;
    updatedAt: Date;
}
export declare enum UserRole {
    SUPER_ADMIN = "SUPER_ADMIN",
    ADMIN = "ADMIN",
    PROPERTY_MANAGER = "PROPERTY_MANAGER",
    SALES_AGENT = "SALES_AGENT",
    FOUNDATION_MANAGER = "FOUNDATION_MANAGER",
    CUSTOMER_SUPPORT = "CUSTOMER_SUPPORT",
    INVESTOR = "INVESTOR",
    BUYER = "BUYER",
    TENANT = "TENANT",
    DONOR = "DONOR"
}
export interface AuthTokens {
    accessToken: string;
    refreshToken: string;
    expiresIn: number;
}
export interface Property {
    id: string;
    title: string;
    description: string;
    slug: string;
    type: PropertyType;
    status: PropertyStatus;
    price: number;
    currency: string;
    bedrooms?: number;
    bathrooms?: number;
    squareFeet?: number;
    lotSize?: number;
    yearBuilt?: number;
    address: Address;
    features: string[];
    images: PropertyImage[];
    virtualTourUrl?: string;
    mapCoordinates?: {
        lat: number;
        lng: number;
    };
    agentId?: string;
    agent?: User;
    isFeatured: boolean;
    isNew: boolean;
    isSold: boolean;
    views: number;
    inquiries: number;
    createdAt: Date;
    updatedAt: Date;
}
export declare enum PropertyType {
    RESIDENTIAL = "RESIDENTIAL",
    COMMERCIAL = "COMMERCIAL",
    LAND = "LAND",
    LUXURY = "LUXURY",
    APARTMENT = "APARTMENT",
    VILLA = "VILLA"
}
export declare enum PropertyStatus {
    AVAILABLE = "AVAILABLE",
    SOLD = "SOLD",
    RENTED = "RENTED",
    PENDING = "PENDING",
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
}
export interface Address {
    street: string;
    city: string;
    state: string;
    country: string;
    zipCode: string;
}
export interface PropertyImage {
    id: string;
    url: string;
    alt: string;
    isPrimary: boolean;
    order: number;
}
export interface Investment {
    id: string;
    investorId: string;
    investor?: User;
    propertyId?: string;
    property?: Property;
    opportunityId: string;
    opportunity?: InvestmentOpportunity;
    amount: number;
    currency: string;
    status: InvestmentStatus;
    expectedROI: number;
    actualROI?: number;
    startDate: Date;
    endDate?: Date;
    maturityDate?: Date;
    returns: InvestmentReturn[];
    documents: InvestmentDocument[];
    createdAt: Date;
    updatedAt: Date;
}
export declare enum InvestmentStatus {
    PENDING = "PENDING",
    ACTIVE = "ACTIVE",
    MATURED = "MATURED",
    WITHDRAWN = "WITHDRAWN",
    DEFAULTED = "DEFAULTED"
}
export interface InvestmentOpportunity {
    id: string;
    title: string;
    description: string;
    propertyId?: string;
    property?: Property;
    type: InvestmentType;
    minInvestment: number;
    maxInvestment: number;
    expectedROI: number;
    duration: number;
    currency: string;
    totalSlots: number;
    filledSlots: number;
    status: 'OPEN' | 'CLOSED' | 'FULL';
    documents: InvestmentDocument[];
    createdAt: Date;
    updatedAt: Date;
}
export declare enum InvestmentType {
    REAL_ESTATE = "REAL_ESTATE",
    CONSTRUCTION = "CONSTRUCTION",
    DEVELOPMENT = "DEVELOPMENT",
    FIXED_INCOME = "FIXED_INCOME"
}
export interface InvestmentReturn {
    id: string;
    investmentId: string;
    amount: number;
    period: string;
    date: Date;
    status: 'PENDING' | 'PAID';
}
export interface InvestmentDocument {
    id: string;
    investmentId: string;
    title: string;
    url: string;
    type: string;
    createdAt: Date;
}
export interface FoundationProgram {
    id: string;
    title: string;
    description: string;
    category: ProgramCategory;
    image: string;
    goals: string;
    targetAmount: number;
    raisedAmount: number;
    beneficiaries: number;
    status: 'ACTIVE' | 'COMPLETED' | 'UPCOMING';
    startDate: Date;
    endDate?: Date;
    createdAt: Date;
    updatedAt: Date;
}
export declare enum ProgramCategory {
    HEALTHCARE = "HEALTHCARE",
    EDUCATION = "EDUCATION",
    FEEDING = "FEEDING",
    WOMEN = "WOMEN",
    YOUTH = "YOUTH",
    COMMUNITY = "COMMUNITY"
}
export interface Donation {
    id: string;
    donorId: string;
    donor?: User;
    programId: string;
    program?: FoundationProgram;
    amount: number;
    currency: string;
    paymentMethod: PaymentMethod;
    transactionId: string;
    isRecurring: boolean;
    recurringInterval?: 'WEEKLY' | 'MONTHLY' | 'QUARTERLY' | 'YEARLY';
    status: DonationStatus;
    receiptUrl?: string;
    message?: string;
    isAnonymous: boolean;
    createdAt: Date;
    updatedAt: Date;
}
export declare enum DonationStatus {
    PENDING = "PENDING",
    COMPLETED = "COMPLETED",
    FAILED = "FAILED",
    REFUNDED = "REFUNDED"
}
export declare enum PaymentMethod {
    CARD = "CARD",
    PAYPAL = "PAYPAL",
    BANK_TRANSFER = "BANK_TRANSFER",
    MOBILE_MONEY = "MOBILE_MONEY"
}
export interface ConstructionProject {
    id: string;
    title: string;
    description: string;
    propertyId?: string;
    property?: Property;
    package: ConstructionPackage;
    status: ConstructionStatus;
    progress: number;
    startDate: Date;
    expectedEndDate: Date;
    actualEndDate?: Date;
    cost: number;
    currency: string;
    contractorId?: string;
    contractor?: User;
    updates: ConstructionUpdate[];
    images: ConstructionImage[];
    createdAt: Date;
    updatedAt: Date;
}
export declare enum ConstructionStatus {
    PLANNING = "PLANNING",
    IN_PROGRESS = "IN_PROGRESS",
    ON_HOLD = "ON_HOLD",
    COMPLETED = "COMPLETED",
    CANCELLED = "CANCELLED"
}
export interface ConstructionPackage {
    id: string;
    name: string;
    description: string;
    features: string[];
    basePrice: number;
    estimatedDuration: number;
    image: string;
}
export interface ConstructionUpdate {
    id: string;
    projectId: string;
    title: string;
    description: string;
    progress: number;
    images: string[];
    createdAt: Date;
}
export interface ConstructionImage {
    id: string;
    projectId: string;
    url: string;
    caption: string;
    takenAt: Date;
}
export interface Lead {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    source: LeadSource;
    status: LeadStatus;
    propertyId?: string;
    property?: Property;
    assignedToId?: string;
    assignedTo?: User;
    notes: LeadNote[];
    activities: LeadActivity[];
    createdAt: Date;
    updatedAt: Date;
}
export declare enum LeadSource {
    WEBSITE = "WEBSITE",
    PHONE = "PHONE",
    EMAIL = "EMAIL",
    REFERRAL = "REFERRAL",
    SOCIAL_MEDIA = "SOCIAL_MEDIA",
    WALK_IN = "WALK_IN",
    ADVERTISEMENT = "ADVERTISEMENT"
}
export declare enum LeadStatus {
    NEW = "NEW",
    CONTACTED = "CONTACTED",
    QUALIFIED = "QUALIFIED",
    PROPOSAL = "PROPOSAL",
    NEGOTIATION = "NEGOTIATION",
    CLOSED_WON = "CLOSED_WON",
    CLOSED_LOST = "CLOSED_LOST"
}
export interface LeadNote {
    id: string;
    leadId: string;
    content: string;
    authorId: string;
    author?: User;
    createdAt: Date;
}
export interface LeadActivity {
    id: string;
    leadId: string;
    type: 'CALL' | 'EMAIL' | 'MEETING' | 'NOTE' | 'TASK';
    title: string;
    description?: string;
    dueDate?: Date;
    completed: boolean;
    authorId: string;
    author?: User;
    createdAt: Date;
}
export interface SupportTicket {
    id: string;
    ticketNumber: string;
    userId: string;
    user?: User;
    subject: string;
    description: string;
    category: TicketCategory;
    priority: TicketPriority;
    status: TicketStatus;
    assignedToId?: string;
    assignedTo?: User;
    messages: TicketMessage[];
    createdAt: Date;
    updatedAt: Date;
}
export declare enum TicketCategory {
    GENERAL = "GENERAL",
    PROPERTY_INQUIRY = "PROPERTY_INQUIRY",
    PAYMENT = "PAYMENT",
    INVESTMENT = "INVESTMENT",
    DONATION = "DONATION",
    TECHNICAL = "TECHNICAL"
}
export declare enum TicketPriority {
    LOW = "LOW",
    MEDIUM = "MEDIUM",
    HIGH = "HIGH",
    URGENT = "URGENT"
}
export declare enum TicketStatus {
    OPEN = "OPEN",
    IN_PROGRESS = "IN_PROGRESS",
    WAITING = "WAITING",
    RESOLVED = "RESOLVED",
    CLOSED = "CLOSED"
}
export interface TicketMessage {
    id: string;
    ticketId: string;
    content: string;
    senderId: string;
    sender?: User;
    attachments: string[];
    createdAt: Date;
}
export interface Page {
    id: string;
    title: string;
    slug: string;
    content: string;
    metaTitle?: string;
    metaDescription?: string;
    isPublished: boolean;
    publishedAt?: Date;
    authorId: string;
    author?: User;
    createdAt: Date;
    updatedAt: Date;
}
export interface BlogPost {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    featuredImage: string;
    category: string;
    tags: string[];
    isPublished: boolean;
    publishedAt?: Date;
    authorId: string;
    author?: User;
    views: number;
    createdAt: Date;
    updatedAt: Date;
}
export interface Testimonial {
    id: string;
    name: string;
    role: string;
    content: string;
    image: string;
    rating: number;
    isPublished: boolean;
    createdAt: Date;
}
export interface GalleryImage {
    id: string;
    url: string;
    alt: string;
    category: string;
    order: number;
    createdAt: Date;
}
export interface Notification {
    id: string;
    userId: string;
    type: NotificationType;
    title: string;
    message: string;
    data?: Record<string, unknown>;
    isRead: boolean;
    createdAt: Date;
}
export declare enum NotificationType {
    EMAIL = "EMAIL",
    SMS = "SMS",
    PUSH = "PUSH",
    IN_APP = "IN_APP"
}
export interface ApiResponse<T> {
    success: boolean;
    data?: T;
    message?: string;
    error?: string;
    pagination?: Pagination;
}
export interface Pagination {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
}
export interface PropertyQuery {
    type?: PropertyType;
    status?: PropertyStatus;
    minPrice?: number;
    maxPrice?: number;
    bedrooms?: number;
    bathrooms?: number;
    city?: string;
    state?: string;
    features?: string[];
    search?: string;
    page?: number;
    limit?: number;
    sortBy?: string;
    sortOrder?: 'asc' | 'desc';
}
export interface DashboardStats {
    totalProperties: number;
    totalSales: number;
    totalRevenue: number;
    totalLeads: number;
    totalInvestors: number;
    totalDonations: number;
    recentActivity: Activity[];
    monthlyRevenue: MonthlyData[];
    propertyByType: PropertyTypeData[];
}
export interface Activity {
    id: string;
    type: string;
    title: string;
    description: string;
    timestamp: Date;
    userId: string;
}
export interface MonthlyData {
    month: string;
    revenue: number;
    count: number;
}
export interface PropertyTypeData {
    type: string;
    count: number;
    percentage: number;
}

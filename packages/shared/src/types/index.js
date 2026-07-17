"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationType = exports.TicketStatus = exports.TicketPriority = exports.TicketCategory = exports.LeadStatus = exports.LeadSource = exports.ConstructionStatus = exports.PaymentMethod = exports.DonationStatus = exports.ProgramCategory = exports.InvestmentType = exports.InvestmentStatus = exports.PropertyStatus = exports.PropertyType = exports.UserRole = void 0;
var UserRole;
(function (UserRole) {
    UserRole["SUPER_ADMIN"] = "SUPER_ADMIN";
    UserRole["ADMIN"] = "ADMIN";
    UserRole["PROPERTY_MANAGER"] = "PROPERTY_MANAGER";
    UserRole["SALES_AGENT"] = "SALES_AGENT";
    UserRole["FOUNDATION_MANAGER"] = "FOUNDATION_MANAGER";
    UserRole["CUSTOMER_SUPPORT"] = "CUSTOMER_SUPPORT";
    UserRole["INVESTOR"] = "INVESTOR";
    UserRole["BUYER"] = "BUYER";
    UserRole["TENANT"] = "TENANT";
    UserRole["DONOR"] = "DONOR";
})(UserRole || (exports.UserRole = UserRole = {}));
var PropertyType;
(function (PropertyType) {
    PropertyType["RESIDENTIAL"] = "RESIDENTIAL";
    PropertyType["COMMERCIAL"] = "COMMERCIAL";
    PropertyType["LAND"] = "LAND";
    PropertyType["LUXURY"] = "LUXURY";
    PropertyType["APARTMENT"] = "APARTMENT";
    PropertyType["VILLA"] = "VILLA";
})(PropertyType || (exports.PropertyType = PropertyType = {}));
var PropertyStatus;
(function (PropertyStatus) {
    PropertyStatus["AVAILABLE"] = "AVAILABLE";
    PropertyStatus["SOLD"] = "SOLD";
    PropertyStatus["RENTED"] = "RENTED";
    PropertyStatus["PENDING"] = "PENDING";
    PropertyStatus["UNDER_CONSTRUCTION"] = "UNDER_CONSTRUCTION";
})(PropertyStatus || (exports.PropertyStatus = PropertyStatus = {}));
var InvestmentStatus;
(function (InvestmentStatus) {
    InvestmentStatus["PENDING"] = "PENDING";
    InvestmentStatus["ACTIVE"] = "ACTIVE";
    InvestmentStatus["MATURED"] = "MATURED";
    InvestmentStatus["WITHDRAWN"] = "WITHDRAWN";
    InvestmentStatus["DEFAULTED"] = "DEFAULTED";
})(InvestmentStatus || (exports.InvestmentStatus = InvestmentStatus = {}));
var InvestmentType;
(function (InvestmentType) {
    InvestmentType["REAL_ESTATE"] = "REAL_ESTATE";
    InvestmentType["CONSTRUCTION"] = "CONSTRUCTION";
    InvestmentType["DEVELOPMENT"] = "DEVELOPMENT";
    InvestmentType["FIXED_INCOME"] = "FIXED_INCOME";
})(InvestmentType || (exports.InvestmentType = InvestmentType = {}));
var ProgramCategory;
(function (ProgramCategory) {
    ProgramCategory["HEALTHCARE"] = "HEALTHCARE";
    ProgramCategory["EDUCATION"] = "EDUCATION";
    ProgramCategory["FEEDING"] = "FEEDING";
    ProgramCategory["WOMEN"] = "WOMEN";
    ProgramCategory["YOUTH"] = "YOUTH";
    ProgramCategory["COMMUNITY"] = "COMMUNITY";
})(ProgramCategory || (exports.ProgramCategory = ProgramCategory = {}));
var DonationStatus;
(function (DonationStatus) {
    DonationStatus["PENDING"] = "PENDING";
    DonationStatus["COMPLETED"] = "COMPLETED";
    DonationStatus["FAILED"] = "FAILED";
    DonationStatus["REFUNDED"] = "REFUNDED";
})(DonationStatus || (exports.DonationStatus = DonationStatus = {}));
var PaymentMethod;
(function (PaymentMethod) {
    PaymentMethod["CARD"] = "CARD";
    PaymentMethod["PAYPAL"] = "PAYPAL";
    PaymentMethod["BANK_TRANSFER"] = "BANK_TRANSFER";
    PaymentMethod["MOBILE_MONEY"] = "MOBILE_MONEY";
})(PaymentMethod || (exports.PaymentMethod = PaymentMethod = {}));
var ConstructionStatus;
(function (ConstructionStatus) {
    ConstructionStatus["PLANNING"] = "PLANNING";
    ConstructionStatus["IN_PROGRESS"] = "IN_PROGRESS";
    ConstructionStatus["ON_HOLD"] = "ON_HOLD";
    ConstructionStatus["COMPLETED"] = "COMPLETED";
    ConstructionStatus["CANCELLED"] = "CANCELLED";
})(ConstructionStatus || (exports.ConstructionStatus = ConstructionStatus = {}));
var LeadSource;
(function (LeadSource) {
    LeadSource["WEBSITE"] = "WEBSITE";
    LeadSource["PHONE"] = "PHONE";
    LeadSource["EMAIL"] = "EMAIL";
    LeadSource["REFERRAL"] = "REFERRAL";
    LeadSource["SOCIAL_MEDIA"] = "SOCIAL_MEDIA";
    LeadSource["WALK_IN"] = "WALK_IN";
    LeadSource["ADVERTISEMENT"] = "ADVERTISEMENT";
})(LeadSource || (exports.LeadSource = LeadSource = {}));
var LeadStatus;
(function (LeadStatus) {
    LeadStatus["NEW"] = "NEW";
    LeadStatus["CONTACTED"] = "CONTACTED";
    LeadStatus["QUALIFIED"] = "QUALIFIED";
    LeadStatus["PROPOSAL"] = "PROPOSAL";
    LeadStatus["NEGOTIATION"] = "NEGOTIATION";
    LeadStatus["CLOSED_WON"] = "CLOSED_WON";
    LeadStatus["CLOSED_LOST"] = "CLOSED_LOST";
})(LeadStatus || (exports.LeadStatus = LeadStatus = {}));
var TicketCategory;
(function (TicketCategory) {
    TicketCategory["GENERAL"] = "GENERAL";
    TicketCategory["PROPERTY_INQUIRY"] = "PROPERTY_INQUIRY";
    TicketCategory["PAYMENT"] = "PAYMENT";
    TicketCategory["INVESTMENT"] = "INVESTMENT";
    TicketCategory["DONATION"] = "DONATION";
    TicketCategory["TECHNICAL"] = "TECHNICAL";
})(TicketCategory || (exports.TicketCategory = TicketCategory = {}));
var TicketPriority;
(function (TicketPriority) {
    TicketPriority["LOW"] = "LOW";
    TicketPriority["MEDIUM"] = "MEDIUM";
    TicketPriority["HIGH"] = "HIGH";
    TicketPriority["URGENT"] = "URGENT";
})(TicketPriority || (exports.TicketPriority = TicketPriority = {}));
var TicketStatus;
(function (TicketStatus) {
    TicketStatus["OPEN"] = "OPEN";
    TicketStatus["IN_PROGRESS"] = "IN_PROGRESS";
    TicketStatus["WAITING"] = "WAITING";
    TicketStatus["RESOLVED"] = "RESOLVED";
    TicketStatus["CLOSED"] = "CLOSED";
})(TicketStatus || (exports.TicketStatus = TicketStatus = {}));
var NotificationType;
(function (NotificationType) {
    NotificationType["EMAIL"] = "EMAIL";
    NotificationType["SMS"] = "SMS";
    NotificationType["PUSH"] = "PUSH";
    NotificationType["IN_APP"] = "IN_APP";
})(NotificationType || (exports.NotificationType = NotificationType = {}));
//# sourceMappingURL=index.js.map
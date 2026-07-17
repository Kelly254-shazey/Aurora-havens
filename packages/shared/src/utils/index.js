"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatCurrency = formatCurrency;
exports.formatNumber = formatNumber;
exports.formatDate = formatDate;
exports.formatDateTime = formatDateTime;
exports.formatRelativeTime = formatRelativeTime;
exports.slugify = slugify;
exports.truncate = truncate;
exports.generateTicketNumber = generateTicketNumber;
exports.validateEmail = validateEmail;
exports.validatePhone = validatePhone;
exports.getInitials = getInitials;
exports.debounce = debounce;
exports.capitalize = capitalize;
exports.getErrorMessage = getErrorMessage;
exports.calculatePercentage = calculatePercentage;
exports.generatePagination = generatePagination;
function formatCurrency(amount, currency = 'USD') {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency,
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
    });
    return formatter.format(amount);
}
function formatNumber(num) {
    return new Intl.NumberFormat('en-US').format(num);
}
function formatDate(date) {
    return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
}
function formatDateTime(date) {
    return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    });
}
function formatRelativeTime(date) {
    const now = new Date();
    const then = new Date(date);
    const diff = now.getTime() - then.getTime();
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    if (seconds < 60)
        return 'just now';
    if (minutes < 60)
        return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    if (hours < 24)
        return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    if (days < 7)
        return `${days} day${days > 1 ? 's' : ''} ago`;
    return formatDate(date);
}
function slugify(text) {
    return text
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '-')
        .replace(/^-+|-+$/g, '');
}
function truncate(text, length) {
    if (text.length <= length)
        return text;
    return text.slice(0, length) + '...';
}
function generateTicketNumber() {
    const prefix = 'AH';
    const timestamp = Date.now().toString(36).toUpperCase();
    const random = Math.random().toString(36).substring(2, 6).toUpperCase();
    return `${prefix}-${timestamp}-${random}`;
}
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
function validatePhone(phone) {
    const phoneRegex = /^\+?[\d\s-]{10,}$/;
    return phoneRegex.test(phone);
}
function getInitials(firstName, lastName) {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
}
function debounce(func, wait) {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
    };
}
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
function getErrorMessage(error) {
    if (error instanceof Error)
        return error.message;
    if (typeof error === 'string')
        return error;
    return 'An unexpected error occurred';
}
function calculatePercentage(value, total) {
    if (total === 0)
        return 0;
    return Math.round((value / total) * 100);
}
function generatePagination(currentPage, totalPages) {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];
    for (let i = Math.max(2, currentPage - delta); i <= Math.min(totalPages - 1, currentPage + delta); i++) {
        range.push(i);
    }
    if (currentPage - delta > 2) {
        rangeWithDots.push(1, '...');
    }
    else {
        rangeWithDots.push(1);
    }
    rangeWithDots.push(...range);
    if (currentPage + delta < totalPages - 1) {
        rangeWithDots.push('...', totalPages);
    }
    else {
        rangeWithDots.push(totalPages);
    }
    return rangeWithDots;
}
//# sourceMappingURL=index.js.map
CREATE DATABASE IF NOT EXISTS aurora_havens;
USE aurora_havens;

SET FOREIGN_KEY_CHECKS = 0;

-- ============================================================
-- DROP TABLES (reverse dependency order)
-- ============================================================
-- Drop OLD tables (from legacy 33-table schema)
DROP TABLE IF EXISTS `audit_logs`;
DROP TABLE IF EXISTS `sms_logs`;
DROP TABLE IF EXISTS `email_logs`;
DROP TABLE IF EXISTS `ticket_messages`;
DROP TABLE IF EXISTS `support_tickets`;
DROP TABLE IF EXISTS `lead_activities`;
DROP TABLE IF EXISTS `lead_notes`;
DROP TABLE IF EXISTS `leads`;
DROP TABLE IF EXISTS `construction_images`;
DROP TABLE IF EXISTS `construction_updates`;
DROP TABLE IF EXISTS `construction_projects`;
DROP TABLE IF EXISTS `construction_packages`;
DROP TABLE IF EXISTS `success_stories`;
DROP TABLE IF EXISTS `volunteers`;
DROP TABLE IF EXISTS `foundation_events`;
DROP TABLE IF EXISTS `donations`;
DROP TABLE IF EXISTS `foundation_programs`;
DROP TABLE IF EXISTS `investment_documents`;
DROP TABLE IF EXISTS `investment_returns`;
DROP TABLE IF EXISTS `investments`;
DROP TABLE IF EXISTS `investment_opportunities`;
DROP TABLE IF EXISTS `property_inquiries`;
DROP TABLE IF EXISTS `property_favorites`;
DROP TABLE IF EXISTS `property_images`;
DROP TABLE IF EXISTS `properties`;
DROP TABLE IF EXISTS `site_settings`;
DROP TABLE IF EXISTS `gallery_images`;
DROP TABLE IF EXISTS `testimonials`;
DROP TABLE IF EXISTS `news`;
DROP TABLE IF EXISTS `blog_posts`;
DROP TABLE IF EXISTS `pages`;
-- Drop NEW tables (in case of re-run)
DROP TABLE IF EXISTS `sessions`;
DROP TABLE IF EXISTS `notifications`;
DROP TABLE IF EXISTS `settings`;
DROP TABLE IF EXISTS `messages`;
DROP TABLE IF EXISTS `conversation_participants`;
DROP TABLE IF EXISTS `conversations`;
DROP TABLE IF EXISTS `media`;
DROP TABLE IF EXISTS `activities`;
DROP TABLE IF EXISTS `transactions`;
DROP TABLE IF EXISTS `relationships`;
DROP TABLE IF EXISTS `entities`;
DROP TABLE IF EXISTS `users`;

-- ============================================================
-- 1. users (self-referencing for hierarchy)
-- ============================================================
CREATE TABLE `users` (
  `id` VARCHAR(36) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `first_name` VARCHAR(100) NOT NULL,
  `last_name` VARCHAR(100) NOT NULL,
  `phone` VARCHAR(20) NULL,
  `avatar` TEXT NULL,
  `role` ENUM('SUPER_ADMIN','ADMIN','MANAGER','AGENT','INVESTOR','BUYER','TENANT','DONOR','SELLER','CONTRACTOR','CUSTOMER_SUPPORT','PROPERTY_MANAGER','FOUNDATION_MANAGER') NOT NULL DEFAULT 'BUYER',
  `parent_user_id` VARCHAR(36) NULL,
  `is_email_verified` BOOLEAN NOT NULL DEFAULT FALSE,
  `is_phone_verified` BOOLEAN NOT NULL DEFAULT FALSE,
  `email_verification_token` TEXT NULL,
  `password_reset_token` TEXT NULL,
  `password_reset_expires` TIMESTAMP NULL,
  `last_login_at` TIMESTAMP NULL,
  `login_attempts` INT NOT NULL DEFAULT 0,
  `locked_until` TIMESTAMP NULL,
  `is_active` BOOLEAN NOT NULL DEFAULT TRUE,
  `is_deleted` BOOLEAN NOT NULL DEFAULT FALSE,
  `metadata` JSON NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`),
  INDEX `idx_users_role` (`role`),
  INDEX `idx_users_parent` (`parent_user_id`),
  INDEX `idx_users_active` (`is_active`),
  INDEX `idx_users_deleted` (`is_deleted`),
  CONSTRAINT `fk_users_parent` FOREIGN KEY (`parent_user_id`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================
-- 2. entities (universal content: properties, opportunities,
--    projects, programs, events, blog posts, news, pages)
-- ============================================================
CREATE TABLE `entities` (
  `id` VARCHAR(36) NOT NULL,
  `type` ENUM('PROPERTY','INVESTMENT_OPPORTUNITY','CONSTRUCTION_PROJECT','FOUNDATION_PROGRAM','FOUNDATION_EVENT','BLOG_POST','NEWS','PAGE','PROPERTY_VIEWING','OFFER','LEASE_AGREEMENT','MAINTENANCE_REQUEST','SUPPORT_TICKET','USER_PREFERENCE') NOT NULL,
  `slug` VARCHAR(255) NOT NULL,
  `title` VARCHAR(255) NOT NULL,
  `description` TEXT NULL,
  `status` ENUM('DRAFT','PUBLISHED','ARCHIVED','SOLD','COMPLETED','ACTIVE','INACTIVE','PENDING','CONFIRMED','CANCELLED','EXPIRED','TERMINATED','RENEWED') NOT NULL DEFAULT 'DRAFT',
  `created_by_id` VARCHAR(36) NOT NULL,
  `parent_entity_id` VARCHAR(36) NULL,
  `attributes` JSON NOT NULL,
  `is_featured` BOOLEAN NOT NULL DEFAULT FALSE,
  `is_deleted` BOOLEAN NOT NULL DEFAULT FALSE,
  `view_count` INT NOT NULL DEFAULT 0,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `entities_slug_unique` (`slug`),
  INDEX `idx_entities_type` (`type`),
  INDEX `idx_entities_status` (`status`),
  INDEX `idx_entities_type_status` (`type`, `status`),
  INDEX `idx_entities_created_by` (`created_by_id`),
  INDEX `idx_entities_parent` (`parent_entity_id`),
  INDEX `idx_entities_featured` (`is_featured`),
  INDEX `idx_entities_deleted` (`is_deleted`),
  CONSTRAINT `fk_entities_created_by` FOREIGN KEY (`created_by_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_entities_parent` FOREIGN KEY (`parent_entity_id`) REFERENCES `entities`(`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================
-- 3. relationships (universal many-to-many)
-- ============================================================
CREATE TABLE `relationships` (
  `id` VARCHAR(36) NOT NULL,
  `from_type` ENUM('USER','ENTITY') NOT NULL,
  `from_id` VARCHAR(36) NOT NULL,
  `to_type` ENUM('USER','ENTITY') NOT NULL,
  `to_id` VARCHAR(36) NOT NULL,
  `relationship_type` ENUM('OWNER','AGENT','TENANT','INVESTOR','DONOR','FAVORITE','BOOKMARK','AUTHOR','CATEGORY','TAG','PARENT','CHILD','ASSIGNEE','VIEWER','ROLE','SAVED','BOOKED','OFFERED','LEASED') NOT NULL,
  `metadata` JSON NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `relationships_unique` (`from_type`, `from_id`, `to_type`, `to_id`, `relationship_type`),
  INDEX `idx_rel_from` (`from_type`, `from_id`),
  INDEX `idx_rel_to` (`to_type`, `to_id`),
  INDEX `idx_rel_type` (`relationship_type`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================
-- 4. transactions (payments, donations, investments, refunds)
-- ============================================================
CREATE TABLE `transactions` (
  `id` VARCHAR(36) NOT NULL,
  `user_id` VARCHAR(36) NOT NULL,
  `entity_id` VARCHAR(36) NULL,
  `type` ENUM('PAYMENT','DONATION','INVESTMENT','REFUND','SUBSCRIPTION','FEE') NOT NULL,
  `status` ENUM('PENDING','PROCESSING','COMPLETED','FAILED','REFUNDED','CANCELLED') NOT NULL DEFAULT 'PENDING',
  `amount` DECIMAL(15,2) NOT NULL,
  `currency` VARCHAR(3) NOT NULL DEFAULT 'KES',
  `payment_method` ENUM('MPESA','CARD','PAYPAL','BANK_TRANSFER','CASH','OTHER') NULL,
  `payment_reference` VARCHAR(255) NULL,
  `payment_metadata` JSON NULL,
  `notes` TEXT NULL,
  `is_deleted` BOOLEAN NOT NULL DEFAULT FALSE,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `idx_tx_user` (`user_id`),
  INDEX `idx_tx_entity` (`entity_id`),
  INDEX `idx_tx_type` (`type`),
  INDEX `idx_tx_status` (`status`),
  INDEX `idx_tx_type_status` (`type`, `status`),
  INDEX `idx_tx_created` (`created_at`),
  INDEX `idx_tx_deleted` (`is_deleted`),
  CONSTRAINT `fk_tx_user` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_tx_entity` FOREIGN KEY (`entity_id`) REFERENCES `entities`(`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================
-- 5. activities (audit trail, logs, notifications, updates)
-- ============================================================
CREATE TABLE `activities` (
  `id` VARCHAR(36) NOT NULL,
  `user_id` VARCHAR(36) NULL,
  `entity_id` VARCHAR(36) NULL,
  `action` ENUM('CREATE','UPDATE','DELETE','VIEW','LOGIN','LOGOUT','EXPORT','IMPORT','APPROVE','REJECT','PUBLISH','ARCHIVE','COMMENT','LIKE','SHARE','BOOKMARK','INQUIRY','SUPPORT_TICKET','SYSTEM','ROLE_ASSIGNED','ROLE_REMOVED','PAYMENT_RECEIVED','DOCUMENT_UPLOADED') NOT NULL,
  `entity_type` VARCHAR(50) NULL,
  `description` TEXT NULL,
  `old_values` JSON NULL,
  `new_values` JSON NULL,
  `ip_address` VARCHAR(45) NULL,
  `user_agent` TEXT NULL,
  `metadata` JSON NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `idx_act_user` (`user_id`),
  INDEX `idx_act_entity` (`entity_id`),
  INDEX `idx_act_action` (`action`),
  INDEX `idx_act_entity_type` (`entity_type`),
  INDEX `idx_act_created` (`created_at`),
  CONSTRAINT `fk_act_user` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `fk_act_entity` FOREIGN KEY (`entity_id`) REFERENCES `entities`(`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================
-- 6. media (images, documents, files for any entity)
-- ============================================================
CREATE TABLE `media` (
  `id` VARCHAR(36) NOT NULL,
  `entity_id` VARCHAR(36) NOT NULL,
  `uploaded_by_id` VARCHAR(36) NOT NULL,
  `type` ENUM('IMAGE','DOCUMENT','VIDEO','AUDIO','FILE') NOT NULL,
  `url` TEXT NOT NULL,
  `thumbnail_url` TEXT NULL,
  `filename` VARCHAR(255) NOT NULL,
  `mime_type` VARCHAR(100) NOT NULL,
  `file_size` INT NOT NULL,
  `alt_text` VARCHAR(255) NULL,
  `sort_order` INT NOT NULL DEFAULT 0,
  `is_primary` BOOLEAN NOT NULL DEFAULT FALSE,
  `is_deleted` BOOLEAN NOT NULL DEFAULT FALSE,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `idx_media_entity` (`entity_id`),
  INDEX `idx_media_uploaded_by` (`uploaded_by_id`),
  INDEX `idx_media_type` (`type`),
  INDEX `idx_media_primary` (`is_primary`),
  INDEX `idx_media_deleted` (`is_deleted`),
  CONSTRAINT `fk_media_entity` FOREIGN KEY (`entity_id`) REFERENCES `entities`(`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_media_uploaded_by` FOREIGN KEY (`uploaded_by_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================
-- 7. conversations (messaging between users)
-- ============================================================
CREATE TABLE `conversations` (
  `id` VARCHAR(36) NOT NULL,
  `title` VARCHAR(255) NULL,
  `is_group` BOOLEAN NOT NULL DEFAULT FALSE,
  `created_by_id` VARCHAR(36) NOT NULL,
  `last_message_at` TIMESTAMP NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `idx_conv_created_by` (`created_by_id`),
  INDEX `idx_conv_last_message` (`last_message_at`),
  CONSTRAINT `fk_conv_created_by` FOREIGN KEY (`created_by_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================
-- 8. conversation_participants
-- ============================================================
CREATE TABLE `conversation_participants` (
  `id` VARCHAR(36) NOT NULL,
  `conversation_id` VARCHAR(36) NOT NULL,
  `user_id` VARCHAR(36) NOT NULL,
  `role` ENUM('MEMBER','ADMIN') NOT NULL DEFAULT 'MEMBER',
  `last_read_at` TIMESTAMP NULL,
  `is_muted` BOOLEAN NOT NULL DEFAULT FALSE,
  `joined_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `conv_participants_unique` (`conversation_id`, `user_id`),
  INDEX `idx_cp_conversation` (`conversation_id`),
  INDEX `idx_cp_user` (`user_id`),
  CONSTRAINT `fk_cp_conversation` FOREIGN KEY (`conversation_id`) REFERENCES `conversations`(`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_cp_user` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================
-- 9. messages
-- ============================================================
CREATE TABLE `messages` (
  `id` VARCHAR(36) NOT NULL,
  `conversation_id` VARCHAR(36) NOT NULL,
  `sender_id` VARCHAR(36) NOT NULL,
  `content` TEXT NOT NULL,
  `type` ENUM('TEXT','IMAGE','FILE','SYSTEM') NOT NULL DEFAULT 'TEXT',
  `is_deleted` BOOLEAN NOT NULL DEFAULT FALSE,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `idx_msg_conversation` (`conversation_id`),
  INDEX `idx_msg_sender` (`sender_id`),
  INDEX `idx_msg_created` (`created_at`),
  CONSTRAINT `fk_msg_conversation` FOREIGN KEY (`conversation_id`) REFERENCES `conversations`(`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_msg_sender` FOREIGN KEY (`sender_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================
-- 10. settings (key-value store for site configuration)
-- ============================================================
CREATE TABLE `settings` (
  `id` VARCHAR(36) NOT NULL,
  `category` VARCHAR(50) NOT NULL,
  `key_name` VARCHAR(100) NOT NULL,
  `value` TEXT NULL,
  `value_type` ENUM('STRING','NUMBER','BOOLEAN','JSON') NOT NULL DEFAULT 'STRING',
  `is_public` BOOLEAN NOT NULL DEFAULT FALSE,
  `updated_by_id` VARCHAR(36) NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `settings_category_key` (`category`, `key_name`),
  INDEX `idx_settings_category` (`category`),
  INDEX `idx_settings_public` (`is_public`),
  CONSTRAINT `fk_settings_updated_by` FOREIGN KEY (`updated_by_id`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================
-- 11. notifications
-- ============================================================
CREATE TABLE `notifications` (
  `id` VARCHAR(36) NOT NULL,
  `user_id` VARCHAR(36) NOT NULL,
  `type` ENUM('EMAIL','SMS','PUSH','IN_APP') NOT NULL DEFAULT 'IN_APP',
  `title` VARCHAR(255) NOT NULL,
  `message` TEXT NOT NULL,
  `entity_id` VARCHAR(36) NULL,
  `action_url` TEXT NULL,
  `is_read` BOOLEAN NOT NULL DEFAULT FALSE,
  `read_at` TIMESTAMP NULL,
  `metadata` JSON NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `idx_notif_user` (`user_id`),
  INDEX `idx_notif_user_read` (`user_id`, `is_read`),
  INDEX `idx_notif_type` (`type`),
  INDEX `idx_notif_created` (`created_at`),
  CONSTRAINT `fk_notif_user` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================
-- 12. sessions (JWT refresh tokens, API keys)
-- ============================================================
CREATE TABLE `sessions` (
  `id` VARCHAR(36) NOT NULL,
  `user_id` VARCHAR(36) NOT NULL,
  `token_hash` VARCHAR(255) NOT NULL,
  `token_type` ENUM('REFRESH','API_KEY','EMAIL_VERIFY','PASSWORD_RESET') NOT NULL,
  `ip_address` VARCHAR(45) NULL,
  `user_agent` TEXT NULL,
  `expires_at` TIMESTAMP NOT NULL,
  `is_revoked` BOOLEAN NOT NULL DEFAULT FALSE,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `idx_sess_user` (`user_id`),
  INDEX `idx_sess_token` (`token_hash`),
  INDEX `idx_sess_type` (`token_type`),
  INDEX `idx_sess_expires` (`expires_at`),
  INDEX `idx_sess_revoked` (`is_revoked`),
  CONSTRAINT `fk_sess_user` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================
-- SEED DATA
-- ============================================================

-- Default admin user (password: Admin@12345)
INSERT INTO `users` (`id`, `email`, `password`, `first_name`, `last_name`, `role`, `is_active`, `is_email_verified`)
VALUES ('admin-001', 'admin@aurorahavens.com', '$2b$14$LJ3m4ys3Lk0TSwMC/VzBpuTgOxYRqVqCjKxVZp4V8a1eJ3rN5v2O6', 'System', 'Administrator', 'SUPER_ADMIN', TRUE, TRUE);

-- Default settings
INSERT INTO `settings` (`id`, `category`, `key_name`, `value`, `value_type`, `is_public`) VALUES
('set-001', 'general', 'site_name', 'Aurora Havens', 'STRING', TRUE),
('set-002', 'general', 'site_description', 'Real Estate & Community Development', 'STRING', TRUE),
('set-003', 'general', 'contact_email', 'info@aurorahavens.com', 'STRING', TRUE),
('set-004', 'general', 'contact_phone', '+254 700 000 000', 'STRING', TRUE),
('set-005', 'general', 'currency', 'KES', 'STRING', TRUE),
('set-006', 'payment', 'mpesa_enabled', 'true', 'BOOLEAN', FALSE),
('set-007', 'payment', 'card_enabled', 'true', 'BOOLEAN', FALSE),
('set-008', 'payment', 'paypal_enabled', 'true', 'BOOLEAN', FALSE),
('set-009', 'payment', 'bank_transfer_enabled', 'true', 'BOOLEAN', FALSE);

-- Admin role in relationships
INSERT INTO `relationships` (`id`, `from_type`, `from_id`, `to_type`, `to_id`, `relationship_type`, `metadata`) VALUES
('role-admin-001', 'USER', 'admin-001', 'USER', 'admin-001', 'ROLE', '{"role":"SUPER_ADMIN","assigned_at":"2024-01-01T00:00:00Z","source_event":"system_initialization","active":true}');

-- User preferences for admin
INSERT INTO `settings` (`id`, `category`, `key_name`, `value`, `value_type`, `is_public`, `updated_by_id`) VALUES
('pref-admin-001', 'user_preferences:admin-001', 'email_notifications', 'true', 'BOOLEAN', FALSE, 'admin-001'),
('pref-admin-002', 'user_preferences:admin-001', 'sms_notifications', 'true', 'BOOLEAN', FALSE, 'admin-001'),
('pref-admin-003', 'user_preferences:admin-001', 'push_notifications', 'true', 'BOOLEAN', FALSE, 'admin-001'),
('pref-admin-004', 'user_preferences:admin-001', 'theme', 'system', 'STRING', FALSE, 'admin-001'),
('pref-admin-005', 'user_preferences:admin-001', 'language', 'en', 'STRING', FALSE, 'admin-001'),
('pref-admin-006', 'user_preferences:admin-001', 'currency', 'KES', 'STRING', FALSE, 'admin-001'),
('pref-admin-007', 'user_preferences:admin-001', 'timezone', 'Africa/Nairobi', 'STRING', FALSE, 'admin-001');

-- Portal-specific settings
INSERT INTO `settings` (`id`, `category`, `key_name`, `value`, `value_type`, `is_public`) VALUES
('set-010', 'portal', 'max_file_upload_mb', '25', 'NUMBER', FALSE),
('set-011', 'portal', 'allowed_file_types', '["pdf","jpg","png","doc","docx"]', 'JSON', FALSE),
('set-012', 'portal', 'support_ticket_auto_assign', 'true', 'BOOLEAN', FALSE),
('set-013', 'portal', 'maintenance_max_per_day', '5', 'NUMBER', FALSE),
('set-014', 'portal', 'viewing_buffer_hours', '24', 'NUMBER', FALSE),
('set-015', 'portal', 'offer_expiry_days', '30', 'NUMBER', FALSE),
('set-016', 'security', 'max_login_attempts', '5', 'NUMBER', FALSE),
('set-017', 'security', 'lockout_duration_minutes', '30', 'NUMBER', FALSE),
('set-018', 'security', 'session_timeout_hours', '24', 'NUMBER', FALSE),
('set-019', 'security', 'require_2fa_admin', 'true', 'BOOLEAN', FALSE),
('set-020', 'security', 'password_min_length', '8', 'NUMBER', FALSE),
('set-021', 'security', 'password_require_uppercase', 'true', 'BOOLEAN', FALSE),
('set-022', 'security', 'password_require_number', 'true', 'BOOLEAN', FALSE),
('set-023', 'security', 'password_require_special', 'false', 'BOOLEAN', FALSE);

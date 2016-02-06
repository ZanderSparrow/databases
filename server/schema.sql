CREATE DATABASE chat;

USE chat;

-- ---
-- Table 'MESSAGES'
-- 
-- ---

DROP TABLE IF EXISTS `MESSAGES`;

CREATE TABLE messages (
  /* Describe your table here.*/
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `text` MEDIUMTEXT NULL DEFAULT NULL,
  `timestamp` TIMESTAMP NULL DEFAULT NULL,
  `room_id` INTEGER NULL DEFAULT NULL,
  `user_id` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

/* Create other tables and define schemas for them here! */

-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'USERS'
-- 
-- ---

DROP TABLE IF EXISTS `USERS`;
    
CREATE TABLE `USERS` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `name` CHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'ROOMS'
-- 
-- ---

DROP TABLE IF EXISTS `ROOMS`;
    
CREATE TABLE `ROOMS` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `name` CHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);



-- ---
-- Foreign Keys 
-- ---

ALTER TABLE `MESSAGES` ADD FOREIGN KEY (room_id) REFERENCES `ROOMS` (`id`);
ALTER TABLE `MESSAGES` ADD FOREIGN KEY (user_id) REFERENCES `USERS` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `USERS` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `ROOMS` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `MESSAGES` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `USERS` (`id`,`name`) VALUES
-- ('','');
-- INSERT INTO `ROOMS` (`id`,`name`) VALUES
-- ('','');
-- INSERT INTO `MESSAGES` (`id`,`text`,`timestamp`,`room_id`,`user_id`) VALUES
-- ('','','','','');


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/


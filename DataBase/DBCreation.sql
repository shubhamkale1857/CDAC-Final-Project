DROP SCHEMA if exists `dac_project`;

CREATE SCHEMA `dac_project` ;

CREATE TABLE `dac_project`.`roles` (
  `role_id` INT NOT NULL,
  `role_name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`role_id`),
  UNIQUE INDEX `role_name_UNIQUE` (`role_name` ASC) VISIBLE);



CREATE TABLE `dac_project`.`users` (
  `user_id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NULL,
  `pass` VARCHAR(200) NULL,
  `role_id` INT NULL,
  `active` INT NULL DEFAULT 1,
  PRIMARY KEY (`user_id`),
  UNIQUE INDEX `username_UNIQUE` (`username` ASC) VISIBLE,
  INDEX `role_id_idx` (`role_id` ASC) VISIBLE,
  CONSTRAINT `role_id`
    FOREIGN KEY (`role_id`)
    REFERENCES `dac_project`.`roles` (`role_id`)
    ON DELETE SET NULL
    ON UPDATE CASCADE);


CREATE TABLE `dac_project`.`customers` (
  `customer_id` int NOT NULL AUTO_INCREMENT,
  `fname` varchar(45) NOT NULL,
  `lname` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `contactno` varchar(13) DEFAULT NULL,
  `dob` date NOT NULL,
  `height` double DEFAULT NULL,
  `weight` double DEFAULT NULL,
  `gender` varchar(10) DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `registration_date` date DEFAULT NULL,
  `address` varchar(150) DEFAULT NULL,
  `goal` varchar(45) NOT NULL DEFAULT 'maintain',
  PRIMARY KEY (`customer_id`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  KEY `user_id_idx` (`user_id`),
  CONSTRAINT `emailconstraint` CHECK (`email` REGEXP '^[a-zA-Z0-9][a-zA-Z0-9._-]*[a-zA-Z0-9._-]@[a-zA-Z0-9][a-zA-Z0-9._-]*[a-zA-Z0-9]\\.[a-zA-Z]{2,63}$'),
  CONSTRAINT `user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE SET NULL ON UPDATE CASCADE
);

CREATE TABLE `dac_project`.`trainers` (
  `trainer_id` int NOT NULL AUTO_INCREMENT,
  `fname` varchar(45) DEFAULT NULL,
  `lname` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `contactno` varchar(13) DEFAULT NULL,
  `specialization` varchar(45) DEFAULT NULL,
  `experience` int DEFAULT NULL,
  `dob` DATE NULL,
  `registration_date` date DEFAULT NULL,
  `gender` VARCHAR(45) NULL,
  `address` varchar(150) DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`trainer_id`),
  KEY `user_id_idx` (`user_id`),
  CONSTRAINT `emailconstraint1` CHECK (`email` REGEXP '^[a-zA-Z0-9][a-zA-Z0-9._-]*[a-zA-Z0-9._-]@[a-zA-Z0-9][a-zA-Z0-9._-]*[a-zA-Z0-9]\\.[a-zA-Z]{2,63}$'),
  CONSTRAINT `user_id1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE SET NULL ON UPDATE CASCADE
);

INSERT INTO `dac_project`.`roles` (`role_id`, `role_name`) VALUES ('1', 'ADMIN');
INSERT INTO `dac_project`.`roles` (`role_id`, `role_name`) VALUES ('2', 'CUSTOMER');
INSERT INTO `dac_project`.`roles` (`role_id`, `role_name`) VALUES ('3', 'TRAINER');

INSERT INTO `dac_project`.`users` (`user_id`, `username`, `pass`, `role_id`, `active`) VALUES ('1', 'shubhamkale1857', '$2a$10$29VXmTgHxm9mlv/sfAPCoeUUgvh1KMun44ze9WraHPN8a0BgIg3mW', '1', '1');

CREATE TABLE `dac_project`.`admins` (
  `admin_id` INT NOT NULL AUTO_INCREMENT,
  `fname` VARCHAR(45) NULL,
  `lname` VARCHAR(45) NULL,
  `dob` DATE NULL,
  `gender` VARCHAR(45) NULL,
  `contact` VARCHAR(45) NULL,
  `email` VARCHAR(45) NULL,
  `address` VARCHAR(200) NULL,
  `user_id` INT NULL,
  PRIMARY KEY (`admin_id`),
  INDEX `user_id_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `emailconstraint2` CHECK (`email` REGEXP '^[a-zA-Z0-9][a-zA-Z0-9._-]*[a-zA-Z0-9._-]@[a-zA-Z0-9][a-zA-Z0-9._-]*[a-zA-Z0-9]\\.[a-zA-Z]{2,63}$'),
  CONSTRAINT `user_id3`
    FOREIGN KEY (`user_id`)
    REFERENCES `dac_project`.`users` (`user_id`)
    ON DELETE SET NULL
    ON UPDATE CASCADE);

INSERT INTO `dac_project`.`admins` (`admin_id`, `fname`, `lname`, `gender`,`dob`, `contact`, `email`, `address`, `user_id`) VALUES ('1', 'Shubham', 'Kale','Male', '2000-04-09', '8007997105', 'shubhamkale1857@gmail.com', 'Naik Nagar Georai', '1');

-- incripted password for Shubh@123
-- $2a$10$29VXmTgHxm9mlv/sfAPCoeUUgvh1KMun44ze9WraHPN8a0BgIg3mW

CREATE TABLE `dac_project`.`categories` (
  `category_id` INT NOT NULL AUTO_INCREMENT,
  `category_name` VARCHAR(45) NULL, 
  PRIMARY KEY (`category_id`),
  UNIQUE INDEX `category_name_UNIQUE` (`category_name` ASC) VISIBLE);



INSERT INTO `dac_project`.`categories` (`category_id`, `category_name`) VALUES ('1', 'Dairy Products');
INSERT INTO `dac_project`.`categories` (`category_id`, `category_name`) VALUES ('2', 'Fats');
INSERT INTO `dac_project`.`categories` (`category_id`, `category_name`) VALUES ('3', 'Breads,cereals,fastfood,grains');
INSERT INTO `dac_project`.`categories` (`category_id`, `category_name`) VALUES ('4', 'Meat Poultry');
INSERT INTO `dac_project`.`categories` (`category_id`, `category_name`) VALUES ('5', 'Fruits');
INSERT INTO `dac_project`.`categories` (`category_id`, `category_name`) VALUES ('6', 'Vegitables');
INSERT INTO `dac_project`.`categories` (`category_id`, `category_name`) VALUES ('7', 'Bevrages');
INSERT INTO `dac_project`.`categories` (`category_id`, `category_name`) VALUES ('8', 'Soups');
INSERT INTO `dac_project`.`categories` (`category_id`, `category_name`) VALUES ('9', 'Desserts,Sweets');
INSERT INTO `dac_project`.`categories` (`category_id`, `category_name`) VALUES ('10', 'Fish,Seafood');
INSERT INTO `dac_project`.`categories` (`category_id`, `category_name`) VALUES ('11', 'FastFood');
INSERT INTO `dac_project`.`categories` (`category_id`, `category_name`) VALUES ('12', 'Pulses');
INSERT INTO `dac_project`.`categories` (`category_id`, `category_name`) VALUES ('13', 'Dried Fruits');
INSERT INTO `dac_project`.`categories` (`category_id`, `category_name`) VALUES ('14', 'Vegetable Oils');
INSERT INTO `dac_project`.`categories` (`category_id`, `category_name`) VALUES ('15', 'Spices');


CREATE TABLE `dac_project`.`dailymeals` (
  `meal_id` INT NOT NULL AUTO_INCREMENT,
  `customer_id` INT NULL,
  `date` DATETIME NULL,
  `mealtype` INT NULL,
  `calories` INT NULL,
  PRIMARY KEY (`meal_id`),
  INDEX `customer_id_idx` (`customer_id` ASC) VISIBLE,
  CONSTRAINT `customer_id`
    FOREIGN KEY (`customer_id`)
    REFERENCES `dac_project`.`customers` (`customer_id`)
    ON DELETE SET NULL
    ON UPDATE CASCADE);
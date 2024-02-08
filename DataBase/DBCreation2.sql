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
  `pass` VARCHAR(45) NULL,
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
  PRIMARY KEY (`customer_id`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  KEY `user_id_idx` (`user_id`),
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
  `user_id` int DEFAULT NULL,
  `registration_date` date DEFAULT NULL,
  `address` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`trainer_id`),
  KEY `user_id_idx` (`user_id`),
  CONSTRAINT `user_id1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE SET NULL ON UPDATE CASCADE
);
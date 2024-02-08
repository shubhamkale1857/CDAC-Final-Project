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
  `customer_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(150) NOT NULL,
  `email` VARCHAR(45) NULL,
  `dob` DATE NOT NULL,
  `height` DECIMAL(10,2) NOT NULL,
  `weight` DECIMAL(10,2) NOT NULL,
  `gender` VARCHAR(10) NULL,
  `user_id` INT NULL,
  PRIMARY KEY (`customer_id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE,
  INDEX `user_id_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `user_id`
    FOREIGN KEY (`user_id`)
    REFERENCES `dac_project`.`users` (`user_id`)
    ON DELETE SET NULL
    ON UPDATE CASCADE);

CREATE TABLE `dac_project`.`trainers` (
  `trainer_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(150) NULL,
  `specialization` VARCHAR(45) NULL,
  `experience` INT NULL,
  `user_id` INT NULL,
  PRIMARY KEY (`trainer_id`),
  INDEX `user_id_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `user_id1`
    FOREIGN KEY (`user_id`)
    REFERENCES `dac_project`.`users` (`user_id`)
    ON DELETE SET NULL
    ON UPDATE CASCADE);
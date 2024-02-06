-- Shema Creation

CREATE SCHEMA `dac_project` ;

--------------------------------------------------------------------------------------------------

-- Trainers Table

CREATE TABLE `dac_project`.`trainers` (
  `trainer_id` INT NOT NULL AUTO_INCREMENT,
  `specialization` VARCHAR(150) NOT NULL,
  `experience` INT NOT NULL,
  `certification` VARCHAR(150) NULL,
  PRIMARY KEY (`trainer_id`));

--------------------------------------------------------------------------------------------------

-- Users Table

CREATE TABLE `dac_project`.`users` (
  `user_id` INT NOT NULL AUTO_INCREMENT,
  `trainer_id` INT NULL,
  `username` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `dob` DATE NOT NULL,
  `gender` VARCHAR(10) NOT NULL,
  `height` INT NOT NULL,
  `weight` INT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE,
  UNIQUE INDEX `username_UNIQUE` (`username` ASC) VISIBLE,
  INDEX `trainerId_idx` (`trainer_id` ASC) VISIBLE,
  CONSTRAINT `trainerId`
    FOREIGN KEY (`trainer_id`)
    REFERENCES `dac_project`.`trainers` (`trainer_id`)
    ON DELETE SET NULL
    ON UPDATE CASCADE);

ALTER TABLE `dac_project`.`users` 
CHANGE COLUMN `height` `height` DECIMAL(10,2) NOT NULL ,
CHANGE COLUMN `weight` `weight` DECIMAL(10,2) NULL DEFAULT NULL ;

-------------------------------------------------------------------------------------------------------

-- Meals Table

CREATE TABLE `dac_project`.`meals` (
  `meal_id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NULL,
  `meal_name` VARCHAR(100) NULL,
  `date_time` TIMESTAMP NOT NULL,
  `total_calories` DECIMAL(10,2) NULL,
  PRIMARY KEY (`meal_id`),
  INDEX `user_id_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `user_id`
    FOREIGN KEY (`user_id`)
    REFERENCES `dac_project`.`users` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

------------------------------------------------------------------------------------------------------------

-- FoodItems

CREATE TABLE `dac_project`.`food_items` (
  `food_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(150) NULL,
  `calories_per_serving` INT NOT NULL,
  `serving_size` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`food_id`));

-------------------------------------------------------------------------------------------------------------

-- MealFoodItems

CREATE TABLE `dac_project`.`meal_food_items` (
  `mf_id` INT NOT NULL AUTO_INCREMENT,
  `food_id` INT NULL,
  `meal_id` INT NULL,
  `serving_size_consumed` VARCHAR(45) NULL,
  PRIMARY KEY (`mf_id`),
  INDEX `food_id_idx` (`food_id` ASC) VISIBLE,
  INDEX `meal_id_idx` (`meal_id` ASC) VISIBLE,
  CONSTRAINT `food_id`
    FOREIGN KEY (`food_id`)
    REFERENCES `dac_project`.`food_items` (`food_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `meal_id`
    FOREIGN KEY (`meal_id`)
    REFERENCES `dac_project`.`meals` (`meal_id`)
    ON DELETE SET NULL
    ON UPDATE CASCADE);

----------------------------------------------------------------------------------------------------------------
-- inserting data
--in trainers
INSERT INTO `dac_project`.`trainers` (`trainer_id`, `specialization`, `experience`, `certification`) VALUES ('1', 'physic', '2', 'Physic');
INSERT INTO `dac_project`.`trainers` (`trainer_id`, `specialization`, `experience`, `certification`) VALUES ('2', 'cardio', '3', 'Cardinality');

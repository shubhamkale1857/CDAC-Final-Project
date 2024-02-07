
DROP SCHEMA if exists `dac_project`;
CREATE SCHEMA `dac_project` ;

CREATE TABLE `dac_project`.`users` (
  `user_id` INT NOT NULL AUTO_INCREMENT,
  `trainer_id` INT NULL,
  `username` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `dob` DATE NOT NULL,
  `gender` VARCHAR(10) NOT NULL,
  `height` DECIMAL(10,2) NOT NULL,
  `weight` DECIMAL(10,2) NOT NULL,
  `role` INT NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE,
  UNIQUE INDEX `username_UNIQUE` (`username` ASC) VISIBLE,
  INDEX `trainerId_idx` (`trainer_id` ASC) VISIBLE);



CREATE TABLE `dac_project`.`trainers` (
  `trainer_id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `specialization` VARCHAR(150) NOT NULL,
  `experience` INT NOT NULL,
  `certification` VARCHAR(150) NULL,
  PRIMARY KEY (`trainer_id`),
  CONSTRAINT `user_idt`
    FOREIGN KEY (`user_id`)
    REFERENCES `dac_project`.`users` (`user_id`)
    ON DELETE CASCADE
  );



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



CREATE TABLE `dac_project`.`food_items` (
  `food_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(150) NULL,
  `calories_per_serving` INT NOT NULL,
  `serving_size` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`food_id`));



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


insert into users(username,email,password,dob,gender,height,weight,role) values("manas","manas@gmail.com","manas@123","2000-12-12","m",5.4,72.4,1);
insert into users(username,email,password,dob,gender,height,weight,role) values("manasi","manasi@gmail.com","manasi@123","2000-12-12","f",5.4,72.4,1);
insert into users(username,email,password,dob,gender,height,weight,role) values("mana","mana@gmail","mana@123","2000-12-12","m",5.4,72.4,2);

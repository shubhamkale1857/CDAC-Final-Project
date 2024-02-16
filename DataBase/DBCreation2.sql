ALTER TABLE `dac_project`.`fooditems` 
CHANGE COLUMN `food_id` `food_id` INT NOT NULL AUTO_INCREMENT ,
ADD PRIMARY KEY (`food_id`);

alter table `dac_project`.`fooditems` add constraint `FKs27esovm6xj6che1rqolwf4rb` foreign key (`category_id`) references `categories` (`category_id`);

CREATE TABLE `dac_project`.`mealfooditemtransaction` (
  `meal_id` INT NOT NULL,
  `food_id` INT NOT NULL,
  `qty` INT NULL,
  PRIMARY KEY (`meal_id`, `food_id`),
  INDEX `fooditem_id_idx` (`food_id` ASC) VISIBLE,
  CONSTRAINT `meal_id`
    FOREIGN KEY (`meal_id`)
    REFERENCES `dac_project`.`dailymeals` (`meal_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fooditem_id`
    FOREIGN KEY (`food_id`)
    REFERENCES `dac_project`.`fooditems` (`food_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);



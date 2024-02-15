package com.example.demo.entities;

import java.io.Serializable;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
@Getter
@Setter
@EqualsAndHashCode
public class MealfooditemtransactionKey implements Serializable{
	private Fooditem food;
	private DailyMeal meal;
}

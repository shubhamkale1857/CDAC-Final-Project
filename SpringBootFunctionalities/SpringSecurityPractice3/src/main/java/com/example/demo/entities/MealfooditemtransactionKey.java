package com.example.demo.entities;

import java.io.Serializable;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Getter
@Setter
@EqualsAndHashCode
//@NoArgsConstructor
//@AllArgsConstructor
public class MealfooditemtransactionKey implements Serializable{
	private Fooditem food;
	private DailyMeal meal;
}

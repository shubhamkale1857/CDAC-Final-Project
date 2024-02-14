package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Customer;
import com.example.demo.entities.DailyMeal;
import com.example.demo.entities.DummyMealTransaction;
import com.example.demo.entities.DummyyMealTransaction;
import com.example.demo.entities.Fooditem;
import com.example.demo.entities.Mealfooditemtransaction;
import com.example.demo.services.CustomerService;
import com.example.demo.services.DailyMealService;
import com.example.demo.services.FoodItemService;
import com.example.demo.services.MealFooditemtransactionService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class DummyMealTransactionController {
	@Autowired
	DailyMeal meal;
	@Autowired
	DailyMealService mealService;
	@Autowired
	CustomerService cService;
	@Autowired
	FoodItemService fService;
	@Autowired
	Mealfooditemtransaction mealfood;
	
	@Autowired
	MealFooditemtransactionService mealfoodService;
	
	@PostMapping("/saveTran")
	public Mealfooditemtransaction saveTransaction(@RequestBody DummyMealTransaction dummy) {
		System.out.println("here in transaction controller");
		Customer cust = cService.getOneCustomer(dummy.getCustomer_id());
		meal.setCustomer(cust);
		meal.setDate(dummy.getDate());
		meal.setCalories(dummy.getCalories());
		DailyMeal savedMeal = mealService.save(meal);
		Fooditem food = fService.getOneFoodItem(dummy.getFood_id());
		mealfood.setQty(dummy.getQty());
		mealfood.setFood(food);
		mealfood.setMeal(savedMeal);
		return mealfoodService.save(mealfood);
	}
	
	@PostMapping("/saveTran1")
	public Mealfooditemtransaction saveTran(@RequestBody DummyyMealTransaction dummy) {
		System.out.println(dummy);
		System.out.println("hello");
		return null;
	}
}

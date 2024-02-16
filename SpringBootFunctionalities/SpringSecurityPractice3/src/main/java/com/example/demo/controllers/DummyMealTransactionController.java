package com.example.demo.controllers;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

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
		meal.setDate(LocalDate.now());
		meal.setCalories(dummy.getCalories());
		DailyMeal savedMeal = mealService.save(meal);
		Fooditem food = fService.getOneFoodItem(dummy.getFood_id());
		mealfood.setQty(dummy.getQty());
		mealfood.setFood(food);
		mealfood.setMeal(savedMeal);
		return mealfoodService.save(mealfood);
	}
	
	@PostMapping("/saveTran1")
	public Object saveTran(@RequestBody DummyyMealTransaction dummy) {
		System.out.println(dummy);
		System.out.println(dummy.getMealtype());
		System.out.println("************************************************");
		int sumCalory = 0;
		List<Fooditem> foodList = new ArrayList<>();
		for(int i = 0 ; i < dummy.getList().size() ; i++) {
			int foodId = (dummy.getList().get(i))[0];
			Fooditem food = fService.getOneFoodItem(foodId);
			foodList.add(food);
			sumCalory += (food.getCalories()*(dummy.getList().get(i))[1]);
		}
		
		Customer cust = cService.findByUid(dummy.getUid());
		DailyMeal meall = new DailyMeal();
		meall.setCustomer(cust);
		meall.setDate(LocalDate.now());
		meall.setCalories(sumCalory);
		meall.setMealtype(dummy.getMealtype());
		DailyMeal mealll = mealService.save(meall);
		
		for(int i = 0 ; i < foodList.size(); i++) {
			Mealfooditemtransaction mealfoodd = new Mealfooditemtransaction();
			mealfoodd.setFood(foodList.get(i));
			mealfoodd.setMeal(mealll);
			mealfoodd.setQty((dummy.getList().get(i))[1]);
			mealfoodService.save(mealfoodd);
		}
		
		return new String("hello");
	}
}

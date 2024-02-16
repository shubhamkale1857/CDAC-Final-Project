package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Category;
import com.example.demo.entities.DummyFoodItem;
import com.example.demo.entities.Fooditem;
import com.example.demo.services.CategoryService;
import com.example.demo.services.FoodItemService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class FoodItemController {
	@Autowired
	FoodItemService fservice;
	@Autowired
	CategoryService cservice;
	
	@GetMapping("/getfoodlist")
	public List<Fooditem> getAllFoodItems(){
		return fservice.getAllFoodItems();
	}
	
	@PostMapping("/saveFoodItem")
	public String saveFoodItem(@RequestBody DummyFoodItem dummy) {
		System.out.println(dummy);
		Fooditem food = null;
		if(dummy.getFoodid() == 0) {
			System.out.println("***************in 0 component******************8");
			food = new Fooditem();
		}else {
			System.out.println("***************in non 0 component******************8");
			food = fservice.getOneFoodItem(dummy.getFoodid());
		}
		Category category = cservice.getOneCategory(dummy.getCategory());
		food.setFood_name(dummy.getFname());
		food.setUnit(dummy.getUnit());
		food.setCalories(dummy.getCalory());
		food.setProtein(dummy.getProtein());
		food.setCategory(category);
		if(fservice.save(food)!=null) {
			return "success";
		}else {
			return "";
		}
	}
}

package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Fooditem;
import com.example.demo.services.FoodItemService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class FoodItemController {
	@Autowired
	FoodItemService fservice;
	
	@GetMapping("/getfoodlist")
	public List<Fooditem> getAllFoodItems(){
		return fservice.getAllFoodItems();
	}
}

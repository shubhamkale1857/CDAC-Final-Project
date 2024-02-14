package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Fooditem;
import com.example.demo.repositories.FoodItemRepository;

@Service
public class FoodItemService {
	@Autowired
	FoodItemRepository frepo;
	
	public List<Fooditem> getAllFoodItems(){
		return frepo.findAll();
	}
}

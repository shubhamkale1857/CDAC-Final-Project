package com.example.demo.services;

import java.util.List;
import java.util.Optional;

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
	
	public Fooditem getOneFoodItem(int id) {
		try {
			Optional<Fooditem> f = frepo.findById(id);
			return f.get();
		}catch (Exception e) {
			return null;
		}
	}
}

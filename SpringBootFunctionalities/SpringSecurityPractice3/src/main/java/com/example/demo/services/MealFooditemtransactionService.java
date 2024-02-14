package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Mealfooditemtransaction;
import com.example.demo.repositories.MealFooditemtransactionRepository;

@Service
public class MealFooditemtransactionService {
	@Autowired
	MealFooditemtransactionRepository mRepo;
	
	public Mealfooditemtransaction save(Mealfooditemtransaction obj) {
		return mRepo.save(obj);
	}
}

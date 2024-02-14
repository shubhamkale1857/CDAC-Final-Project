package com.example.demo.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.DailyMeal;
import com.example.demo.repositories.DailyMealRepository;

@Service
public class DailyMealService {
	@Autowired
	DailyMealRepository drepo;
	
	public DailyMeal getOneMeal(int id) {
		try {
			Optional<DailyMeal> d = drepo.findById(id);
			return d.get();
		}catch (Exception e) {
			return null;
		}
	}
	
	public DailyMeal save(DailyMeal d) {
		return drepo.save(d);
	}
}

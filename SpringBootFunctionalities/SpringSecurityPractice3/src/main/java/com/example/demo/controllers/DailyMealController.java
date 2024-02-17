package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.services.DailyMealService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class DailyMealController {
	
	@Autowired
	DailyMealService dService;
	
	@GetMapping("/getTotalCal")
	public int getTotCalories(@RequestParam("cust_id") int cust_id)
	{
		return dService.getTotCalories(cust_id);
	}
}

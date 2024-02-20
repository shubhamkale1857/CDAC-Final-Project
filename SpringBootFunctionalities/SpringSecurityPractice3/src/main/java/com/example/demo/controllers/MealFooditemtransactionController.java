package com.example.demo.controllers;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.services.MealFooditemtransactionService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class MealFooditemtransactionController {

	@Autowired
	MealFooditemtransactionService mService;
	
	@GetMapping("/getMealHistorytoday")
	public Object[] getMealInfo(@RequestParam("custid") int custid) {
		LocalDate date = LocalDate.now();
		return mService.getMealInfo(date, custid);
	}
	
	@GetMapping("/getMealHistory")
	public Object[] getMealInfo2(@RequestParam("custid") int custid, @RequestParam("date") LocalDate date) {
		return mService.getMealInfo(date, custid);
	}
	
}

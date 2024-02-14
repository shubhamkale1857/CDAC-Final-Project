package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Trainer;
import com.example.demo.services.TrainerService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class TrainerController {
	
	@Autowired
	TrainerService tService;
	
	@GetMapping("/getTrainers")
	public List<Trainer> getAllTrainers()
	{
		return tService.getAllTrainers();
	}
	
}

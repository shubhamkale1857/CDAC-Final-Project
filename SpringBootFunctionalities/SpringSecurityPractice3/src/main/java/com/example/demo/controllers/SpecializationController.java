package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Specialization;
import com.example.demo.services.SpecializationService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class SpecializationController {
	
	@Autowired
	SpecializationService spservice;
	
	@GetMapping("/getAllSps")
	public List<Specialization> getAll()
	{
		return spservice.getAll();
	}

}

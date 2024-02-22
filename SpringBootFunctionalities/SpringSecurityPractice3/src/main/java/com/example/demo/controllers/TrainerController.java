package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
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
	@GetMapping("/updateTrainer")
	public Trainer getOneTrianer(@RequestParam("uid") int uid) {
		return tService.getTrainerByUid(uid);
	}
	
	@PostMapping("/saveTrainer1")
	public Trainer updateTrainer(@RequestBody Trainer tr) {
		System.out.println("**********************************************");
		System.out.println(tr);
		Trainer train = tService.getOneCustomer(tr.getTrainer_id());
		train.setFname(tr.getFname());
		train.setLname(tr.getLname());
		train.setEmail(tr.getEmail());
		train.setContactno(tr.getContactno());
		train.setDob(tr.getDob());
		train.setGender(tr.getGender());
		train.setSpecialization(tr.getSpecialization());
		train.setExperience(tr.getExperience());
		train.setAddress(tr.getAddress());
		return tService.save(train);
	}
}

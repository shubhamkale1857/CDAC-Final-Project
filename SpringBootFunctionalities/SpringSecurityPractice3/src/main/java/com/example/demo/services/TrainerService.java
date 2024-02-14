package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Trainer;
import com.example.demo.repositories.TrainerRepository;

@Service
public class TrainerService {
	@Autowired
	TrainerRepository trepo;
	public Trainer save(Trainer cust) {
		return trepo.save(cust);
	}
	
	public List<Trainer> getAllTrainers()
	{
		return trepo.findAll();
	}
}

package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Customer;
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
	
	public Trainer getOneCustomer(int id) {
		try {
			Optional<Trainer> c = trepo.findById(id);
			return c.get();
		}catch (Exception e) {
			return null;
		}
	}
	
	public Trainer getTrainerByUid(int id) {
		return trepo.getTrainerByUid(id);
	}
}

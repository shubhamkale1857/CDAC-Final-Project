package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Specialization;
import com.example.demo.repositories.SpecializationRepository;

@Service
public class SpecializationService {
	
	@Autowired
	SpecializationRepository srepo;
	
	public List<Specialization> getAll()
	{
		return srepo.findAll();
	}

}

package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Customer;
import com.example.demo.repositories.CustomerRepository;

@Service
public class CustomerService {
	@Autowired
	CustomerRepository cRepo;
	
	public Customer save(Customer cust) {
		return cRepo.save(cust);
	}
}

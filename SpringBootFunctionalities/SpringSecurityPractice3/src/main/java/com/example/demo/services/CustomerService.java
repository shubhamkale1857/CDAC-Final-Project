package com.example.demo.services;

import java.util.Optional;

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
	
	public Customer findByUid(int uid) {
		return cRepo.findByUid(uid);
	}
	
	public Customer getOneCustomer(int id) {
		try {
			Optional<Customer> c = cRepo.findById(id);
			return c.get();
		}catch (Exception e) {
			return null;
		}
	}
}

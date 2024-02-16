package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Customer;
import com.example.demo.services.CustomerService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class CustomerController {
	@Autowired
	CustomerService cService;
	
	@GetMapping("/getCustomer")
	public Customer findByUid(@RequestParam("uid") int uid)
	{
		System.out.println("In getCustomer Controller");
		return cService.findByUid(uid);
	}
	
}

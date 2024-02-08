package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entiies.DummyCustomer;
import com.example.demo.services.DummyCustomerService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class DummyCustomerController {
	@Autowired
	DummyCustomerService dService;
	
	@PostMapping("/saveCustomer")
	public String saveCustomerUser(@RequestBody DummyCustomer dummy) {
		String str = dService.save(dummy);
		System.out.println(str);
		return str;
	}
}

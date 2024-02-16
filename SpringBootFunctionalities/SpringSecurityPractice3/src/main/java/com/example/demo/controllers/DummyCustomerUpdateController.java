package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Customer;
import com.example.demo.entities.DummyUpdateCustomer;
import com.example.demo.services.CustomerService;
import com.example.demo.services.RoleService;
import com.example.demo.services.UserService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class DummyCustomerUpdateController {
	@Autowired
	RoleService rservice;
	@Autowired
	UserService uservice;
	@Autowired
	CustomerService cservice;
	
	@PostMapping("/updateCustomer")
	public String updateCust(@RequestBody DummyUpdateCustomer dummy) {
			System.out.println(dummy);
			System.out.println("edhar to aaa gayaa");
			Customer cust = cservice.getOneCustomer(dummy.getCustomer_id());
			cust.setFname(dummy.getFname());
			cust.setLname(dummy.getLname());
			cust.setEmail(dummy.getEmail());
			cust.setContactno(dummy.getContact());
			cust.setDob(dummy.getDob());
			cust.setHeight(dummy.getHeight());
			cust.setWeight(dummy.getWeight());
			cust.setGender(dummy.getGender());
			cust.setAddress(dummy.getAddress());
			cust.setGoal(dummy.getGoal());
			cservice.save(cust);
			return "success";
	}

}

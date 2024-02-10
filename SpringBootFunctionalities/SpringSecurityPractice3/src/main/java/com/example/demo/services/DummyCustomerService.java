package com.example.demo.services;

import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Customer;
import com.example.demo.entities.DummyCustomer;
import com.example.demo.entities.Role;
import com.example.demo.entities.User;
@Service
public class DummyCustomerService {
	@Autowired
	Customer cust;
	@Autowired
	User user;
	@Autowired
	RoleService rService;
	@Autowired
	CustomerService cService;
	@Autowired
	UserService uService;
	public String save(DummyCustomer dummy) {
		Role r = rService.getOneRole(2);
		User user = new User(dummy.getUsername(), dummy.getPass(),r, 1);
		uService.save(user);
		String username = dummy.getUsername();
		System.out.println("User Saved");
		User u = uService.find(username);
		cust.setFname(dummy.getFname());
		cust.setLname(dummy.getLname());
		cust.setEmail(dummy.getEmail());
		cust.setContactno(dummy.getContact());
		cust.setDob(dummy.getDob());
		cust.setHeight(dummy.getHeight());
		cust.setWeight(dummy.getWeight());
		cust.setGender(dummy.getGender());
		cust.setUser(u);
		cust.setRegistration_date(LocalDate.now());
		cust.setAddress(dummy.getAddress());
		cService.save(cust);
		return "Done";
	}
	
	
}

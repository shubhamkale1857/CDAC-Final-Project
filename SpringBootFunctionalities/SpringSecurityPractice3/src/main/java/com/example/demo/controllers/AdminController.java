package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Admin;
import com.example.demo.services.AdminService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class AdminController {
	@Autowired
	AdminService aservice;
	@GetMapping("/getAdminDetails")
	public Admin getDetails(@RequestParam("uid") int uid) {
		System.out.println("here i am!!!!");
		Admin a = aservice.getAdminDetails(uid);
		return a;
	}
}

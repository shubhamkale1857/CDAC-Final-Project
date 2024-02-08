package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entiies.User;
import com.example.demo.services.UserService;

@RestController
public class UserController {
	@Autowired
	UserService uservice;
	
	@GetMapping("/getusername")
	public User getUser(@RequestParam String uname)
	{
		return uservice.Find(uname);
	}
}

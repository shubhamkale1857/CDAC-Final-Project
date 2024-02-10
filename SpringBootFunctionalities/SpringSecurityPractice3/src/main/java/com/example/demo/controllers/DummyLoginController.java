package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.DummyLogin;
import com.example.demo.entities.User;
import com.example.demo.repositories.UserRepository;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class DummyLoginController {
	
	@Autowired
	UserRepository urepo;
	
	//@PostMapping("/login")
	public String getUser(@RequestBody DummyLogin obj)
	{
		String flag = null;
		User u = urepo.getUser(obj.getUsername(), obj.getPassword());
		if(u!=null)
		{
			flag="success";
		}
		return flag;
	}
		

}

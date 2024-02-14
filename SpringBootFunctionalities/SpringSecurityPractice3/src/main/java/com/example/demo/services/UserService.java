package com.example.demo.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.User;
import com.example.demo.repositories.UserRepository;

@Service
public class UserService {
	@Autowired
	UserRepository urepo;
	
	public User find(String uname)
	{
		return urepo.findByUname(uname);
	}
	public User getOneUser(int id) {
		try {
			Optional<User> u = urepo.findById(id);
			return u.get();
		}catch (Exception e) {
			return null;
		}
	}
	public User save(User u) {
		return urepo.save(u);
	}
}

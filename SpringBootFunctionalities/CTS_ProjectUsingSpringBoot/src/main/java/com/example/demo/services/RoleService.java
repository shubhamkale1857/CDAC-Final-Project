package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entiies.Role;
import com.example.demo.repositories.RoleRepository;
@Service
public class RoleService {
	@Autowired
	RoleRepository repo;
	public Role saveRole(Role role) {
		return repo.save(role);
	}
}

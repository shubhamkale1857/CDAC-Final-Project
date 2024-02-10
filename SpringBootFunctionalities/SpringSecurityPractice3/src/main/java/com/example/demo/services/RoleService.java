package com.example.demo.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.entities.Role;
import com.example.demo.repositories.RoleRepository;
@Service
public class RoleService {
	@Autowired
	RoleRepository repo;
	public Role saveRole(Role role) {
		return repo.save(role);
	}
	
	public Role getOneRole(int id) {
		Optional<Role> r = repo.findById(id);
		try {
			return r.get();
		}catch (Exception e) {
			return null;
		}
	}
}

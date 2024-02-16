package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Category;
import com.example.demo.repositories.CategoryRepository;

@Service
public class CategoryService {
	@Autowired
	CategoryRepository crepo;
	
	public List<Category> getAllCategories(){
		return crepo.findAll();
	}
	
	public Category getOneCategory(int id) {
		try {
			Optional<Category> c = crepo.findById(id);
			return c.get();
		}catch (Exception e) {
			return null;
		}
	}
}

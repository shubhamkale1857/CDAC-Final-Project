package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entities.Fooditem;

public interface FoodItemRepository extends JpaRepository<Fooditem, Integer> {

}

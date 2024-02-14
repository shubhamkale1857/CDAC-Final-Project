package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.DailyMeal;
@Repository
public interface DailyMealRepository extends JpaRepository<DailyMeal, Integer> {

}

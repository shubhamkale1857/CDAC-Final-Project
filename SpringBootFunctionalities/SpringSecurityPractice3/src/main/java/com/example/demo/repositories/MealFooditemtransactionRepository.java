package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Mealfooditemtransaction;
import com.example.demo.entities.MealfooditemtransactionKey;
@Repository
public interface MealFooditemtransactionRepository extends JpaRepository<Mealfooditemtransaction, MealfooditemtransactionKey> {

}

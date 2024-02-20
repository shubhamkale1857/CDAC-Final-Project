package com.example.demo.repositories;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Mealfooditemtransaction;
import com.example.demo.entities.MealfooditemtransactionKey;
@Repository
public interface MealFooditemtransactionRepository extends JpaRepository<Mealfooditemtransaction, MealfooditemtransactionKey> {
	
	@Query("select f.food_name, mf.qty, f.calories, f.protein, m.mealtype from Fooditem f join Mealfooditemtransaction mf on f.food_id = mf.food.food_id join DailyMeal m on mf.meal.meal_id = m.meal_id where m.date = :date and m.customer.customer_id= :custid")
	public Object[] getMealInfo(LocalDate date, int custid);

}

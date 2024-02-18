package com.example.demo.repositories;

import java.time.LocalDate;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.DailyMeal;
@Repository
public interface DailyMealRepository extends JpaRepository<DailyMeal, Integer> {
	
	@Query("select SUM(calories) from DailyMeal d where d.customer.customer_id = :cust_id and d.date= :date GROUP BY d.customer.customer_id")
	public int getTotCal(int cust_id, LocalDate date);
	
	@Query("select SUM(proteins) from DailyMeal d where d.customer.customer_id = :cust_id and d.date= :date GROUP BY d.customer.customer_id")
	public int getTotPro(int cust_id, LocalDate date);

}

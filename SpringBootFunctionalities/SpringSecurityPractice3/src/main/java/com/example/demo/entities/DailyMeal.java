package com.example.demo.entities;

import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
@Entity
@Table(name = "dailymeals")
public class DailyMeal {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int meal_id;
	@ManyToOne
	@JoinColumn(name = "customer_id")
	private Customer customer;
	@Column
	private Date date;
}

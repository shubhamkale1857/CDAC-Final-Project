package com.example.demo.entities;


import java.time.LocalDate;
import java.time.LocalDateTime;

import org.springframework.stereotype.Component;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Getter
@Setter
@NoArgsConstructor
@Entity
@Component
@Table(name = "dailymeals")
public class DailyMeal {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int meal_id;
	@JsonIgnoreProperties
	@ManyToOne
	@JoinColumn(name = "customer_id")
	private Customer customer;
	@Column
	private LocalDateTime date;
	@Column
	private int calories;
	@Column
	private int mealtype;
}

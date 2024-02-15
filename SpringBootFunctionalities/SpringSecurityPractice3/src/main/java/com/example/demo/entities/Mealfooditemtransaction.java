package com.example.demo.entities;

import org.springframework.stereotype.Component;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@Component
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity
@Table(name = "mealfooditemtransaction")
@IdClass(MealfooditemtransactionKey.class)
public class Mealfooditemtransaction {
	@Id
	@JsonIgnoreProperties
	@ManyToOne
	@JoinColumn(name = "food_id")
	private Fooditem food;
	
	@Id
	@JsonIgnoreProperties
	@ManyToOne
	@JoinColumn(name = "meal_id")
	private DailyMeal meal;
	@Column
	private int qty;
}

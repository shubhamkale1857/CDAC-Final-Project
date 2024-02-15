package com.example.demo.entities;

import java.time.LocalDate;

import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@NoArgsConstructor
public class DummyMealTransaction {
	private int food_id;
	private int customer_id;
	private LocalDate date;
	private int calories;
	private int qty;
}

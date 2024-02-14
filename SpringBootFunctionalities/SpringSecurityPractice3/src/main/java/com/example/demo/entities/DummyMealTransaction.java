package com.example.demo.entities;

import java.sql.Date;

import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@NoArgsConstructor
public class DummyMealTransaction {
	private int food_id;
	private int customer_id;
	private Date date;
	private int calories;
	private int qty;
}

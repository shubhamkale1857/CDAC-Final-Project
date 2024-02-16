package com.example.demo.entities;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class DummyFoodItem {
	private int foodid;
	private String fname;
	private String unit;
	private int protein;
	private int calory;
	private int category;
}

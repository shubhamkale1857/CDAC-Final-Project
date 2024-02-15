package com.example.demo.entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Entity
@Table(name="fooditems")
public class Fooditem {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int food_id;
	
	@Column
	private String food_name;
	
	@Column
	private int qty;
	
	@Column
	private String unit;
	
	@Column 
	private int calories;
	
	@Column
	private int protein;
	
	@JsonIgnoreProperties
	@ManyToOne
	@JoinColumn(name="category_id")
	private Category category;
	
}

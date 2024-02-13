package com.example.demo.entities;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@Getter
@Setter
@ToString
@Entity
@Table(name="categories")
public class Category {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int category_id;
	
	@Column
	private String category_name;
	
	@JsonIgnoreProperties("category")
	@OneToMany(mappedBy = "category")
	private List<Fooditem> fooditems;

	public Category(int category_id, String category_name, List<Fooditem> fooditems) {
		super();
		this.category_id = category_id;
		this.category_name = category_name;
		for(Fooditem f : fooditems)
		{
			f.setCategory(this);
		}
		this.fooditems = fooditems;
	}
	
	public void setFooditems(List<Fooditem> fooditems)
	{
		for(Fooditem f : fooditems)
		{
			f.setCategory(this);
		}
		this.fooditems = fooditems;
	}
	
	
	
}

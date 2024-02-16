package com.example.demo.entities;

import java.util.Arrays;
import java.util.List;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class DummyyMealTransaction {
	private List<int[]> list;
	private int uid;
	private int mealtype;
	@Override
	public String toString() {
		for(int i = 0 ; i < list.size() ;i++) {
			System.out.println(Arrays.toString((list.get(i))));
		}
		System.out.println("*******************************");
		return "DummyyMealTransaction [uid=" + uid + "]";
	}
	
}

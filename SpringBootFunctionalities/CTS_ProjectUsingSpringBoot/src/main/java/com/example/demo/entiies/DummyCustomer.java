package com.example.demo.entiies;

import java.sql.Date;

import org.springframework.stereotype.Component;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
@NoArgsConstructor
@Getter
@Setter
@ToString
@Component
public class DummyCustomer {
	private String username;
	private String pass;
	private String name;
	private String email;
	private Date dob;
	private String gender;
	private double height;
	private double weight;
}

package com.example.demo.entities;

import java.sql.Date;
import java.time.LocalDate;

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
	private String fname;
	private String lname;
	private String email;
	private String contact;
	private Date dob;
	private LocalDate regDate;
	private String gender;
	private double height;
	private double weight;
	private String address;
	private String username;
	private String pass;
	private String goal;
}

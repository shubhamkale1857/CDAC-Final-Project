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
	private String fname;
	private String lname;
	private String email;
	private String contactno;
	private Date dob;
	private Date regDate;
	private String gender;
	private double height;
	private double weight;
	private String address;
	private String username;
	private String pass;
}

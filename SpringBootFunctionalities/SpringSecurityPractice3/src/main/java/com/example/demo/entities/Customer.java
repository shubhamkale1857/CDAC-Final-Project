package com.example.demo.entities;


import java.sql.Date;
import java.time.LocalDate;

import org.springframework.stereotype.Component;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
@Getter
@Setter
@NoArgsConstructor
@ToString
@Component
@Entity
@Table(name = "customers")
public class Customer {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int customer_id;
	@JsonIgnoreProperties
	@ManyToOne
	@JoinColumn(name = "trainer")
	private Trainer trainer;
	@Column
	private String fname;
	@Column
	private String lname;
	@Column
	private String email;
	@Column
	private String contactno;
	@JsonFormat(pattern = "yyyy-MM-dd")
	@Column
	private Date dob;
	@Column
	private double height;
	@Column
	private double weight;
	@Column
	private String gender;
	@JsonIgnoreProperties("customer")
	@OneToOne
	@JoinColumn(name = "user_id")
	private User user;
	@JsonFormat(pattern = "yyyy-MM-dd")
	@Column
	private LocalDate registration_date;
	@Column
	private String address;
	@Column
	private String goal;
}

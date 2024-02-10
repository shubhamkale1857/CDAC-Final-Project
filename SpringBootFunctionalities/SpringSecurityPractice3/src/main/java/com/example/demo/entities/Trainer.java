package com.example.demo.entities;

import java.sql.Date;

import org.springframework.stereotype.Component;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
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
@Table(name = "trainers")
public class Trainer {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int trainer_id;
	@Column
	private String fname;
	@Column
	private String lname;
	@Column
	private String email;
	@Column
	private String contactno;
	@Column
	private String specialization;
	@Column
	private int experience;
	@Column
	private Date registration_date;
	@JsonFormat(pattern = "yyyy-MM-dd")
	@Column
	private String address;
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "user_id")
	private User user;
}

package com.example.demo.entiies;

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
@NoArgsConstructor
@Setter
@ToString
@Entity
@Table(name = "users")
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int user_id;
	@Column
	private String username;
	@Column
	private String pass;
	@JsonIgnoreProperties("users")
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "role_id")
	private Role role;
	@Column
	private int active;
	
	@OneToOne(mappedBy = "user",cascade = CascadeType.ALL)
	private Customer customer;
	
	@OneToOne(mappedBy = "user",cascade = CascadeType.ALL)
	private Trainer trainer;
}

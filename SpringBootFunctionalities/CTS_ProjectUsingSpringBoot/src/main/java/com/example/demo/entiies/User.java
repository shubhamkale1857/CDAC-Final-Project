package com.example.demo.entiies;

import org.springframework.stereotype.Component;

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
@Component
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
	
	@ManyToOne
	@JoinColumn(name = "role_id")
	private Role role;
	@Column
	private int active;
	
	public User(String username, String pass, Role role, int active) {
		super();
		this.username = username;
		this.pass = pass;
		this.role = role;
		this.active = active;
	}
	@OneToOne(mappedBy = "user")
	private Customer customer;
	
	@OneToOne(mappedBy = "user")
	private Trainer trainer;
}

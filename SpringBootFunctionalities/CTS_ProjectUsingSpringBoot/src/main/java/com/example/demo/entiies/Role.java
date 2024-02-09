package com.example.demo.entiies;

import java.util.List;

import org.springframework.stereotype.Component;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;


@NoArgsConstructor
@Getter
@Setter
@ToString
@Component
@Entity
@Table(name = "roles")
public class Role {
	@Id
	private int role_id;
	@Column
	private String role_name;
	
	public Role(int role_id, String role_name) {
		super();
		this.role_id = role_id;
		this.role_name = role_name;
	}
}

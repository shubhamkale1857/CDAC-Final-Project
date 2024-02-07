package com.example.demo.entiies;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
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
@Table(name = "roles")
public class Role {
	@Id
	private int role_id;
	@Column
	private String role_name;
	@JsonIgnoreProperties("role")
	@OneToMany(mappedBy = "role",cascade = CascadeType.ALL)
	private List<User> users;
	
	public void setUsers(List<User> users) {
		for(User u : users) {
			u.setRole(this);
		}
		this.users = users;
	}

	public Role(int role_id, String role_name) {
		super();
		this.role_id = role_id;
		this.role_name = role_name;
	}
}
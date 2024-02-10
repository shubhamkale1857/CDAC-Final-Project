package com.example.demo.entities;

import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.stereotype.Service;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter

@Entity
@Table(name="users")
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int id;
	
	@Column(name="username")
	String uid;
	
	@Column(name="password")
	String pwd;
	
	@ManyToOne
	@JoinColumn(name="roles")
	Role role;
	
	@Column(name="active")
	boolean active;

	@Override
	public String toString() {
		return "User [id=" + id + ", uid=" + uid + ", pwd=" + pwd + ", role=" + role + ", active=" + active + "]";
	}

	public User(String uid, String pwd, Role role, boolean active) {
		super();
		this.uid = uid;
		this.pwd = pwd;
		this.role = role;
		this.active = active;
	}

	
	/*public String getRole() {
		// TODO Auto-generated method stub
		return role;
	}*/
	
	

}

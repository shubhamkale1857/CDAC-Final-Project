package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.entiies.User;

public interface UserRepository extends JpaRepository<User, Integer> {

	@Query("select u from User u where u.username=:uname")
	public User findByUname(String uname);
}

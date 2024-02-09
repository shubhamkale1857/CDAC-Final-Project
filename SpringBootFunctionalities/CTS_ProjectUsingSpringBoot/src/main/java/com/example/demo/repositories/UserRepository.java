package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entiies.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

	@Query("select u from User u where u.username=:uname")
	public User findByUname(String uname);
	
	@Query("select u from User u where u.username=:uname and pass=:pwd")
	public User getUser(String uname, String pwd);
}

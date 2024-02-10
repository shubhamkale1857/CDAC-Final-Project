package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.entities.User;

import jakarta.transaction.Transactional;

@Transactional
public interface UserRepository extends JpaRepository<User, Integer> {
	@Query("select u from User u where uid = :uid and pwd =:pwd")
	public User getUser(String uid,String pwd);
	
	@Query("select u from User u where uid = :uid")
	public User getUser(String uid);
	
	@Modifying
	@Query("update User set active = true where id = :id")
	public int approve(int id);
}

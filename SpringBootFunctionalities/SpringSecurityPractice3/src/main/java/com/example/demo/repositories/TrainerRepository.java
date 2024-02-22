package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Trainer;
@Repository
public interface TrainerRepository extends JpaRepository<Trainer, Integer>{
	@Query("select t from Trainer t where t.user.user_id=:id")
	public Trainer getTrainerByUid(int id);	
}

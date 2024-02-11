package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Trainer;
@Repository
public interface TrainerRepository extends JpaRepository<Trainer, Integer>{
	
}

package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.TrainerRequest;
@Repository
public interface TrainerRequestRepository extends JpaRepository<TrainerRequest, Integer> {

}

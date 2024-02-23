package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Consultation;

@Repository
public interface ConsultationRepository extends JpaRepository<Consultation, Integer> {
	
	@Query("select c.script from Consultation c where c.customer_id = :cid and c.trainer_id= :tid order by c.date DESC")
	public List<String> getScript(int cid, int tid); 

}

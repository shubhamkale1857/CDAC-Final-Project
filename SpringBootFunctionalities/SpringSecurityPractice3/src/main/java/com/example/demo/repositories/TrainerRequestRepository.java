package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.TrainerRequest;
@Repository
public interface TrainerRequestRepository extends JpaRepository<TrainerRequest, Integer> {
	
	@Query("select t from TrainerRequest t where t.customer.customer_id = :cid and t.req_status= 1")
	public List<TrainerRequest> getList(int cid);

}

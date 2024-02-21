package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.TrainerRequest;
import com.example.demo.repositories.TrainerRequestRepository;

@Service
public class TrainerRequestService {
	@Autowired
	TrainerRequestRepository trepo;
	public TrainerRequest save(TrainerRequest tr) {
		return trepo.save(tr);
	}
	
	public List<TrainerRequest> getList(int cid){
		return trepo.getList(cid);
	}
}

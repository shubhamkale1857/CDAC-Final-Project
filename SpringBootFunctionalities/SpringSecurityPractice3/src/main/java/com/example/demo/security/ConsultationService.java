package com.example.demo.security;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Consultation;
import com.example.demo.repositories.ConsultationRepository;

@Service
public class ConsultationService {
	@Autowired
	ConsultationRepository cRepo;
	
	public Consultation save(Consultation con)
	{
		return cRepo.save(con);
	}
	
	public List<String> getScripts(int cid, int tid)
	{
		return cRepo.getScript(cid, tid);
	}
	

}

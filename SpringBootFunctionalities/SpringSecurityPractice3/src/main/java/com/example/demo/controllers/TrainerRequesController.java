package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Customer;
import com.example.demo.entities.Trainer;
import com.example.demo.entities.TrainerRequest;
import com.example.demo.services.CustomerService;
import com.example.demo.services.TrainerRequestService;
import com.example.demo.services.TrainerService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class TrainerRequesController {
	@Autowired
	TrainerRequestService tservice;
	@Autowired
	CustomerService cservice;
	@Autowired
	TrainerService ttservice;
	@GetMapping("/SaveTrainerReq")
	public String saveTrainerReq(@RequestParam("tid") int tid,@RequestParam("cid") int cid) {
		System.out.println("Traier id: "+tid+" Customer id: "+cid);
		Customer cust = cservice.findByUid(cid);
		Trainer train = ttservice.getOneCustomer(tid);
		TrainerRequest tr = new TrainerRequest();
		tr.setCustomer(cust);
		tr.setTrainer(train);
		tr.setReq_status(0);
		tservice.save(tr);
		return "Success";
	}
	
	@GetMapping("/getTrainerRequests")
	public List<TrainerRequest> getList(@RequestParam("cid") int cid)
	{
		return tservice.getList(cid);
	}
}

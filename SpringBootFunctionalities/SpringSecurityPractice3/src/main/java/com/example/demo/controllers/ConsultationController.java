package com.example.demo.controllers;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Consultation;
import com.example.demo.services.ConsultationService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ConsultationController {
	@Autowired
	ConsultationService cService;
	
	@PostMapping("/saveCounsultion")
	public String save(@RequestBody Consultation con)
	{
		con.setDate(LocalDate.now());
		cService.save(con);
		return "Success";
	}
	
	@GetMapping("/getScripts")
	public List<String> getScript(@RequestParam("cid") int cid, @RequestParam("tid") int tid)
	{
		return cService.getScripts(cid, tid);
	}
	
	
}

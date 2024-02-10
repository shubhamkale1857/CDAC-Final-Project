package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Doctor;
import com.example.demo.entities.User;
import com.example.demo.repositories.DoctorRepository;

@Service
public class DoctorService {

	@Autowired
	DoctorRepository drepo;
	
	public Doctor saveDoctor(Doctor d)
	{
		Doctor saved = null;
		try
		{
			saved = drepo.save(d);
		}
		catch(Exception e)
		{
			saved = null;
		}
		return saved;
	}
	
	public Doctor getDoctor(User l)
	{
		return drepo.getDoctor(l);
	}
	
	public List<Doctor> getDoctors()
	{
		
		return drepo.getListForApproval();
		
	}
	
	public boolean upload(int id, byte[] data)
	{
		if(drepo.upload(id, data) == 1)
			return true;
		else
			return false;
	}
}

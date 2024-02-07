package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.services.RoleService;

@RestController
public class RoleController {
	@Autowired
	RoleService service;
}

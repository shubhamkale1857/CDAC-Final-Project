package com.example.demo;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import com.example.demo.entiies.Role;
import com.example.demo.entiies.User;
import com.example.demo.services.RoleService;
import com.example.demo.services.UserService;

@SpringBootApplication
public class CtsProjectUsingSpringBootApplication {

	public static void main(String[] args) {
		ApplicationContext	ctx = SpringApplication.run(CtsProjectUsingSpringBootApplication.class, args);
		RoleService rService = ctx.getBean(RoleService.class);
		Role r = rService.getOneRole(2);
		User user = new User("shubhamkale1858","shubh123" ,r, 1);
		UserService uService = ctx.getBean(UserService.class);
		User u = uService.save(user);
		System.out.println(u);
	}
}

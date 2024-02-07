package com.example.demo;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import com.example.demo.entiies.Role;
import com.example.demo.services.RoleService;

@SpringBootApplication
public class CtsProjectUsingSpringBootApplication {

	public static void main(String[] args) {
		ApplicationContext	ctx = SpringApplication.run(CtsProjectUsingSpringBootApplication.class, args);
//		Role role = new Role();
//		role.setRole_id(1);
//		role.setRole_name("Admin");
//		RoleService service = ctx.getBean(RoleService.class);
//		Role r1 = service.saveRole(role);
//		System.out.println(r1);
	}
}

package com.example.demo.controllers;

import java.time.LocalDate;
import java.util.*;
import java.util.stream.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Customer;
import com.example.demo.entities.DummyCustomer;

import com.example.demo.entities.DummyLogin;
import com.example.demo.entities.MessageResponse;
import com.example.demo.entities.Role;
import com.example.demo.entities.User;
import com.example.demo.entities.UserInfoResponse;
import com.example.demo.repositories.UserRepository;
import com.example.demo.security.JwtUtils;
import com.example.demo.security.MyUserDetails;
import com.example.demo.services.CustomerService;

import com.example.demo.services.RoleService;
import com.example.demo.services.UserService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class AuthController {
	
	@Autowired
	Customer cust;
	
	  @Autowired
	  AuthenticationManager authManager;
	  
	  //@Autowired
	  //AuthenticationProvider authenticationProvider;

	  @Autowired
	  UserRepository userRepository;	 

	  @Autowired
	  PasswordEncoder encoder;

	  @Autowired
	  JwtUtils jwtUtils;
	  
	  @Autowired
	  RoleService rservice;
	  
	  @Autowired
	  UserService uservice;
	  
	  @Autowired
	  CustomerService cservice;	  

	  @PostMapping("/login")
	  public ResponseEntity<?> authenticateUser(@RequestBody DummyLogin loginRequest) {

		  System.out.println(loginRequest.getUsername()+" : "+loginRequest.getPassword());
		  
		 //authenticationProvider.au
	    Authentication authentication = authManager.
	        authenticate(new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));
	    SecurityContextHolder.getContext().setAuthentication(authentication);
	    MyUserDetails userDetails = (MyUserDetails) authentication.getPrincipal();
        System.out.println(userDetails);
        
	    /*String jwtCookie = jwtUtils.generateTokenFromUsername(loginRequest.getUsername());
	    System.out.println(jwtCookie);*/
        
        String jwtToken = jwtUtils.generateTokenFromUsername(loginRequest.getUsername());
        
        //ResponseCookie res_cookie = jwtUtils.generateJwtCookie(userDetails);
        //System.out.println(res_cookie.getName()+ " : "+res_cookie.getValue());
	    List<String> roles = userDetails.getAuthorities().stream()
	        .map(item -> item.getAuthority())
	        .collect(Collectors.toList());

	    /*return ResponseEntity.ok().header(HttpHeaders.SET_COOKIE, jwtCookie)
	        .body(new UserInfoResponse(userDetails.getId(),
	                                   userDetails.getUsername(),	                                   
	                                   roles));*/
	    /*return ResponseEntity.ok().header(HttpHeaders.SET_COOKIE, res_cookie.toString())
		        .body(new UserInfoResponse(userDetails.getId(),
		                                   userDetails.getUsername(),	                                   
		                                   roles)); */
	    return ResponseEntity.ok()
	            //.header("Authorization", "Bearer " + jwtToken)
	            .body(new UserInfoResponse(userDetails.getId(),
                        userDetails.getUsername(),	                                   
                        roles,jwtToken));
	  }
	  
	  @PostMapping("/saveCustomer")
	   public Customer regCustomer(@RequestBody DummyCustomer dummy)
	   {
		  System.out.println(dummy);
		  System.out.println("hello in saveCustomer");
		     System.out.println(encoder.encode("Admin@123"));
//		  
//				Role r = rservice.getOneRole(2);		
//				User l = new User(dr.getUsername(), encoder.encode(dr.getPass()), r ,1);
//				User saved = uservice.save(l);
//			
//				
//				System.out.println(saved.getUser_id());
////				System.out.println(dr.getExperience());
//				
//				Customer d = new Customer(dr.getFname(),dr.getLname(), dr.getEmail(), dr.getContact(), dr.getSpecialization(), dr.getExperience(), saved);
//				System.out.println(d.getExperience());
//				return dservice.saveCustomer(d);
				
				Role r = rservice.getOneRole(2);
				User user = new User(dummy.getUsername(), encoder.encode(dummy.getPass()),r, 1);
				uservice.save(user);
				String username = dummy.getUsername();
				System.out.println("User Saved");
				User u = uservice.find(username);
				cust.setFname(dummy.getFname());
				cust.setLname(dummy.getLname());
				cust.setEmail(dummy.getEmail());
				cust.setContactno(dummy.getContact());
				cust.setDob(dummy.getDob());
				cust.setHeight(dummy.getHeight());
				cust.setWeight(dummy.getWeight());
				cust.setGender(dummy.getGender());
				cust.setUser(u);
				cust.setRegistration_date(LocalDate.now());
				cust.setAddress(dummy.getAddress());
				cust.setGoal(dummy.getGoal());
				return cservice.save(cust);
		}
	  
	  
	  

	  /*@PostMapping("/register")
	  public ResponseEntity<?> registerUser(@RequestBody SignupRequest signUpRequest) {
	    	   

	    // Create new user's account
	    User user = new User(signUpRequest.getUsername(),
	                         encoder.encode(signUpRequest.getPassword()),"USER",true);

	   
	    /*if (strRoles == null) {
	      Role userRole = roleRepository.findByName(ERole.ROLE_USER)
	          .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
	      roles.add(userRole);
	    } else {
	      strRoles.forEach(role -> {
	        switch (role) {
	        case "admin":
	          Role adminRole = roleRepository.findByName(ERole.ROLE_ADMIN)
	              .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
	          roles.add(adminRole);

	          break;
	        case "mod":
	          Role modRole = roleRepository.findByName(ERole.ROLE_MODERATOR)
	              .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
	          roles.add(modRole);

	          break;
	        default:
	          Role userRole = roleRepository.findByName(ERole.ROLE_USER)
	              .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
	          roles.add(userRole);
	        }
	      });
	    }

	    user.setRoles(roles); 
	    userRepository.save(user);
	    return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
	  }*/
	  
	 @PostMapping("/signout")
	  public ResponseEntity<?> logoutUser() {
	    ResponseCookie cookie = jwtUtils.getCleanJwtCookie();
	    return ResponseEntity.ok().header(HttpHeaders.SET_COOKIE, cookie.toString())
	        .body(new MessageResponse("You've been signed out!"));
	  }
}

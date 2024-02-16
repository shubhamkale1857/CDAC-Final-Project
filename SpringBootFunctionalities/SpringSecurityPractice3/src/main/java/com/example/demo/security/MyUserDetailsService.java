package com.example.demo.security;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import com.example.demo.repositories.UserRepository;


public class MyUserDetailsService implements UserDetailsService
{
    @Autowired
	UserRepository urepo;
    
    @Autowired
    PasswordEncoder passwordEncoder;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		//System.out.println("in load user");
		//String pwd = ((ServletRequestAttributes)RequestContextHolder.getRequestAttributes()).getRequest().getParameter("password");
		//System.out.println(pwd);
		//String enc_pwd = passwordEncoder.encode(pwd);
		//System.out.println(enc_pwd);
		com.example.demo.entities.User u = urepo.findByUname(username);
		if(u == null)
			throw new UsernameNotFoundException("Could not find user");
				
		return MyUserDetails.build(u);
	}

}

package com.example.demo.security;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;

import com.example.demo.entiies.Role;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class MyUserDetails implements UserDetails {
	
	  private int id;

	  private String username;
	  
	  private String password;
	  
	  private Role role;

	  private List<? extends GrantedAuthority> authorities;
	  
	  private int active;
	  
	  public static MyUserDetails build(com.example.demo.entiies.User user) {
		  	Role r = user.getRole();
			//String [] roles = s.split(",");
			List<SimpleGrantedAuthority> authority = new ArrayList<>(); 
			//for(String role : roles)
			//{
				authority.add(new SimpleGrantedAuthority(r.getRole_name()));
			//}
			
			
			System.out.println(authority);
		   System.out.println(user);
			return new MyUserDetails(user.getUser_id(),user.getUsername(), user.getPass(), authority, user.getActive());
		  }

	@Override
	public boolean isAccountNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isEnabled() {
		// TODO Auto-generated method stub
		return true;
	}
	  
	 public Role getRole()
	 {
		 return role;
	 }
	 

	public MyUserDetails(int user_id, String username2, String pass, List<SimpleGrantedAuthority> authority,int active) {
		this.id = user_id;
		this.username  = username2;
		this.password = pass;
		this.authorities = authority;
		this.active = active;
	}
}

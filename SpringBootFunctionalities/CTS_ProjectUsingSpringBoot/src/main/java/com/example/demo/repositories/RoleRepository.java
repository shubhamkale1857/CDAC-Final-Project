package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entiies.Role;

public interface RoleRepository extends JpaRepository<Role, Integer> {

}

package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entiies.Role;
@Repository
public interface RoleRepository extends JpaRepository<Role, Integer> {

}

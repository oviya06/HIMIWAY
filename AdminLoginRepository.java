package com.ecycle.himiway.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import com.ecycle.himiway.entity.AdminLogin;

@EnableJpaRepositories
@Repository
public interface AdminLoginRepository extends JpaRepository<AdminLogin,Integer> {

	AdminLogin findByUsername(String username);
	Optional<AdminLogin> findOneByUsernameAndPassword(String username,String password);
}

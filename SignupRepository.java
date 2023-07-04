package com.ecycle.himiway.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import com.ecycle.himiway.entity.Signup;

@EnableJpaRepositories
@Repository
public interface SignupRepository extends JpaRepository<Signup,Integer> {

	Signup findByUsername(String username);
	Optional<Signup> findOneByUsernameAndPassword(String username,String password);
	
	//DML update query
	@Modifying
	@Query("update Signup s set s.password=?1 where s.username=?2")
	public int updateSignupByUsername(String password,String username);
}

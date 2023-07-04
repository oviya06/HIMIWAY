package com.ecycle.himiway.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ecycle.himiway.entity.OnetoOne;

public interface OneToOneRepository extends JpaRepository<OnetoOne,Integer>{

}

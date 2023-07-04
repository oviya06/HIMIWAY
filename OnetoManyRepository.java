package com.ecycle.himiway.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ecycle.himiway.entity.OnetoMany;
@Repository
public interface OnetoManyRepository extends JpaRepository<OnetoMany,Integer>{

}

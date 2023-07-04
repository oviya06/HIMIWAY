package com.ecycle.himiway.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecycle.himiway.entity.OnetoMany;
import com.ecycle.himiway.repository.OnetoManyRepository;


@Service
public class OnetoManyService {

	@Autowired
	OnetoManyRepository musRep;
	
	//(1)getall
	public List<OnetoMany> getallDetailsMany()
	{
		return musRep.findAll();
	}
	
	//(2)post
	public OnetoMany postManyUser(OnetoMany m)
	{
		return musRep.save(m);
	}
	
	
	//(3)delete
	public void deleteManyUser(int id)
	{
		 musRep.deleteById(id);
	}
}

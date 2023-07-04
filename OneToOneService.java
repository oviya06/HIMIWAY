package com.ecycle.himiway.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecycle.himiway.entity.OnetoOne;
import com.ecycle.himiway.repository.OneToOneRepository;

@Service
public class OneToOneService {

	@Autowired
	OneToOneRepository oneRep;
	//(1)getall
	public List<OnetoOne> getallDetailsOfCart()
	{
		return oneRep.findAll();
	}
	
	//(2)post
	public OnetoOne postCart(OnetoOne m)
	{
		return oneRep.save(m);
	}
	
	
	//(3)delete
	public void deleteCart(int id)
	{
		oneRep.deleteById(id);
	}

}

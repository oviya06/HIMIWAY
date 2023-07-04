package com.ecycle.himiway.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ecycle.himiway.entity.OnetoMany;
import com.ecycle.himiway.service.OnetoManyService;

import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
public class OnetoManyController {

	
	@Autowired
	OnetoManyService manySer;
	
	
	//(1) getall
	@GetMapping("/getallDetailsMany")
	public List<OnetoMany> getallDetailsMany()
	{
		return manySer.getallDetailsMany();
	}
	
	//(2)post
	@PostMapping(value="/postManyUser")
	public OnetoMany postManyUser(@RequestBody OnetoMany m)
	{
		return manySer.postManyUser(m);
	}

	//(3)delete
	//localhost:8080/deleteMusic/52
	@DeleteMapping("/deleteManyUser/{iid}")
	public void deleteManyUser(@PathVariable("iid") int id)
	{
		manySer.deleteManyUser(id);
	}
}

package com.ecycle.himiway.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ecycle.himiway.entity.OnetoOne;
import com.ecycle.himiway.service.OneToOneService;

import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
public class OneToOneController {

	@Autowired
	OneToOneService oneSer;
	
	
	//(1) getall
	//localhost:8080/getallDetails
	@GetMapping("/getallDetailsOfCart")
	public List<OnetoOne> getallDetailsOfCart()
	{
		return oneSer.getallDetailsOfCart();
	}
	
	//(2)post
	@PostMapping(value="/postCart")
	public OnetoOne postCart(@RequestBody OnetoOne m)
	{
		return oneSer.postCart(m);
	}

	//(3)delete
	//localhost:8080/deleteMusic/52
	@DeleteMapping("/deleteCart/{iid}")
	public void deleteCart(@PathVariable("iid") int id)
	{
		oneSer.deleteCart(id);
	}
	
}

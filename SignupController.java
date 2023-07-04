package com.ecycle.himiway.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ecycle.himiway.entity.Login;
import com.ecycle.himiway.entity.Signup;
import com.ecycle.himiway.message.LoginMessage;
import com.ecycle.himiway.service.SignupService;



@RestController
@CrossOrigin("http://localhost:3000")
public class SignupController {

	@Autowired
	SignupService signupSer;
	
	//(1)getAll
	@GetMapping(value="/getAllSignupDetails")
	public List<Signup> getAllSignupDetails()
	{
		List<Signup> signupList = signupSer.getAllSignupDetails();
		return signupList;
	}

	//(2)post
	@PostMapping(value="/postSaveSignupDetails")
	public String postSaveSignupDetails(@RequestBody Signup s)
	{
		return signupSer.postSaveSignupDetails(s);
	}

	//(3)put
	@PutMapping(value="/putSignupDetails/{sno}")
	public Signup putSignupDetails(@RequestBody Signup s,@PathVariable int sno)
	{
		return signupSer.putSignupDetails(s,sno);
	}

	//(4)delete
	@DeleteMapping(value="/deleteSignupDetails/{sno}")
	public void deleteSignupDetails(@PathVariable int sno)
	{
		signupSer.deleteSignupDetails(sno);
	}

	//(5)getById
	@GetMapping(value="/getIdSignupDetails/{sno}")
	public Signup getIdSignupDetails(@PathVariable int sno)
	{
		return signupSer.getIdSignupDetails(sno);
	}
	
	//(6)check validation
	@PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody Login loginDTO)
    {
   	 LoginMessage loginMessage=signupSer.userLogin(loginDTO);
   	 
   	 return ResponseEntity.ok(loginMessage);
    }
	
	//(18) DML update query
	@PutMapping("/updateSignupByUsername/{password}/{username}")
	public String updateSignupByUsername(@PathVariable String password,@PathVariable String username)
	{
		int result = signupSer.updateSignupByUsername(password,username);
		if(result>0)
			return "updated";
		else
			return "not updated";
	}
	
	
}

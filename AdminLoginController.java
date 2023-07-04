package com.ecycle.himiway.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ecycle.himiway.entity.AdminLogin;
import com.ecycle.himiway.message.LoginMessage;
import com.ecycle.himiway.service.AdminLoginService;

@RestController
@CrossOrigin("http://localhost:3000")
public class AdminLoginController {

	@Autowired
	AdminLoginService adminSer;
	
	//(1)getAll
	//localhost:8080/getAllSignupDetails
	@GetMapping(value="/getAllAdminDetails")
	public List<AdminLogin> getAllAdminDetails()
	{
		List<AdminLogin> signupList = adminSer.getAllAdminDetails();
		return signupList;
	}
	
	//(2)check validation
	@PostMapping("/adminlogin")
    public ResponseEntity<?> loginAsAdmin(@RequestBody AdminLogin adminlog)
    {
   	 LoginMessage loginMessage=adminSer.loginAsAdmin(adminlog);
   	 
   	 return ResponseEntity.ok(loginMessage);
    }
	
	//(3)post
	//localhost:8080/postSaveAdminDetails
	@PostMapping(value="/postSaveAdminDetails")
	public String postSaveAdminDetails(@RequestBody AdminLogin s)
	{
		return adminSer.postSaveAdminDetails(s);
	}
}

package com.ecycle.himiway.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecycle.himiway.entity.Login;
import com.ecycle.himiway.entity.Signup;
import com.ecycle.himiway.interfaces.SignupInterface;
import com.ecycle.himiway.message.LoginMessage;
import com.ecycle.himiway.repository.SignupRepository;

import jakarta.transaction.Transactional;


@Service
public class SignupService implements SignupInterface {

	@Autowired
	SignupRepository signupRep;
	
	
	//(1)getall
	@Override
	public List<Signup> getAllSignupDetails()
	{
		List<Signup> signupList=signupRep.findAll();
		return signupList;
	}
	
	//(2)post--
	@Override
	public String postSaveSignupDetails(Signup s)
	{
		Signup himi = new Signup(s.getSno(),s.getEmailid(),s.getUsername(),s.getMobileno(),s.getAddress(),s.getPassword());
		
		signupRep.save(s);
		
		return "Details got Posted";
	}
	
	//(3)put 
	@Override
	public Signup putSignupDetails(Signup s,int sno) {
		
		Optional<Signup> optional = signupRep.findById(sno);
		
		Signup obj = null;
		
		if(optional.isPresent())
		{
			obj=optional.get();
			signupRep.save(s);
		}
		
		return obj;
	}
	
	//(4)delete---
	@Override
	public void deleteSignupDetails(int sno)
	{
		signupRep.deleteById(sno);
	}
	
	//(5)getById
	@Override
	public Signup getIdSignupDetails(int sno)
	{
		  return signupRep.findById(sno).get();

	}
	
	//(6)check validation 
	 @Override
	    public LoginMessage  userLogin(Login log) {
	    	
	       
	        Signup user1 = signupRep.findByUsername(log.getUsername());
	        
	        if (user1 != null) {
	        	
	            String password = log.getPassword();
	    
	            if (password.equals(password)) {
	            	
	                Optional<Signup> user = signupRep.findOneByUsernameAndPassword(log.getUsername(), password);
	                
	                if (user.isPresent()) {
	                	
	                    return new LoginMessage("Login Success", true);
	                    
	                } 
	                else {
	                	
	                    return new LoginMessage("Password not match", false);
	                }
	            } 
	            else {
	 
	                return new LoginMessage("Email not exist", false);
	            }
	        }
	        else {
	        	
	            return new LoginMessage("plz,check your email and password", false);
	        }
	 }
	 
	// DML update query
	 @Transactional
	 public int updateSignupByUsername(String username,String password){
	 	return signupRep.updateSignupByUsername(username,password);
	 }
	 
	   
	 
}

package com.ecycle.himiway.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecycle.himiway.entity.AdminLogin;
import com.ecycle.himiway.interfaces.AdminLoginInterface;
import com.ecycle.himiway.message.LoginMessage;
import com.ecycle.himiway.repository.AdminLoginRepository;

@Service
public class AdminLoginService implements AdminLoginInterface {

	@Autowired
	AdminLoginRepository adminRep;
	
	//(1)getall
	@Override
	public List<AdminLogin> getAllAdminDetails()
	{
		List<AdminLogin> signupList=adminRep.findAll();
		return signupList;
	}
	
	//(2)check validation 
	 @Override
	    public LoginMessage  loginAsAdmin(AdminLogin log) {
	    	
	       
	        AdminLogin asadmin = adminRep.findByUsername(log.getUsername());
	        
	        if (asadmin != null) {
	        	
	            String password = log.getPassword();
	    
	            if (password.equals(password)) {
	            	
	                Optional<AdminLogin> admin = adminRep.findOneByUsernameAndPassword(log.getUsername(), password);
	                
	                if (admin.isPresent()) {
	                	
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
	 
		//(3)post--
		@Override
		public String postSaveAdminDetails(AdminLogin s)
		{
			adminRep.save(s);
			return "Details got Posted";
		}
}

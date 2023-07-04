package com.ecycle.himiway.interfaces;

import java.util.List;

import com.ecycle.himiway.entity.Login;
import com.ecycle.himiway.entity.Signup;
import com.ecycle.himiway.message.LoginMessage;

public interface SignupInterface {

	public List<Signup> getAllSignupDetails();
	public String postSaveSignupDetails(Signup s);
	public Signup putSignupDetails(Signup s,int sno);
	public void deleteSignupDetails(int sno);
	public Signup getIdSignupDetails(int sno);
	 public LoginMessage  userLogin(Login log);
	
}

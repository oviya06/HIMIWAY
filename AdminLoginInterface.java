package com.ecycle.himiway.interfaces;

import java.util.List;

import com.ecycle.himiway.entity.AdminLogin;
import com.ecycle.himiway.message.LoginMessage;

public interface AdminLoginInterface {

	public List<AdminLogin> getAllAdminDetails();
    public LoginMessage  loginAsAdmin(AdminLogin log);
    public String postSaveAdminDetails(AdminLogin s);
}

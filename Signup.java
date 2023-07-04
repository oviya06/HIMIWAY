package com.ecycle.himiway.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Signup {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int sno;
	@Column(unique=true)
	private String emailid;
	@Column(unique=true)
	private String username;
	private String mobileno;
	private String address;
	private String password;
	
	public Signup() {
		super();
	}

	public Signup(int sno, String emailid, String username, String mobileno, String address, String password) {
		super();
		this.sno = sno;
		this.emailid = emailid;
		this.username = username;
		this.mobileno = mobileno;
		this.address = address;
		this.password = password;
	}

	@Override
	public String toString() {
		return "Signup [sno=" + sno + ", emailid=" + emailid + ", username=" + username + ", mobileno=" + mobileno
				+ ", address=" + address + ", password=" + password + "]";
	}

	public int getSno() {
		return sno;
	}

	public void setSno(int sno) {
		this.sno = sno;
	}

	public String getEmailid() {
		return emailid;
	}

	public void setEmailid(String emailid) {
		this.emailid = emailid;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getMobileno() {
		return mobileno;
	}

	public void setMobileno(String mobileno) {
		this.mobileno = mobileno;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
	
}

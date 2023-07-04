package com.ecycle.himiway.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
@Entity
public class JoinMany {
	@Id
	private int id;
	private String username;
	private String email;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}

	
}

package com.ecycle.himiway.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class JoinOne {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String names;
	private String colors;
	private String totalprices;
	private String shippings;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getNames() {
		return names;
	}
	public void setNames(String names) {
		this.names = names;
	}
	public String getColors() {
		return colors;
	}
	public void setColors(String colors) {
		this.colors = colors;
	}
	public String getTotalprices() {
		return totalprices;
	}
	public void setTotalprices(String totalprices) {
		this.totalprices = totalprices;
	}
	public String getShippings() {
		return shippings;
	}
	public void setShippings(String shippings) {
		this.shippings = shippings;
	}
	
	
}

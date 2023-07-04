package com.ecycle.himiway.entity;

import java.util.List;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;

@Entity
public class OnetoMany {

	@Id
	private int id;
	private String titless;
	private String pricess;
	private String shippingss;
	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name="cycles_id")
	private List<JoinMany> many;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getTitless() {
		return titless;
	}
	public void setTitless(String titless) {
		this.titless = titless;
	}
	public String getPricess() {
		return pricess;
	}
	public void setPricess(String pricess) {
		this.pricess = pricess;
	}
	public String getShippingss() {
		return shippingss;
	}
	public void setShippingss(String shippingss) {
		this.shippingss = shippingss;
	}
	public List<JoinMany> getMany() {
		return many;
	}
	public void setMany(List<JoinMany> many) {
		this.many = many;
	}
	
	
}

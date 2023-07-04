package com.ecycle.himiway.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class PostCycle {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int sno;
	private String title;
	private String price;
	private String color;
	private String shipping;
	private String img;
	
	public PostCycle() {
		super();
	}
	
	public PostCycle(int sno, String title, String price, String color, String shipping, String img) {
		super();
		this.sno = sno;
		this.title = title;
		this.price = price;
		this.color = color;
		this.shipping = shipping;
		this.img = img;
	}

	@Override
	public String toString() {
		return "PostCycle [sno=" + sno + ", title=" + title + ", price=" + price + ", color=" + color + ", shipping="
				+ shipping + ", img=" + img + "]";
	}

	public int getSno() {
		return sno;
	}

	public void setSno(int sno) {
		this.sno = sno;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getPrice() {
		return price;
	}

	public void setPrice(String price) {
		this.price = price;
	}

	public String getColor() {
		return color;
	}

	public void setColor(String color) {
		this.color = color;
	}

	public String getShipping() {
		return shipping;
	}

	public void setShipping(String shipping) {
		this.shipping = shipping;
	}

	public String getImg() {
		return img;
	}

	public void setImg(String img) {
		this.img = img;
	}



	
}

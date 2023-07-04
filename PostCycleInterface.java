package com.ecycle.himiway.interfaces;

import java.util.List;

import org.springframework.data.domain.Page;

import com.ecycle.himiway.entity.PostCycle;

public interface PostCycleInterface {

	public List<PostCycle> getAllCycleDetails();
	public String postSaveCycleDetails(PostCycle s);
	public PostCycle putCycleDetails(PostCycle s,int sno);
	public void deleteCycleDetails(int sno);
	
	
	
	public PostCycle getIdCycle(int id);
	public List<PostCycle> sortCycleAsc(String field);
	public List<PostCycle> sortCycleDesc(String field);
	public List<PostCycle> listCycle(int offset,int pageSize);
	public Page<PostCycle> pagingCycle(int offset,int pageSize);
	public List<PostCycle> sortListCycle(int offset,int pageSize,String field);
	public Page<PostCycle> sortPagingCycle(int offset,int pageSize,String field);
	public List<PostCycle> fetchCycleByNamePrefix(String prefix);
	public List<PostCycle> fetchCycleByNameSuffix(String suffix);
	public List<PostCycle> fetchCycleByColor(String color);
	public List<PostCycle> getPositional(String color,String title);
	public List<PostCycle> getNamedParameter(String color);
	public int deleteByTitle(String title);
	public int updateByTitle(String color,String title);
	
	public List<PostCycle> nativessQuery();
	
}

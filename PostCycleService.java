package com.ecycle.himiway.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Service;

import com.ecycle.himiway.entity.PostCycle;
import com.ecycle.himiway.interfaces.PostCycleInterface;
import com.ecycle.himiway.repository.PostCycleRepository;

import jakarta.transaction.Transactional;
@Service
public class PostCycleService implements PostCycleInterface{
	
	@Autowired
	PostCycleRepository postcycleRep;
	
	//(1)getall
	@Override
	public List<PostCycle> getAllCycleDetails()
	{
		List<PostCycle> signupList=postcycleRep.findAll();
		return signupList;
	}
	
	//(2)post--
	@Override
	public String postSaveCycleDetails(PostCycle s)
	{
		PostCycle himi = new PostCycle(s.getSno(),s.getTitle(),s.getPrice(),s.getColor(),s.getShipping(),s.getImg());
		
		postcycleRep.save(s);
		
		return "Details got Posted";
	}
	
	//(3)put 
	@Override
	public PostCycle putCycleDetails(PostCycle s,int sno) {
		
		Optional<PostCycle> optional = postcycleRep.findById(sno);
		
		PostCycle obj = null;
		
		if(optional.isPresent())
		{
			obj=optional.get();
			postcycleRep.save(s);
		}
		
		return obj;
	}
	
	//(4)delete---
	@Override
	public void deleteCycleDetails(int sno)
	{
		postcycleRep.deleteById(sno);
	}

	//(6)getById
	@Override
	public PostCycle getIdCycle(int id)
	{
		  return postcycleRep.findById(id).get();

	}

	//(7)Sorting - ASC
	@Override
	public List<PostCycle> sortCycleAsc(String field)
	{
		return postcycleRep.findAll(Sort.by(field));
	}

	//(8)Sorting - DESC
	@Override
	public List<PostCycle> sortCycleDesc(String field)
	{
		return postcycleRep.findAll(Sort.by(Direction.DESC,field));
	}

	//(9)Pagination - (list)
	@Override
	public List<PostCycle> listCycle(int offset,int pageSize)
	{
		Pageable paging = PageRequest.of(offset,pageSize);
		Page<PostCycle> studData=postcycleRep.findAll(paging);
		List<PostCycle> studList = studData.getContent() ;
		return studList;
		
	}

	//(10)Pagination - (page-(content,pageable))
	@Override
	public Page<PostCycle> pagingCycle(int offset,int pageSize)
	{
		Pageable paging = PageRequest.of(offset,pageSize);
		Page<PostCycle> cycData=postcycleRep.findAll(paging);
		//List<Student> studList = studData.getContent() ;
		return cycData;
		
	}

	//(11)Pagination - (list-sorting)
	@Override
	public List<PostCycle> sortListCycle(int offset,int pageSize,String field)
	{
		Pageable paging = PageRequest.of(offset,pageSize).withSort(Sort.by(field));
		Page<PostCycle> cycData=postcycleRep.findAll(paging);
		List<PostCycle> cycList = cycData.getContent() ;
		return cycList;
		
	}

	//(12)Pagination - (page-sorting)
	@Override
	public Page<PostCycle> sortPagingCycle(int offset,int pageSize,String field)
	{
		Pageable paging = PageRequest.of(offset,pageSize).withSort(Sort.by(field));
		Page<PostCycle> cycData=postcycleRep.findAll(paging);
		//List<Student> studList = studData.getContent() ;
		return cycData;
		
	}

	//(13) name StartWith
	@Override
	public List<PostCycle> fetchCycleByNamePrefix(String prefix)
	{
		return postcycleRep.findByTitleStartingWith(prefix);
	}

	//(14) name EndingWith
	@Override
	public List<PostCycle> fetchCycleByNameSuffix(String suffix)
	{
		return postcycleRep.findByTitleEndingWith(suffix);
	}

	//(15) search with color
	@Override
	public List<PostCycle> fetchCycleByColor(String color)
	{
		return postcycleRep.findByColor(color);
	}

	//(16) positional parameter
	@Override
	public List<PostCycle> getPositional(String color,String title)
	{
		return postcycleRep.fetchPositional(color,title);
	}

	//(17) named parameter
	@Override
	public List<PostCycle> getNamedParameter(String color){
		return postcycleRep.fetchNamedParameter(color);
	}

	//(18) DML delete query
	@Override
	@Transactional
	public int deleteByTitle(String title){
		return postcycleRep.deleteCycleByTitle(title);
	}

	//(19) DML update query
	@Override
	@Transactional
	public int updateByTitle(String color,String title){
		return postcycleRep.updateCycleByTitle(color,title);
	}
	
	//native Query
	@Override
	public List<PostCycle> nativessQuery(){
		return postcycleRep.fetchPostCycleByColor();
	}

}

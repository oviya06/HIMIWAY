package com.ecycle.himiway.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ecycle.himiway.entity.PostCycle;
import com.ecycle.himiway.service.PostCycleService;
import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
@CrossOrigin("*")
public class PostCycleController {

	@Autowired 
	PostCycleService postcycleSer;
	
		//(1)getAll
		@Tag(name="Get",description="get details")
		@GetMapping(value="/getAllCycleDetails")
		public List<PostCycle> getAllCycleDetails()
		{
			List<PostCycle> signupList = postcycleSer.getAllCycleDetails();
			return signupList;
		}

		//(2)post
		@PostMapping(value="/postSaveCycleDetails")
		public String postSaveCycleDetails(@RequestBody PostCycle s)
		{
			return postcycleSer.postSaveCycleDetails(s);
		}

		//(3)put
		@PutMapping(value="/putCycleDetails/{sno}")
		public PostCycle putCycleDetails(@RequestBody PostCycle s,@PathVariable int sno)
		{
			return postcycleSer.putCycleDetails(s,sno);
		}

		//(4)delete
		@DeleteMapping(value="/deleteCycleDetails/{sno}")
		public void deleteCycleDetails(@PathVariable int sno)
		{
			postcycleSer.deleteCycleDetails(sno);
		}
		
		//(6)getById

		@GetMapping(value="/fetchIdCycle/{sno}")
		public PostCycle getIdCycle(@PathVariable int sno)
		{
			return postcycleSer.getIdCycle(sno);
		}

		//(7)sorting - ASC
		@GetMapping("/sortCycleAsc/{field}")
		public List<PostCycle> sortCycleAsc(@PathVariable String field )
		{
			return postcycleSer.sortCycleAsc(field);
		}

		//(8)sorting - DESC
		@GetMapping("/sortCycleDesc/{field}")
		public List<PostCycle> sortCycleDesc(@PathVariable String field )
		{
			return postcycleSer.sortCycleDesc(field);
		}

		//(9)Pagination - (list)
		@GetMapping("/listCycle/{offset}/{pageSize}")
		public List<PostCycle> listCycle(@PathVariable int offset,@PathVariable int pageSize )
		{
			return postcycleSer.listCycle(offset,pageSize);
		}

		//(10)Pagination - (page-(content,pageable))	
		@GetMapping("/pagingCycle/{offset}/{pageSize}")
		public Page<PostCycle>  pagingCycle(@PathVariable int offset,@PathVariable int pageSize )
		{
			return postcycleSer.pagingCycle(offset,pageSize);
		}

		//(11)Pagination - (list-sorting)
		@GetMapping("/sortListCycle/{offset}/{pageSize}/{field}")
		public List<PostCycle> sortListCycle(@PathVariable int offset,@PathVariable int pageSize ,@PathVariable String field)
		{
			return postcycleSer.sortListCycle(offset,pageSize,field);
		}

		//(12)Pagination - (page-sorting)
		@GetMapping("/sortPagingCycle/{offset}/{pageSize}/{field}")
		public Page<PostCycle> sortPagingCycle(@PathVariable int offset,@PathVariable int pageSize ,@PathVariable String field)
		{
			return postcycleSer.sortPagingCycle(offset,pageSize,field);
		}

		//(13) name StartWith
		@GetMapping("/fetchCycleByNamePrefix")
		public List<PostCycle> fetchCycleByNamePrefix(@RequestParam String prefix)
		{
			return postcycleSer.fetchCycleByNamePrefix(prefix);
		}

		//(14) name EndingWith
		@GetMapping("/fetchCycleByNameSuffix")
		public List<PostCycle> fetchCycleByNameSuffix(@RequestParam String suffix)
		{
			return postcycleSer.fetchCycleByNameSuffix(suffix);
		}

		//(15) search with color
		@GetMapping("/fetchCycleByColor")
		public List<PostCycle> fetchCycleByColor(@RequestParam String color)
		{
			return postcycleSer.fetchCycleByColor(color);
		}

		//(16) positional parameter
		@Tag(name="Get",description="positional parameter")
		@GetMapping("/getPositional/{color}/{title}")
		public List<PostCycle> getPositional(@PathVariable String color,@PathVariable String title){
			return postcycleSer.getPositional(color,title);
		}

		//(17) named parameter
		@GetMapping("/getNamedParameter/{color}")
		public List<PostCycle> getNamedParameter(@PathVariable String color){
			return postcycleSer.getNamedParameter(color);
		}

		//(18) DML delete query
		@DeleteMapping("/deleteByTitle/{title}")
		public String deleteByTitle(@PathVariable String title)
		{
			int result = postcycleSer.deleteByTitle(title);
			if(result>0)
				return "Student record deleted";
			else
				return "Problem occured while deleting";
		}

		//(19) DML update query
		@PutMapping("/updateByName/{color}/{title}")
		public String updateByTitle(@PathVariable String color,@PathVariable String title)
		{
			int result = postcycleSer.updateByTitle(color,title);
			if(result>0)
				return "updated";
			else
				return "not updated";
		}
		
		//nativeQuery
		@GetMapping("/nativequery")
		public List<PostCycle> nativessQuery(){
			return postcycleSer.nativessQuery();
		}

}

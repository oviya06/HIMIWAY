package com.ecycle.himiway.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import com.ecycle.himiway.entity.PostCycle;

@EnableJpaRepositories
@Repository
public interface PostCycleRepository extends JpaRepository<PostCycle,Integer> {

	public List<PostCycle>findByTitleStartingWith(String prefix);
	public List<PostCycle>findByTitleEndingWith(String suffix);
	public List<PostCycle>findByColor(String color);
	
	//positional parameter
	@Query("select s from PostCycle s where s.color=?1 and s.title=?2")
	public List<PostCycle> fetchPositional(String color,String title);
	
	//(17)named parameter
	@Query("select s from PostCycle s where s.color=:color")
	public List<PostCycle> fetchNamedParameter(String color);
	
	//(18)DML delete query
	@Modifying
	@Query("delete from PostCycle s where s.title=?1")
	public int deleteCycleByTitle(String title);
	
	
	//(19)DML update query
	@Modifying
	@Query("update PostCycle s set s.color=?1 where s.title=?2")
	public int updateCycleByTitle(String color,String title);
	
	//native Query
	@Query(value="select * from post_cycle ",nativeQuery=true)
	public List<PostCycle> fetchPostCycleByColor();
}

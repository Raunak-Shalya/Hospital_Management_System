package com.example.backend.demo.repository;


import java.util.List;

import com.example.backend.demo.entities.Hospital;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;



@Repository
public interface HospitalRepo  extends JpaRepository<Hospital, Long>{
   
	public List<Hospital> findByhospitalName(String name);
	
	@Query("SELECT h FROM Hospital h WHERE LOWER(h.hospitalName) LIKE CONCAT(LOWER(:query), '%')")
	List<Hospital> findByNameStartsWith(@Param("query") String query);
	
	@Query("SELECT h FROM Hospital h WHERE CAST(h.id AS String) LIKE CONCAT(:query, '%')")
	List<Hospital> findByIDStartsWith(@Param("query") String query);
}
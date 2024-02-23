package com.hospital.management.system.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.hospital.management.system.entity.Hospital;


@Repository
public interface HospitalRepo  extends JpaRepository<Hospital, Long>{
   
	public List<Hospital> findByhospitalName(String name);
	
	@Query("SELECT h FROM Hospital h WHERE LOWER(h.hospitalName) LIKE CONCAT(LOWER(:query), '%')")
	List<Hospital> findByNameStartsWith(@Param("query") String query);
	
	@Query("SELECT h FROM Hospital h WHERE CAST(h.id AS String) LIKE CONCAT(:query, '%')")
	List<Hospital> findByIDStartsWith(@Param("query") String query);
}
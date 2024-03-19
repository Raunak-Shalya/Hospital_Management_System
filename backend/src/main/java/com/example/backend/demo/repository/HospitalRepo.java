package com.example.backend.demo.repository;


import java.util.List;

import com.example.backend.demo.entities.Hospital;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Page;




@Repository
public interface HospitalRepo  extends JpaRepository<Hospital, Long>{
   
	public List<Hospital> findByhospitalName(String name);
	
	@Query("SELECT h FROM Hospital h WHERE LOWER(h.hospitalName) LIKE CONCAT(LOWER(:query), '%')")
	List<Hospital> findByNameStartsWith(@Param("query") String query);
	
	@Query("SELECT h FROM Hospital h WHERE CAST(h.id AS String) LIKE CONCAT(:query, '%')")
	List<Hospital> findByIDStartsWith(@Param("query") String query);



	//Searching Calls
	@Query("SELECT h FROM Hospital h WHERE CAST(h.id AS String) LIKE CONCAT(LOWER(:query), '%')")
	Page<Hospital>findByHospitalId(@Param("query") String query,Pageable pageable);
	@Query("SELECT h FROM Hospital h WHERE LOWER(h.hospitalName) LIKE CONCAT(LOWER(:query), '%')")
	Page<Hospital> findByHospitalName(@Param("query") String query,Pageable pageable);
	@Query("SELECT h FROM Hospital h WHERE LOWER(h.hospitalAddress) LIKE CONCAT(LOWER(:query), '%')")
	Page<Hospital> findByHospitalAddress(@Param("query") String query,Pageable pageable);
	@Query("SELECT h FROM Hospital h WHERE LOWER(h.name1) LIKE CONCAT(LOWER(:query), '%')")
	Page<Hospital> findByHospitalName1(@Param("query") String query,Pageable pageable);
	@Query("SELECT h FROM Hospital h WHERE LOWER(h.name2) LIKE CONCAT(LOWER(:query), '%')")
	Page<Hospital> findByHospitalName2(@Param("query") String query,Pageable pageable);

}
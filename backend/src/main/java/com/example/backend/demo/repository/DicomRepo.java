package com.example.backend.demo.repository;

import java.util.List;

import com.example.backend.demo.entities.Dicom;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;



public interface DicomRepo extends JpaRepository<Dicom, Integer> {

	   @Query
	    List<Dicom> findByHospitalId(@Param("hospital_id") int hospital_id);
	}
package com.hospital.management.system.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.hospital.management.system.entity.Dicom;

public interface DicomRepo extends JpaRepository<Dicom, Integer> {

	   @Query
	    List<Dicom> findByHospitalId(@Param("hospital_id") int hospital_id);
	}
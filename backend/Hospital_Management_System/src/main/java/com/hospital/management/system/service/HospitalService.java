package com.hospital.management.system.service;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.hospital.management.system.entity.Hospital;
import com.hospital.management.system.repository.HospitalRepo;



@Service
public class HospitalService {

	@Autowired
	private HospitalRepo hospitalRepo;

	public HospitalService(HospitalRepo hospitalRepo) {
		this.hospitalRepo = hospitalRepo;
	}


	public Hospital addHospital(Hospital e) {
		System.out.println(e);
		this.hospitalRepo.save(e);
		return e;
	}
	

	public List<Hospital> getAllHospital() {
		return hospitalRepo.findAll();
	}

	public Hospital getHospitalById(long id) {
		System.out.print(id);
		Optional<Hospital> e = hospitalRepo.findById(id);
		return e.orElse(null);
	}

	public void deleteHospital(long id) {
		hospitalRepo.deleteById(id);
	}
	
	public Hospital updateHospital(Hospital hospital) {
	    return hospitalRepo.save(hospital);
	}

	public Page<Hospital> getHospitalByPaginate(int currentPage, int size) {
		Pageable p = PageRequest.of(currentPage, size);
		return hospitalRepo.findAll(p);
	}
	
}
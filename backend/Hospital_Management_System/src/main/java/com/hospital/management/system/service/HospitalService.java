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
	private HospitalRepo repo;
	
	
	public Hospital addHospital(Hospital e) {
		repo.save(e);
		return e;
	}
	

	public List<Hospital> getAllHospital() {
		return repo.findAll();
	}

	public Hospital getHospitalById(int id) {
		System.out.print(id);
		Optional<Hospital> e = repo.findById(id);
		if (e.isPresent()) {
			return e.get();
		}
		return null;
	}

	public void deleteHospital(int id) {
		repo.deleteById(id);
	}
	
	public Hospital updateHospital(Hospital hospital) {
	    return repo.save(hospital); 
	}

	public Page<Hospital> getHospitalByPaginate(int currentPage, int size) {
		Pageable p = PageRequest.of(currentPage, size);
		return repo.findAll(p);
	}
	
}
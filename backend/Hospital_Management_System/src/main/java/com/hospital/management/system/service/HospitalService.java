package com.hospital.management.system.service;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
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
		this.hospitalRepo.save(e);
		return e;
	}
	

	public List<Hospital> getAllHospital() {
		return hospitalRepo.findAll();
	}

	public Hospital getHospitalById(long id) {
		Optional<Hospital> e = hospitalRepo.findById(id);
		return e.orElse(null);
	}

	public void deleteHospital(long id) {
		hospitalRepo.deleteById(id);
	}
	
	public Hospital updateHospital(Hospital hospital,long id) throws Exception {
		Hospital existingHospital = hospitalRepo.findById(id).orElse(null); // Check if hospital exists

	    if (existingHospital == null) {
	        throw new Exception("Hospital with ID " + id + " not found");
	    }

	    // Update fields selectively (avoid overwriting all fields)
	    existingHospital.setHospitalName(hospital.getHospitalName());
	    existingHospital.setHospitalAddress(hospital.getHospitalAddress());
	    existingHospital.setName1(hospital.getName1());
	    existingHospital.setEmail1(hospital.getEmail1());
	    existingHospital.setContactNo1(hospital.getContactNo1());
	    existingHospital.setName2(hospital.getName2());
	    existingHospital.setEmail2(hospital.getEmail2());
	    existingHospital.setContactNo2(hospital.getContactNo2());

	    return hospitalRepo.save(existingHospital);
	}
	
	public List<Hospital> findAllHospitalSortedByNameAsc(){
		return hospitalRepo.findAll(Sort.by(Sort.Direction.ASC, "hospitalName"));
	}
	
	public List<Hospital> findAllHospitalSortedByNameId(){
		return hospitalRepo.findAll(Sort.by(Sort.Direction.ASC, "Id"));
	}


	public List<Hospital> searchHospital(String query) {
		List<Hospital> val = hospitalRepo.findByNameStartsWith(query);
		return val;
	}
	
}
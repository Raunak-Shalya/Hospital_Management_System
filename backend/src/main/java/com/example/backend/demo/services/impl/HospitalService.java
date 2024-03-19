package com.example.backend.demo.services.impl;


import java.util.List;
import java.util.Optional;

import com.example.backend.demo.entities.Hospital;
import com.example.backend.demo.repository.HospitalRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;




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


	public List<Hospital> searchHospitalName(String query) {
		List<Hospital> val = hospitalRepo.findByNameStartsWith(query);
		return val;
	}
	public List<Hospital> searchHospitalID(String query) {
		List<Hospital> val = hospitalRepo.findByIDStartsWith(query);
		return val;
	}

	//Searching Functions
	public List<Hospital> filter_hospital_by_id(String id,int pageNumber,int pageSize){
		Pageable pageable = PageRequest.of(pageNumber,pageSize);
		Page<Hospital> myPage=hospitalRepo.findByHospitalId(id,pageable);
		List<Hospital> hospital_list=myPage.getContent();
		return hospital_list;
	}
	public List<Hospital> filter_hospital_by_name(String name,int pageNumber,int pageSize){
		Pageable pageable = PageRequest.of(pageNumber,pageSize);
		Page<Hospital> myPage=hospitalRepo.findByHospitalName(name,pageable);
		List<Hospital> hospital_list=myPage.getContent();
		return hospital_list;
	}
	public List<Hospital> filter_hospital_by_address(String address,int pageNumber,int pageSize){
		Pageable pageable = PageRequest.of(pageNumber,pageSize);
		Page<Hospital> myPage=hospitalRepo.findByHospitalAddress(address,pageable);
		List<Hospital> hospital_list=myPage.getContent();
		return hospital_list;
	}
	public List<Hospital> filter_hospital_by_name1(String name1,int pageNumber,int pageSize){
		Pageable pageable = PageRequest.of(pageNumber,pageSize);
		Page<Hospital> myPage=hospitalRepo.findByHospitalName1(name1,pageable);
		List<Hospital> hospital_list=myPage.getContent();
		return hospital_list;
	}
	public List<Hospital> filter_hospital_by_name2(String name2,int pageNumber,int pageSize){
		Pageable pageable = PageRequest.of(pageNumber,pageSize);
		Page<Hospital> myPage=hospitalRepo.findByHospitalName2(name2,pageable);
		List<Hospital> hospital_list=myPage.getContent();
		return hospital_list;
	}
}
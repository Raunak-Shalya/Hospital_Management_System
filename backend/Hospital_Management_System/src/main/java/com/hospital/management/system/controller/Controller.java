package com.hospital.management.system.controller;

import com.hospital.management.system.entity.Hospital;
import com.hospital.management.system.service.HospitalService;

import java.io.Console;
import java.util.List;

import org.hibernate.query.NativeQuery.ReturnableResultNode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins="http://localhost:5173" ,maxAge = 3600)
@RestController
public class Controller {

    @Autowired
    private HospitalService hospitalService;
    
    public Controller(HospitalService hospitalService) {
		super();
		this.hospitalService = hospitalService;
	}

	@PostMapping
    public ResponseEntity<Hospital> registerHospital( @RequestBody Hospital hospital) {
        try {
            Hospital savedHospital = hospitalService.addHospital(hospital);
            return new ResponseEntity<>(savedHospital, HttpStatus.CREATED);
        } catch (Exception e) {
            // Handle specific exceptions with appropriate HTTP status codes and error messages
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Hospital> getHospitalById(@PathVariable long id) {
        try {
            Hospital hospital = hospitalService.getHospitalById(id);
            if (hospital == null) {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(hospital, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @GetMapping("/sortByName")
    public List<Hospital> findAllRadiologistsSortedByNameAsc() {
        return hospitalService.findAllHospitalSortedByNameAsc();
    }
    
    @GetMapping("/sortById")
    public List<Hospital> findAllRadiologistsSortedByNameId() {
        return hospitalService.findAllHospitalSortedByNameId();
    }
    @GetMapping("/SearchByName")
    public ResponseEntity<List<Hospital>> searchProductsbyName(@RequestParam("query") String query){
        return ResponseEntity.ok(hospitalService.searchHospitalName(query));
    }
    @GetMapping("/SearchByID")
    public ResponseEntity<List<Hospital>> searchProductsbyID(@RequestParam("query") String query){
        return ResponseEntity.ok(hospitalService.searchHospitalID(query));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Hospital> updateHospital(@PathVariable long id,@RequestBody Hospital hospital) {
        try {
            Hospital updatedHospital = hospitalService.updateHospital(hospital,id);
            if (updatedHospital == null) {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(updatedHospital, HttpStatus.OK);
        } catch (Exception e) {
            // Handle specific exceptions with appropriate HTTP status codes and error messages
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteHospital(@PathVariable long id) {
        try {
            hospitalService.deleteHospital(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT); // Avoid returning null
        } catch (Exception e) {
            // Handle specific exceptions with appropriate HTTP status codes and error messages
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
package com.example.backend.demo.controller;


import com.example.backend.demo.entities.Dicom;
import com.example.backend.demo.entities.Hospital;
import com.example.backend.demo.services.impl.DicomService;
import com.example.backend.demo.services.impl.HospitalService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.io.IOException;
import java.util.List;
import org.springframework.core.io.Resource;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    private HospitalService hospitalService;

    public UserController(HospitalService hospitalService) {
        super();
        this.hospitalService = hospitalService;
    }

    @PostMapping("/")
    public ResponseEntity<Hospital> registerHospital(@RequestBody Hospital hospital) {
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





    // DICOM APIs
    @Autowired
    private DicomService dicom_service;

    @PostMapping(value = "/upload/{hospital_id}",consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public String uploadImageToFileSystem(@RequestPart("file") MultipartFile file, @PathVariable("hospital_id") int hospital_id) throws IOException {

        return dicom_service.uploadImageToFileSystem(file, hospital_id);

    }

    @GetMapping("/view/{hospital_id}")
    public List<Dicom> getAllDicomsByHospitalId(@PathVariable("hospital_id") int hospital_id){

        return (List<Dicom>)dicom_service.getAllDicomsByHospitalId(hospital_id);

    }

    @GetMapping("/viewPatientDetails/{dicomId}")
    public List<String> getPatientDicomDetails(@PathVariable("dicomId") int dicomId){

        List<String> response=  dicom_service.getPatientDicomDetails(dicomId);
        return response;

    }




    @PutMapping("/saveComment/{dicomId}")
    public void CommentOnDicom (@PathVariable("dicomId")int dicomId,@RequestParam("comment") String comment){
        dicom_service.CommentOnDicom(dicomId,comment);
    }

    @GetMapping("/getComment/{dicomId}")
    public String getCommentyrr(@PathVariable("dicomId")int dicomId){
        return dicom_service.getCommentyrr(dicomId);
    }

    @PutMapping("/update/{dicomId}")
    public String updateDicom(@PathVariable("dicomId")int dicomId,MultipartFile file) throws IOException {
        return dicom_service.updateDicom(dicomId,file);
    }
}

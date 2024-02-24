package com.hospital.management.system.controller;


import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.hospital.management.system.entity.Dicom;
import com.hospital.management.system.service.DicomService;
import com.hospital.management.system.service.HospitalService;

import jakarta.servlet.http.HttpServletRequest;

@CrossOrigin(origins="http://localhost:5173" ,maxAge = 3600)
@RestController
public class FileController {

    @Autowired
    private DicomService dicom_service;
    private HospitalService hospital_service;

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


    @GetMapping("/downloadImage/{dicomId}")
    public ResponseEntity<?> downLoadImage (@PathVariable("dicomId") int dicomId, HttpServletRequest request) throws IOException{
        Resource resource= dicom_service.downloadImage(dicomId);
        String mimeType;

        try{
            mimeType= request.getServletContext().getMimeType(resource.getFile().getAbsolutePath());
        }catch(IOException e){
            mimeType=  MediaType.APPLICATION_OCTET_STREAM_VALUE;
        }

        mimeType= (mimeType==null)? MediaType.APPLICATION_OCTET_STREAM_VALUE : mimeType;

        return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType(mimeType))
                .body(resource);
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

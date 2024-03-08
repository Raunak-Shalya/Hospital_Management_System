package com.example.backend.demo.controller;

import com.example.backend.demo.services.impl.DicomService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

@RestController
@RequestMapping("/dicom")
public class AdminController {
    @Autowired
    private DicomService dicom_service;
    @GetMapping("/downloadImage/{dicomId}")
    public ResponseEntity<?> downLoadImage (@PathVariable("dicomId") int dicomId, HttpServletRequest request) throws IOException {
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
}

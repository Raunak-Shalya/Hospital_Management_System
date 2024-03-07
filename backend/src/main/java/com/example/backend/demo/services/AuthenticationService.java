package com.example.backend.demo.services;

import com.example.backend.demo.dto.GenericResponse;
import com.example.backend.demo.dto.SignUpRequest;
import com.example.backend.demo.dto.SigninRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.ResponseEntity;


public interface AuthenticationService {
    ResponseEntity<GenericResponse> signUp(SignUpRequest signUpRequest);
    ResponseEntity<GenericResponse> signIn(SigninRequest signinRequest, HttpServletResponse response);
}

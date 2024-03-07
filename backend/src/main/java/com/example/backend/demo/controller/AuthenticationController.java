package com.example.backend.demo.controller;

import com.example.backend.demo.dto.GenericResponse;
import com.example.backend.demo.dto.SignUpRequest;
import com.example.backend.demo.dto.SigninRequest;
import com.example.backend.demo.entities.User;
import com.example.backend.demo.services.AuthenticationService;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthenticationController {

    @Autowired
    AuthenticationService authenticationService;

    @PostMapping("/signup")
    public ResponseEntity<GenericResponse> signup(@RequestBody SignUpRequest signUpRequest) {
        return authenticationService.signUp(signUpRequest);
    }

    @PostMapping("/signin")
    public ResponseEntity<GenericResponse> signin(@RequestBody SigninRequest signinRequest, HttpServletResponse response) {
        return authenticationService.signIn(signinRequest, response);
    }

}

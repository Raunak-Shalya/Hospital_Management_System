package com.example.backend.demo.controller;

import com.example.backend.demo.dto.GenericResponse;
import com.example.backend.demo.dto.SignUpRequest;
import com.example.backend.demo.dto.SigninRequest;
import com.example.backend.demo.entities.User;
import com.example.backend.demo.services.AuthenticationService;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping("/deleteCookies")
    public String deleteCookies(HttpServletResponse response) {
        // Create a new cookie with the same name as the cookie to be deleted but with an expired date
        Cookie cookieToDelete = new Cookie("jwt-token", null);
        cookieToDelete.setMaxAge(0); // Set the cookie's max age to 0 to make it expire
        cookieToDelete.setPath("/"); // Set the cookie's path to match the path of the cookie to be deleted
        cookieToDelete.setHttpOnly(true); // Set the cookie as HTTP Only
        response.addCookie(cookieToDelete); // Add the cookie to the response

        Cookie cookieToDelete2 = new Cookie("refresh-token", null);
        cookieToDelete2.setMaxAge(0); // Set the cookie's max age to 0 to make it expire
        cookieToDelete2.setPath("/"); // Set the cookie's path to match the path of the cookie to be deleted
        cookieToDelete2.setHttpOnly(true); // Set the cookie as HTTP Only
        response.addCookie(cookieToDelete2); // Add the cookie to the response


        return "Cookies deleted successfully";
    }
}

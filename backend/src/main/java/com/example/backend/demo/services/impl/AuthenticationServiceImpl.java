package com.example.backend.demo.services.impl;

import com.example.backend.demo.dto.ErrorDto;
import com.example.backend.demo.dto.GenericResponse;
import com.example.backend.demo.dto.SignUpRequest;
import com.example.backend.demo.dto.SigninRequest;
import com.example.backend.demo.entities.Result;
import com.example.backend.demo.entities.Role;
import com.example.backend.demo.entities.User;
import com.example.backend.demo.repository.UserRepository;
import com.example.backend.demo.services.AuthenticationService;
import com.example.backend.demo.services.JWTService;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@Service
public class AuthenticationServiceImpl implements AuthenticationService {

    @Autowired
    UserRepository userRepository;

    @Autowired
    PasswordEncoder passwordEncoder;

    @Autowired
    JWTService jwtService;

    public ResponseEntity<GenericResponse> signUp(SignUpRequest signUpRequest) {
        User user = new User();

        List<User> usersByUsernameOrEmail = userRepository.findByUsernameOrEmail(signUpRequest.getUsername(), signUpRequest.getEmail());

        if(usersByUsernameOrEmail.size() != 0) {
            List<ErrorDto> errors = new ArrayList<>();
            for(User user1 : usersByUsernameOrEmail) {
                if(signUpRequest.getEmail().equals(user1.getEmail())) {
                    ErrorDto error = new ErrorDto("email", "User with same email already exist");
                    errors.add(error);
                }
                if(signUpRequest.getUsername().equals(user1.getUsername())) {
                    ErrorDto error = new ErrorDto("username", "User with same username already exist");
                    errors.add(error);
                }
            }
            return new ResponseEntity<>(GenericResponse.builder().result(Result.FAILURE.name()).message("Error").data(errors).build(), HttpStatus.BAD_REQUEST);
        }

        user.setFirstname(signUpRequest.getFirstName());
        user.setLastname(signUpRequest.getLastName());
        user.setEmail(signUpRequest.getEmail());
        user.setUsername(signUpRequest.getUsername());
        user.setRole(Role.USER);
        user.setPassword(passwordEncoder.encode(signUpRequest.getPassword()));

        userRepository.save(user);

        return new ResponseEntity<>(GenericResponse.builder().result(Result.SUCCESS.name()).message("User created successfully!!").data(user).build(), HttpStatus.OK);
    }

    @Override
    public ResponseEntity<GenericResponse> signIn(SigninRequest signinRequest, HttpServletResponse response) {

        User user = userRepository.findOneByUsernameOrEmail(signinRequest.getUsername(), signinRequest.getUsername());

        if(null == user) {
            return new ResponseEntity<>(GenericResponse.builder().result(Result.FAILURE.name()).message("Invalid username or email").data(null).build(), HttpStatus.BAD_REQUEST);
        }

        if(passwordEncoder.matches(signinRequest.getPassword(), user.getPassword())) {

            String jwtToken = jwtService.generateToken(user);
            String refreshToken = jwtService.generateRefreshToken(new HashMap<>(), user);

            Cookie jwtTokenCookie = createCookie("jwt-token", jwtToken);
            Cookie refreshTokenCookie = createCookie("refresh-token", refreshToken);

            response.addCookie(jwtTokenCookie);
            response.addCookie(refreshTokenCookie);

            return new ResponseEntity<>(GenericResponse.builder().result(Result.SUCCESS.name()).message("Login successfull!!").data(user).build(), HttpStatus.OK);
        }


        return new ResponseEntity<>(GenericResponse.builder().result(Result.FAILURE.name()).message("Login unuccessfull!!").data(null).build(), HttpStatus.OK);
    }

    private Cookie createCookie(String tokenName, String tokenValue){
        Cookie cookie = new Cookie(tokenName, tokenValue);
        cookie.setHttpOnly(true);
        cookie.setPath("/");
        cookie.setMaxAge(-1);

        return cookie;
    }

}

package com.example.backend.demo.repository;

import com.example.backend.demo.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByUsername(String username);

    List<User> findByUsernameOrEmail(String username, String email);

    User findOneByUsernameOrEmail(String username, String email);

}

package com.hospital.management.system.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hospital.management.system.entity.Hospital;


@Repository
public interface HospitalRepo  extends JpaRepository<Hospital, Integer>{

}
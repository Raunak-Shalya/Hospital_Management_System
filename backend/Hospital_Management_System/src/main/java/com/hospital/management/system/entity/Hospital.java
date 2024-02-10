package com.hospital.management.system.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name="hospital")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Hospital {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	private String hospitalName;
	private String hospitalAddress;
	private String name1;
	private String email1;
	private String contactNo1;
	private String name2;
	private String email2;
	private String contactNo2;

}
package com.example.backend.demo.entities;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name="hospital")
@Builder
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
	
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getHospitalName() {
		return hospitalName;
	}

	public void setHospitalName(String hospitalName) {
		this.hospitalName = hospitalName;
	}

	public String getHospitalAddress() {
		return hospitalAddress;
	}

	public void setHospitalAddress(String hospitalAddress) {
		this.hospitalAddress = hospitalAddress;
	}

	public String getName1() {
		return name1;
	}

	public void setName1(String name1) {
		this.name1 = name1;
	}

	public String getEmail1() {
		return email1;
	}

	public void setEmail1(String email1) {
		this.email1 = email1;
	}

	public String getContactNo1() {
		return contactNo1;
	}

	public void setContactNo1(String contactNo1) {
		this.contactNo1 = contactNo1;
	}

	public String getName2() {
		return name2;
	}

	public void setName2(String name2) {
		this.name2 = name2;
	}

	public String getEmail2() {
		return email2;
	}

	public void setEmail2(String email2) {
		this.email2 = email2;
	}

	public String getContactNo2() {
		return contactNo2;
	}

	public void setContactNo2(String contactNo2) {
		this.contactNo2 = contactNo2;
	}

	@Override
	public String toString() {
		return "Hospital [id=" + id + ", hospitalName=" + hospitalName + ", hospitalAddress=" + hospitalAddress
				+ ", name1=" + name1 + ", email1=" + email1 + ", contactNo1=" + contactNo1 + ", name2=" + name2
				+ ", email2=" + email2 + ", contactNo2=" + contactNo2 + "]";
	}
	

}
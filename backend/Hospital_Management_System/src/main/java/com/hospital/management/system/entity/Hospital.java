package com.hospital.management.system.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Hospital {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private String HospitalName;
	private String HospitalAddress;
	private String Name1;
	private String Email1;
	private int ContactNo1;
	private String Name2;
	private String Email2;
	private int ContactNo2;
	
	

	public Hospital() {
		super();
		// TODO Auto-generated constructor stub
	}

	

	public String getHospitalAddress() {
		return HospitalAddress;
	}



	public void setHospitalAddress(String hospitalAddress) {
		HospitalAddress = hospitalAddress;
	}



	public String getName1() {
		return Name1;
	}



	public void setName1(String name1) {
		Name1 = name1;
	}



	public String getEmail1() {
		return Email1;
	}



	public void setEmail1(String email1) {
		Email1 = email1;
	}



	public int getContactNo1() {
		return ContactNo1;
	}



	public void setContactNo1(int contactNo1) {
		ContactNo1 = contactNo1;
	}



	public String getName2() {
		return Name2;
	}



	public void setName2(String name2) {
		Name2 = name2;
	}



	/**
	 * @return the email2
	 */
	public String getEmail2() {
		return Email2;
	}



	/**
	 * @param email2 the email2 to set
	 */
	public void setEmail2(String email2) {
		Email2 = email2;
	}



	/**
	 * @return the contactNo2
	 */
	public int getContactNo2() {
		return ContactNo2;
	}



	/**
	 * @param contactNo2 the contactNo2 to set
	 */
	public void setContactNo2(int contactNo2) {
		ContactNo2 = contactNo2;
	}



	@Override
	public String toString() {
		return "Hospital [HospitalName=" + HospitalName + ", HospitalAddress=" + HospitalAddress + ", Name1=" + Name1
				+ ", Email1=" + Email1 + ", ContactNo1=" + ContactNo1 + ", Name2=" + Name2 + ", Email2=" + Email2
				+ ", ContactNo2=" + ContactNo2 + "]";
	}


	
}

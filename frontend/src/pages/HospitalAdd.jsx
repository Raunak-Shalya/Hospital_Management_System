import React, { useState } from "react";
import axios from "axios";
import "../styles/HospitalAddEdit.css";
import validator, { isAlpha, isEmail, isMobilePhone } from "validator";
import Home from "./Home";

const HospitalAdd = (props) => {
  let Hospital = {
    hospitalName: "",
    hospitalAddress: "",
    name1: "",
    email1: "",
    contactNo1: "",
    name2: "",
    email2: "",
    contactNo2: "",
  };

  const hospitalNameChange = (e) => {
    Hospital.hospitalName = e.target.value;
  };
  const hospitalAddressChange = (e) => {
    Hospital.hospitalAddress = e.target.value;
  };
  const name1Change = (e) => {
    Hospital.name1 = e.target.value;
  };
  const email1Change = (e) => {
    Hospital.email1 = e.target.value;
  };
  const contactNo1Change = (e) => {
    Hospital.contactNo1 = e.target.value;
  };
  const name2Change = (e) => {
    Hospital.name2 = e.target.value;
  };
  const email2Change = (e) => {
    Hospital.email2 = e.target.value;
  };
  const contactNo2Change = (e) => {
    Hospital.contactNo2 = e.target.value;
  };

  const submitHandler = () => {
    if (Hospital.hospitalName == "") {
      alert("Enter Hospital Name");
      return;
    }
    if (!isAlpha(Hospital.hospitalName)) {
      alert("Hospital Name Invalid");
      return;
    }
    if (Hospital.hospitalAddress == "") {
      alert("Enter Hopsital Address");
      return;
    }
    if (Hospital.name1 == "") {
      alert("Enter First Person Name");
      return;
    }
    if (!isAlpha(Hospital.name1)) {
      alert("First Person Name Invalid");
      return;
    }
    if (Hospital.email1 == "") {
      alert("Enter First Person Email");
      return;
    }
    if (!isEmail(Hospital.email1)) {
      alert("First Person Email Invalid");
      return;
    }
    if (Hospital.contactNo1 == "") {
      alert("Enter First Person Contact No.");
      return;
    }
    if (!isMobilePhone(Hospital.contactNo1)) {
      alert("First Person Contact No. Invalid");
      return;
    }
    if (Hospital.name2 == "") {
      alert("Enter Second Person Name");
      return;
    }
    if (!isAlpha(Hospital.name2)) {
      alert("Second Person Name Invalid");
      return;
    }
    if (Hospital.email2 == "") {
      alert("Enter Second Person Email");
      return;
    }
    if (!isEmail(Hospital.email2)) {
      alert("Second Person Email Invalid");
      return;
    }
    if (Hospital.contactNo2 == "") {
      alert("Enter Second Person Contact No.");
      return;
    }
    if (!isMobilePhone(Hospital.contactNo2)) {
      alert("Second Person Contact No. Invalid");
      return;
    }
    props.setAddModal(false);
    try {
      axios.post(`http://localhost:8080/`, Hospital).catch((err) => {
        console.log(err);
      });
      alert(`Hospital: ${Hospital.hospitalName} has been added`);
      props.setAdded(props.Added + 1);
    } catch (e) {
      alert(e);
    }
  };
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div
          className="btn-one-edit-close"
          onClick={() => {
            props.setAddModal(false);
          }}
        >
          <span>X</span>
        </div>
        <div className="HospitalEditBox">
          <div className="HospitalEditEntryBox">
            <div className="HospitalEditEntryName">Hospital Name</div>
            <input
              className="HospitalEditEntryInput"
              defaultValue={Hospital.hospitalName}
              onChange={hospitalNameChange}
            ></input>
          </div>

          <div className="HospitalEditEntryBox">
            <div className="HospitalEditEntryName">Hospital Address</div>
            <input
              className="HospitalEditEntryInput"
              defaultValue={Hospital.hospitalAddress}
              onChange={hospitalAddressChange}
            ></input>
          </div>

          <div className="HospitalEditEntryBox">
            <div className="HospitalEditEntryName">First Person Name</div>
            <input
              className="HospitalEditEntryInput"
              defaultValue={Hospital.name1}
              onChange={name1Change}
            ></input>
          </div>

          <div className="HospitalEditEntryBox">
            <div className="HospitalEditEntryName">First Person Email</div>
            <input
              className="HospitalEditEntryInput"
              defaultValue={Hospital.email1}
              onChange={email1Change}
            ></input>
          </div>

          <div className="HospitalEditEntryBox">
            <div className="HospitalEditEntryName">
              First Person Contact No.
            </div>
            <input
              className="HospitalEditEntryInput"
              defaultValue={Hospital.contactNo1}
              onChange={contactNo1Change}
            ></input>
          </div>

          <div className="HospitalEditEntryBox">
            <div className="HospitalEditEntryName">Second Person Name</div>
            <input
              className="HospitalEditEntryInput"
              defaultValue={Hospital.name2}
              onChange={name2Change}
            ></input>
          </div>

          <div className="HospitalEditEntryBox">
            <div className="HospitalEditEntryName">Second Person Email</div>
            <input
              className="HospitalEditEntryInput"
              defaultValue={Hospital.email2}
              onChange={email2Change}
            ></input>
          </div>

          <div className="HospitalEditEntryBox">
            <div className="HospitalEditEntryName">
              Second Person Contact No.
            </div>
            <input
              className="HospitalEditEntryInput"
              defaultValue={Hospital.contactNo2}
              onChange={contactNo2Change}
            ></input>
          </div>

          <div className="btn btn-one-edit" onClick={submitHandler}>
            <span>Submit</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HospitalAdd;

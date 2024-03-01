import React, { useState } from "react";
import axios from "axios";
import { isAlpha, isEmail, isMobilePhone } from "validator";
import "../styles/HospitalModal.css";

const HospitalEdit = (props) => {
  const Hospital = props.Hospital;

  let curhospitalName = Hospital.hospitalName,
    curhospitalAddress = Hospital.hospitalAddress,
    curname1 = Hospital.name1,
    curemail1 = Hospital.email1,
    curcontactNo1 = Hospital.contactNo1,
    curname2 = Hospital.name2,
    curemail2 = Hospital.email2,
    curcontactNo2 = Hospital.contactNo2;
  const hospitalNameChange = (e) => {
    curhospitalName = e.target.value;
  };
  const hospitalAddressChange = (e) => {
    curhospitalAddress = e.target.value;
  };
  const name1Change = (e) => {
    curname1 = e.target.value;
  };
  const email1Change = (e) => {
    curemail1 = e.target.value;
  };
  const contactNo1Change = (e) => {
    curcontactNo1 = e.target.value;
  };
  const name2Change = (e) => {
    curname2 = e.target.value;
  };
  const email2Change = (e) => {
    curemail2 = e.target.value;
  };
  const contactNo2Change = (e) => {
    curcontactNo2 = e.target.value;
  };

  const submitHandler = () => {
    if (curhospitalName == "") {
      alert("Enter Hospital Name");
      return;
    }
    if (!isAlpha(curhospitalName)) {
      alert("Hospital Name Invalid");
      return;
    }
    if (curhospitalAddress == "") {
      alert("Enter Hopsital Address");
      return;
    }
    if (curname1 == "") {
      alert("Enter First Person Name");
      return;
    }
    if (!isAlpha(curname1)) {
      alert("First Person Name Invalid");
      return;
    }
    if (curemail1 == "") {
      alert("Enter First Person Email");
      return;
    }
    if (!isEmail(curemail1)) {
      alert("First Person Email Invalid");
      return;
    }
    if (curcontactNo1 == "") {
      alert("Enter First Person Contact No.");
      return;
    }
    if (!isMobilePhone(curcontactNo1)) {
      alert("First Person Contact No. Invalid");
      return;
    }
    if (curname2 == "") {
      alert("Enter Second Person Name");
      return;
    }
    if (!isAlpha(curname2)) {
      alert("Second Person Name Invalid");
      return;
    }
    if (curemail2 == "") {
      alert("Enter Second Person Email");
      return;
    }
    if (!isEmail(curemail2)) {
      alert("Second Person Email Invalid");
      return;
    }
    if (curcontactNo2 == "") {
      alert("Enter Second Person Contact No.");
      return;
    }
    if (!isMobilePhone(curcontactNo2)) {
      alert("Second Person Contact No. Invalid");
      return;
    }
    props.SetEditModal(false);
    Hospital.hospitalName = curhospitalName;
    Hospital.Address = curhospitalAddress;
    Hospital.name1 = curname1;
    Hospital.email1 = curemail1;
    Hospital.contactNo1 = curcontactNo1;
    Hospital.name2 = curname2;
    Hospital.email2 = curemail2;
    Hospital.contactNo2 = curcontactNo2;
    axios.put(`http://localhost:8080/${Hospital.id}`, Hospital).catch((err) => {
      console.log(err);
    });
    alert(`Hospital ${Hospital.hospitalName} Updated Sucessfully`);
  };

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div
          className="btn-one-edit-close"
          onClick={() => {
            props.SetEditModal(false);
          }}
        >
          <span>X</span>
        </div>
        <div className="Edit-Title">Hospital Edit</div>
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

export default HospitalEdit;

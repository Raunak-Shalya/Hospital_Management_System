import React, { useState } from "react";
import axios from "axios";
import "../styles/HospitalAddEdit.css";

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

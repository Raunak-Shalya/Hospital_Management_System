import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import NavBar from "../components/Navbar";
import "../styles/HospitalAddEdit.css";

const HospitalEdit = ({ route, navigate }) => {
  const location = useLocation();
  const [Hospital, setHospital] = useState(location.state.Hospital);

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
    axios.put(`http://localhost:8080/${Hospital.id}`, Hospital).catch((err) => {
      console.log(err);
    });
  };
  return (
    <div>
      <div className="box">
        <NavBar />
        <div className="homebox">
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
    </div>
  );
};

export default HospitalEdit;

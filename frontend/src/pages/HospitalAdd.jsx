import React, { useState } from "react";
import axios from "axios";
import "../styles/HospitalModal.css";
import { isEmail, isMobilePhone } from "validator";

const HospitalAdd = (props) => {
  const [curhospitalName, setcurhospitalName] = useState("h");
  const [curhospitalAddress, setcurhospitalAddress] = useState("h");
  const [curname1, setcurname1] = useState("h");
  const [curemail1, setcuremail1] = useState("h@gmail.com");
  const [curcontactNo1, setcurcontactNo1] = useState("2414141");
  const [curname2, setcurname2] = useState("h");
  const [curemail2, setcuremail2] = useState("h@gmail.com");
  const [curcontactNo2, setcurcontactNo2] = useState("24141414");

  const hospitalNameChange = (e) => {
    setcurhospitalName(e.target.value);
  };
  const hospitalAddressChange = (e) => {
    setcurhospitalAddress(e.target.value);
  };
  const name1Change = (e) => {
    setcurname1(e.target.value);
  };
  const email1Change = (e) => {
    setcuremail1(e.target.value);
  };
  const contactNo1Change = (e) => {
    setcurcontactNo1(e.target.value);
  };
  const name2Change = (e) => {
    setcurname2(e.target.value);
  };
  const email2Change = (e) => {
    setcuremail2(e.target.value);
  };
  const contactNo2Change = (e) => {
    setcurcontactNo2(e.target.value);
  };

  const submitHandler = () => {
    if (curhospitalName == "" || curhospitalName == "h") {
      return;
    }
    if (curhospitalAddress == "") {
      return;
    }
    if (curname1 == "") {
      return;
    }
    if (curemail1 == "") {
      return;
    }
    if (!isEmail(curemail1)) {
      return;
    }
    if (curcontactNo1 == "") {
      return;
    }
    if (!isMobilePhone(curcontactNo1)) {
      return;
    }
    if (curname2 == "") {
      return;
    }
    if (curemail2 == "") {
      return;
    }
    if (!isEmail(curemail2)) {
      return;
    }
    if (curcontactNo2 == "") {
      return;
    }
    if (!isMobilePhone(curcontactNo2)) {
      return;
    }
    let Hospital = {
      hospitalName: curhospitalName,
      hospitalAddress: curhospitalAddress,
      name1: curname1,
      email1: curemail1,
      contactNo1: curcontactNo1,
      name2: curname2,
      email2: curemail2,
      contactNo2: curcontactNo2,
    };
    props.setAddModal(false);
    try {
      axios.post(`http://localhost:8080/user/`, Hospital).catch((err) => {
        console.log(err);
      });
      // alert(`Hospital: ${Hospital.hospitalName} has been added`);
      Hospital.id = props.Hospitals.length + 1;
      props.setHospitals([...props.Hospitals, Hospital]);
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
        <div className="Edit-Title">Add Hospital</div>
        <div className="HospitalEditBox">
          <div className="HospitalEditEntryBox">
            <div className="HospitalEditEntryTitle">
              <div className="HospitalEditEntryName">Hospital Name*</div>
              {curhospitalName === "" && (
                <div className="ModalError">(Field Required)</div>
              )}
            </div>
            <input
              className="HospitalEditEntryInput"
              defaultValue={""}
              onChange={hospitalNameChange}
            ></input>
          </div>

          <div className="HospitalEditEntryBox">
            <div className="HospitalEditEntryTitle">
              <div className="HospitalEditEntryName">Hospital Address*</div>
              {curhospitalAddress === "" && (
                <div className="ModalError">(Field Required)</div>
              )}
            </div>
            <input
              className="HospitalEditEntryInput"
              defaultValue={""}
              onChange={hospitalAddressChange}
            ></input>
          </div>

          <div className="HospitalEditEntryBox">
            <div className="HospitalEditEntryTitle">
              <div className="HospitalEditEntryName">First Person Name*</div>
              {curname1 === "" && (
                <div className="ModalError">(Field Required)</div>
              )}
            </div>
            <input
              className="HospitalEditEntryInput"
              defaultValue={""}
              onChange={name1Change}
            ></input>
          </div>

          <div className="HospitalEditEntryBox">
            <div className="HospitalEditEntryTitle">
              <div className="HospitalEditEntryName">First Person Email*</div>
              {(curemail1 === "" && (
                <div className="ModalError">(Field Required)</div>
              )) ||
                (!isEmail(curemail1) && (
                  <div className="ModalError">(Invalid Value)</div>
                ))}
            </div>
            <input
              className="HospitalEditEntryInput"
              defaultValue={""}
              onChange={email1Change}
            ></input>
          </div>

          <div className="HospitalEditEntryBox">
            <div className="HospitalEditEntryTitle">
              <div className="HospitalEditEntryName">
                First Person Contact No.*
              </div>
              {(curcontactNo1 === "" && (
                <div className="ModalError">(Field Required)</div>
              )) ||
                (!isMobilePhone(curcontactNo1) && (
                  <div className="ModalError">(Invalid Value)</div>
                ))}
            </div>
            <input
              className="HospitalEditEntryInput"
              defaultValue={""}
              onChange={contactNo1Change}
            ></input>
          </div>

          <div className="HospitalEditEntryBox">
            <div className="HospitalEditEntryTitle">
              <div className="HospitalEditEntryName">Second Person Name*</div>
              {curname2 === "" && (
                <div className="ModalError">(Field Required)</div>
              )}
            </div>

            <input
              className="HospitalEditEntryInput"
              defaultValue={""}
              onChange={name2Change}
            ></input>
          </div>

          <div className="HospitalEditEntryBox">
            <div className="HospitalEditEntryTitle">
              <div className="HospitalEditEntryName">Second Person Email*</div>
              {(curemail2 === "" && (
                <div className="ModalError">(Field Required)</div>
              )) ||
                (!isEmail(curemail2) && (
                  <div className="ModalError">(Invalid Value)</div>
                ))}
            </div>
            <input
              className="HospitalEditEntryInput"
              defaultValue={""}
              onChange={email2Change}
            ></input>
          </div>

          <div className="HospitalEditEntryBox">
            <div className="HospitalEditEntryTitle">
              <div className="HospitalEditEntryName">
                Second Person Contact No.*
              </div>
              {(curcontactNo2 === "" && (
                <div className="ModalError">(Field Required)</div>
              )) ||
                (!isMobilePhone(curcontactNo2) && (
                  <div className="ModalError">(Invalid Value)</div>
                ))}
            </div>
            <input
              className="HospitalEditEntryInput"
              defaultValue={""}
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

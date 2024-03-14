import React, { useState } from "react";
import axios from "axios";
import { isEmail, isMobilePhone } from "validator";
import "../styles/HospitalModal.css";

axios.defaults.withCredentials = true;

const HospitalEdit = (props) => {
  const Hospital = props.Hospital;

  const [curhospitalName, setcurhospitalName] = useState(Hospital.hospitalName);
  const [curhospitalAddress, setcurhospitalAddress] = useState(
    Hospital.hospitalAddress
  );
  const [curname1, setcurname1] = useState(Hospital.name1);
  const [curemail1, setcuremail1] = useState(Hospital.email1);
  const [curcontactNo1, setcurcontactNo1] = useState(Hospital.contactNo1);
  const [curname2, setcurname2] = useState(Hospital.name2);
  const [curemail2, setcuremail2] = useState(Hospital.email2);
  const [curcontactNo2, setcurcontactNo2] = useState(Hospital.contactNo2);

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

  const submitHandler = async () => {
    if (curhospitalName == "") {
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
    props.SetEditModal(false);
    Hospital.hospitalName = curhospitalName;
    Hospital.hospitalAddress = curhospitalAddress;
    Hospital.name1 = curname1;
    Hospital.email1 = curemail1;
    Hospital.contactNo1 = curcontactNo1;
    Hospital.name2 = curname2;
    Hospital.email2 = curemail2;
    Hospital.contactNo2 = curcontactNo2;
    await axios
      .put(`http://localhost:8080/user/${Hospital.id}`, Hospital)
      .catch((err) => {
        console.log(err);
      });
    // alert(`Hospital ${Hospital.hospitalName} Updated Sucessfully`);
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
        <div className="Edit-Title">Edit Hospital</div>
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
              defaultValue={Hospital.hospitalName}
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
              defaultValue={Hospital.hospitalAddress}
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
              defaultValue={Hospital.name1}
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
              defaultValue={Hospital.email1}
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
              defaultValue={Hospital.contactNo1}
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
              defaultValue={Hospital.name2}
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
              defaultValue={Hospital.email2}
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

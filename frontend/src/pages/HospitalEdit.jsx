import React from "react";
import NavBar from "../components/Navbar";
import "../styles/HospitalAddEdit.css";

const HospitalEdit = () => {
  return (
    <div>
      <div className="box">
        <NavBar />
        <div className="homebox">
          <div className="HospitalEditBox">
            <div className="HospitalEditEntryBox">
              <div className="HospitalEditEntryName">Hospital Name</div>
              <input className="HospitalEditEntryInput"></input>
            </div>

            <div className="HospitalEditEntryBox">
              <div className="HospitalEditEntryName">Hospital Address</div>
              <input className="HospitalEditEntryInput"></input>
            </div>

            <div className="HospitalEditEntryBox">
              <div className="HospitalEditEntryName">First Person Name</div>
              <input className="HospitalEditEntryInput"></input>
            </div>

            <div className="HospitalEditEntryBox">
              <div className="HospitalEditEntryName">First Person Email</div>
              <input className="HospitalEditEntryInput"></input>
            </div>

            <div className="HospitalEditEntryBox">
              <div className="HospitalEditEntryName">
                First Person Contact No.
              </div>
              <input className="HospitalEditEntryInput"></input>
            </div>

            <div className="HospitalEditEntryBox">
              <div className="HospitalEditEntryName">Second Person Name</div>
              <input className="HospitalEditEntryInput"></input>
            </div>

            <div className="HospitalEditEntryBox">
              <div className="HospitalEditEntryName">Second Person Email</div>
              <input className="HospitalEditEntryInput"></input>
            </div>

            <div className="HospitalEditEntryBox">
              <div className="HospitalEditEntryName">
                Second Person Contact No.
              </div>
              <input className="HospitalEditEntryInput"></input>
            </div>

            <div className="btn btn-one-edit">
              <span>Submit</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HospitalEdit;

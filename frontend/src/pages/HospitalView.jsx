import React from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import NavBar from "../components/Navbar";

const HospitalView = ({ route, navigate }) => {
  const location = useLocation();
  const [Hospital, setHospital] = useState(location.state.Hospital);

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
                value={Hospital.hospitalName}
              ></input>
            </div>

            <div className="HospitalEditEntryBox">
              <div className="HospitalEditEntryName">Hospital Address</div>
              <input
                className="HospitalEditEntryInput"
                value={Hospital.hospitalAddress}
              ></input>
            </div>

            <div className="HospitalEditEntryBox">
              <div className="HospitalEditEntryName">First Person Name</div>
              <input
                className="HospitalEditEntryInput"
                value={Hospital.name1}
              ></input>
            </div>

            <div className="HospitalEditEntryBox">
              <div className="HospitalEditEntryName">First Person Email</div>
              <input
                className="HospitalEditEntryInput"
                value={Hospital.email1}
              ></input>
            </div>

            <div className="HospitalEditEntryBox">
              <div className="HospitalEditEntryName">
                First Person Contact No.
              </div>
              <input
                className="HospitalEditEntryInput"
                value={Hospital.contactNo1}
              ></input>
            </div>

            <div className="HospitalEditEntryBox">
              <div className="HospitalEditEntryName">Second Person Name</div>
              <input
                className="HospitalEditEntryInput"
                value={Hospital.name2}
              ></input>
            </div>

            <div className="HospitalEditEntryBox">
              <div className="HospitalEditEntryName">Second Person Email</div>
              <input
                className="HospitalEditEntryInput"
                value={Hospital.email2}
              ></input>
            </div>

            <div className="HospitalEditEntryBox">
              <div className="HospitalEditEntryName">
                Second Person Contact No.
              </div>
              <input
                className="HospitalEditEntryInput"
                value={Hospital.contactNo2}
              ></input>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HospitalView;

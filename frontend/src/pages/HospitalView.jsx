import React from "react";

const HospitalView = (props) => {
  const Hospital = props.Hospital;

  return (
    <div className="modalBackground">
      <div className="ViewmodalContainer">
        <div
          className="btn-one-edit-close"
          onClick={() => {
            props.SetViewModal(false);
          }}
        >
          <span>X</span>
        </div>
        <div className="View-Title">Hospital View</div>
        <div className="HospitalEditBox">
          <div className="HospitalEditEntryBox">
            <div className="HospitalEditEntryName">Hospital Name</div>
            <input
              className="HospitalViewEntryInput"
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
  );
};

export default HospitalView;

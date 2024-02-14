import React from "react";
import "../styles/HospitalBox.css";
const HospitalBox = (props) => {
  return (
    <div className="HospitalBox-box">
      <div className="HospitalBox_id">{props.Hospital.id}</div>
      <div className="HospitalBox_name">{props.Hospital.hospitalName}</div>
      <div className="btn btn-one">
        <span>Edit</span>
      </div>
    </div>
  );
};

export default HospitalBox;

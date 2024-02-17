import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/HospitalBox.css";
const HospitalBox = (props) => {
  const navigate = useNavigate();
  const handleEditClick = () => {
    navigate(`/edit/${props.Hospital.id}`, {
      state: { Hospital: props.Hospital },
    });
  };
  return (
    <div className="HospitalBox-box">
      <div className="HospitalBox_id">{props.Hospital.id}</div>
      <div className="HospitalBox_name">{props.Hospital.hospitalName}</div>
      <div className="button-container">
        <div className="btn btn-one">
          <span>View</span>
        </div>
        <div onClick={handleEditClick} className="btn btn-one">
          <span>Edit</span>
        </div>
        <div className="btn btn-one">
          <span>Submit</span>
        </div>
      </div>
    </div>
  );
};

export default HospitalBox;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/HospitalBox.css";
import HospitalEdit from "../pages/HospitalEdit";
import HospitalView from "../pages/HospitalView";
import DicomUpload from "../pages/DicomUpload";
const HospitalBox = (props) => {
  const navigate = useNavigate();
  const [EditModal, SetEditModal] = useState(false);
  const [ViewModal, SetViewModal] = useState(false);
  const [UploadModal, SetUploadModal] = useState(false);
  return (
    <div className="HospitalBox-box">
      <div className="HospitalBox_id">{props.Hospital.id}</div>
      <div className="HospitalBox_name">{props.Hospital.hospitalName}</div>
      <div className="button-container">
        <div
          className="btn btn-one"
          onClick={() => {
            SetViewModal(true);
          }}
        >
          <span>View</span>
        </div>
        {ViewModal && (
          <HospitalView Hospital={props.Hospital} SetViewModal={SetViewModal} />
        )}

        <div
          className="btn btn-one"
          onClick={() => {
            SetEditModal(true);
          }}
        >
          <span>Edit</span>
        </div>
        {EditModal && (
          <HospitalEdit Hospital={props.Hospital} SetEditModal={SetEditModal} />
        )}
        <div
          className="btn btn-one"
          onClick={() => {
            SetUploadModal(true);
          }}
        >
          <span>Upload</span>
        </div>
        {UploadModal && (
          <DicomUpload
            SetUploadModal={SetUploadModal}
            HospitalId={props.Hospital.id}
          />
        )}
      </div>
    </div>
  );
};

export default HospitalBox;

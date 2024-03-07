import React, { useState } from "react";
import "../styles/HospitalBox.css";
import HospitalEdit from "../pages/HospitalEdit";
import HospitalView from "../pages/HospitalView";
import DicomUpload from "../pages/DicomUpload";
import DicomView from "../pages/DicomView";
const HospitalBox = (props) => {
  const [EditModal, SetEditModal] = useState(false);
  const [ViewModal, SetViewModal] = useState(false);
  const [UploadModal, SetUploadModal] = useState(false);
  const [DicomViewModal, setDicomViewModal] = useState(false);
  return (
    <div className="HospitalBox-box">
      <div className="HospitalBoxEntry1">{props.Hospital.id}</div>
      <div className="HospitalBoxEntry2">{props.Hospital.hospitalName}</div>
      <div className="HospitalBoxEntry3">{props.Hospital.hospitalAddress}</div>
      <div className="HospitalBoxEntry4">{props.Hospital.name1}</div>
      <div className="HospitalBoxEntry5">{props.Hospital.name2}</div>
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
      </div>

      <div className="button-container">
        <div
          className="btn btn-one"
          onClick={() => {
            setDicomViewModal(true);
          }}
        >
          <span>View</span>
        </div>
        {DicomViewModal && (
          <DicomView
            setDicomViewModal={setDicomViewModal}
            HospitalId={props.Hospital.id}
          />
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

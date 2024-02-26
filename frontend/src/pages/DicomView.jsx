import React, { useState, useEffect } from "react";
import axios from "axios";
import MyComponent from "../components/DcmImage";
import { initialiseCornerstone } from "../components/initCornerstone";
import "../styles/DicomView.css";

function ViewDicomPanel(props) {
  const [cornerstoneInitialised, setCornerstoneInitialised] = useState(false);
  const [data, setData] = useState([]);
  const [dicomID, setDicomID] = useState(-1);
  const initialise = async () => {
    await initialiseCornerstone();
    setCornerstoneInitialised(true);
  };

  useEffect(() => {
    const fetchDicomID = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/view/${props.HospitalId}`
        );
        setDicomID(response.data[0].dicomId);
        console.log(response.data[0].dicomId);
      } catch (e) {
        console.log("Cannot Get DicomID");
      }
    };

    fetchDicomID();
    initialise();
  }, []);

  useEffect(() => {
    const fetchdetails = async () => {
      console.log(dicomID);
      if (dicomID == -1) return;
      axios
        .get(`http://localhost:8080/viewPatientDetails/${dicomID}`, {
          headers: {
            Accept: "application/json",
          },
        })
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };
    fetchdetails();
  }, [dicomID]);

  return (
    <div className="modalBackground">
      <div className="modalContainer-DicomView">
        <div
          className="btn-one-edit-close-dicomview"
          onClick={() => {
            props.setDicomViewModal(false);
          }}
        >
          <span>X</span>
        </div>
        <div className="patient-detial-title">Patient Details</div>
        <div className="Patient-Detail-Container">
          <div className="Patient-Detail-Entry">Id: {data[0]}</div>
          <div className="Patient-Detail-Entry">Name: {data[1]}</div>
          <div className="Patient-Detail-Entry">Modality : {data[2]}</div>
          <div className="Patient-Detail-Entry">Study Date:{data[3]}</div>
          <div className="Patient-Detail-Entry">Age : {data[4]}</div>
          <div className="Patient-Detail-Entry">Sex: {data[5]}</div>
          <div className="Patient-Detail-Entry">Birth Date: {data[6]}</div>
        </div>
        {cornerstoneInitialised && dicomID != -1 && (
          <MyComponent dicomId={dicomID} />
        )}
      </div>
    </div>
  );
}

export default ViewDicomPanel;

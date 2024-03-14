import React, { useEffect, useState } from "react";
import "../styles/DicomUpload.css";
import axios from "axios";

axios.defaults.withCredentials = true;

const DicomUpload = (props) => {
  const [File, setFile] = useState();
  const [ServerDicom, setServerDicom] = useState(-1);

  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };

  //Checking Dicom Status
  useEffect(() => {
    const fetchdata = async () => {
      const response = await axios.get(
        `http://localhost:8080/user/view/${props.HospitalId}`
      );
      console.log(response);
      if (response.data) {
        setServerDicom(response.data[0].dicomId);
      }
    };
    fetchdata();
  }, []);

  //Uploading Dicom
  const UploadDicomFunc = async () => {
    try {
      const formData = new FormData();
      formData.append("file", File);
      if (ServerDicom == -1) {
        const response = await axios.post(
          `http://localhost:8080/user/upload/${props.HospitalId}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
      } else {
        const response = await axios.put(
          `http://localhost:8080/user/update/${ServerDicom}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
      }
      props.SetUploadModal(false);
      console.log("File upload successful:", response.data);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };
  return (
    <div className="modalBackground">
      <div className="modalContainerUpload">
        <div
          className="btn-one-upload-close"
          onClick={() => {
            props.SetUploadModal(false);
          }}
        >
          <span>X</span>
        </div>
        <div className="DicomStatusBox">
          {ServerDicom == -1
            ? "No Dicoms Present"
            : `DICOM already present; uploading will update the current file.`}
        </div>
        <form>
          <input
            className="Select-File-Button"
            type="file"
            name="file"
            onChange={handleFile}
          ></input>
          <div className="Upload-File-Button" onClick={UploadDicomFunc}>
            <span>Upload</span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DicomUpload;

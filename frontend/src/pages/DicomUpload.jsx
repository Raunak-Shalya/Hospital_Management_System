import React, { useState } from "react";
import "../styles/DicomUpload.css";
import axios from "axios";
const DicomUpload = (props) => {
  const [File, setFile] = useState();

  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };

  //Uploading Dicom
  const UploadDicomFunc = async () => {
    try {
      const url = `http://localhost:8080/upload/${props.HospitalId}`;

      const formData = new FormData();
      formData.append("file", File);

      const response = await axios.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

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

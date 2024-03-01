import React, { useEffect, useState } from "react";
import "../styles/toolbar.css";
import HospitalAdd from "../pages/HospitalAdd";
import axios from "axios";

const ToolBar = (props) => {
  const [AddModal, setAddModal] = useState(false);
  const [SearchBoxName, setSearchBoxName] = useState("");
  const [SearchBoxName1, setSearchBoxName1] = useState("");
  const [SearchBoxName2, setSearchBoxName2] = useState("");
  const [SearchBoxID, setSearchBoxID] = useState("");
  const SetDisplayByName = () => {
    props.setDisplayBy("Name");
  };
  const SetDisplayById = () => {
    props.setDisplayBy("Id");
  };

  const handleChangeSearchBarName = (e) => {
    setSearchBoxName(e.target.value);
  };

  const handleChangeSearchBarID = (e) => {
    setSearchBoxID(e.target.value);
  };

  const handleChangeSearchBarName1 = (e) => {
    setSearchBoxName1(e.target.value);
  };

  const handleChangeSearchBarName2 = (e) => {
    setSearchBoxName2(e.target.value);
  };

  const OnClickHandlerAddButton = () => {
    setAddModal(true);
  };

  const OnClickHandlerClearButton = () => {
    props.setCurHospitals(props.Hospitals);
    setSearchBoxID("");
    setSearchBoxName("");
    setSearchBoxName2("");
    setSearchBoxName("");
    document.getElementsByClassName("SearchBox").reset();
  };

  //Searching By Name
  const SearchFunctionName = async () => {
    props.setPageNo(1);
    props.setCurHospitals(
      props.CurHospitals.filter((h) => h.hospitalName.startsWith(SearchBoxName))
    );
  };

  //Searching By ID
  const SearchFunctionID = async () => {
    props.setPageNo(1);
    console.log(props.Hospitals);
    props.setCurHospitals(
      props.CurHospitals.filter((h) => String(h.id).startsWith(SearchBoxID))
    );
  };

  //Searching By Name1
  const SearchFunctionName1 = async () => {
    props.setPageNo(1);
    props.setCurHospitals(
      props.CurHospitals.filter((h) => h.name1.startsWith(SearchBoxName1))
    );
  };

  //Searching By Name2
  const SearchFunctionName2 = async () => {
    props.setPageNo(1);
    props.setCurHospitals(
      props.CurHospitals.filter((h) => h.name2.startsWith(SearchBoxName2))
    );
  };

  const HandleKeyDownName = (e) => {
    if (e.key === "Enter") SearchFunctionName();
  };
  const HandleKeyDownID = (e) => {
    if (e.key === "Enter") SearchFunctionID();
  };
  const HandleKeyDownName1 = (e) => {
    if (e.key === "Enter") SearchFunctionName1();
  };
  const HandleKeyDownName2 = (e) => {
    if (e.key === "Enter") SearchFunctionName2();
  };
  return (
    <div className="ToolBarComponent">
      <div className="SearchComponent">
        <input
          className="SearchBox"
          placeholder="Search Hospital ID"
          onChange={handleChangeSearchBarID}
          onKeyDown={HandleKeyDownID}
        ></input>
        <input
          className="SearchBox"
          placeholder="Search Hospital Name"
          onChange={handleChangeSearchBarName}
          onKeyDown={HandleKeyDownName}
        ></input>
        <input
          className="SearchBox"
          placeholder="Search Address"
          onChange={handleChangeSearchBarName2}
          onKeyDown={HandleKeyDownName2}
        ></input>
        <input
          className="SearchBox"
          placeholder="Search First Person Name"
          onChange={handleChangeSearchBarName1}
          onKeyDown={HandleKeyDownName1}
        ></input>
        <input
          className="SearchBox"
          placeholder="Search Second Person Name"
          onChange={handleChangeSearchBarName2}
          onKeyDown={HandleKeyDownName2}
        ></input>
        {/* <button className="SearchButton" onClick={SearchFunctionID}>
          Search
        </button> */}
      </div>

      <div className="button-66" onClick={OnClickHandlerClearButton}>
        Clear
      </div>

      <button className="button-66" onClick={OnClickHandlerAddButton}>
        + Add
      </button>
      {AddModal && (
        <HospitalAdd
          setAddModal={setAddModal}
          Added={props.Added}
          setAdded={props.setAdded}
          Hospitals={props.Hospitals}
          setHospitals={props.setHospitals}
        />
      )}
    </div>
  );
};

export default ToolBar;

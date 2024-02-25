import React, { useEffect, useState } from "react";
import "../styles/toolbar.css";
import HospitalAdd from "../pages/HospitalAdd";
import axios from "axios";

const ToolBar = (props) => {
  const [AddModal, setAddModal] = useState(false);
  const [SearchBoxName, setSearchBoxName] = useState("");
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

  const OnClickHandlerAddButton = () => {
    setAddModal(true);
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

  const HandleKeyDownName = (e) => {
    if (e.key === "Enter") SearchFunctionName();
  };
  const HandleKeyDownID = (e) => {
    if (e.key === "Enter") SearchFunctionID();
  };
  return (
    <div className="ToolBarComponent">
      <div className="SearchComponent">
        <input
          className="SearchBox"
          placeholder="Search Hospital Name"
          onChange={handleChangeSearchBarName}
          onKeyDown={HandleKeyDownName}
        ></input>
        <input
          className="SearchBox"
          placeholder="Search Hospital ID"
          onChange={handleChangeSearchBarID}
          onKeyDown={HandleKeyDownID}
        ></input>
        {/* <button className="SearchButton" onClick={SearchFunctionID}>
          Search
        </button> */}
      </div>

      <div className="SortComponent">
        <div className="dropdown">
          <button className="dropbtn">Sort By</button>
          <div className="dropdown-content">
            <a onClick={SetDisplayByName}>Name</a>
            <a onClick={SetDisplayById}> Id</a>
          </div>
        </div>
      </div>

      <button className="button-71" onClick={OnClickHandlerAddButton}>
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

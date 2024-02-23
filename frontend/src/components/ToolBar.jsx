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
    try {
      const response = await axios.get("http://localhost:8080/SearchByName", {
        params: {
          query: SearchBoxName,
        },
      });
      props.setHospitals(response.data);
    } catch (error) {
      console.log("Error in retrieving data from backend for Searching");
    }
  };

  //Searching By ID
  const SearchFunctionID = async () => {
    try {
      const response = await axios.get("http://localhost:8080/SearchByID", {
        params: {
          query: SearchBoxID,
        },
      });
      props.setHospitals(response.data);
    } catch (error) {
      console.log("Error in retrieving data from backend for Searching");
    }
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
        />
      )}
    </div>
  );
};

export default ToolBar;

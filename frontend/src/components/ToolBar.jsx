import React, { useEffect, useState } from "react";
import "../styles/toolbar.css";
import HospitalAdd from "../pages/HospitalAdd";
import axios from "axios";

const ToolBar = (props) => {
  const [AddModal, setAddModal] = useState(false);
  const [SearchBox, setSearchBox] = useState("");
  const SetDisplayByName = () => {
    props.setDisplayBy("Name");
  };
  const SetDisplayById = () => {
    props.setDisplayBy("Id");
  };

  const handleChangeSearchBar = (e) => {
    setSearchBox(e.target.value);
  };

  const OnClickHandlerAddButton = () => {
    setAddModal(true);
  };

  //Searching By Name
  const SearchFunction = async () => {
    try {
      const response = await axios.get("http://localhost:8080/search", {
        params: {
          query: SearchBox,
        },
      });
      // console.log(response);
      props.setHospitals(response.data);
      // console.log(props.CurHospitals);
      // props.CurHospitals = props.Hospitals;
      // console.log(CurHospitals);
    } catch (error) {
      console.log("Error in retrieving data from backend for Searching");
    }
  };

  const HandleKeyDown = (e) => {
    if (e.key === "Enter") SearchFunction();
  };
  return (
    <div className="ToolBarComponent">
      <div className="SearchComponent">
        <input
          className="SearchBox"
          placeholder="Search Hospital"
          onChange={handleChangeSearchBar}
          onKeyDown={HandleKeyDown}
        ></input>
        <button className="SearchButton" onClick={SearchFunction}>
          Search
        </button>
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
      {AddModal && <HospitalAdd setAddModal={setAddModal} />}
    </div>
  );
};

export default ToolBar;

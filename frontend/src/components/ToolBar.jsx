import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/toolbar.css";

const ToolBar = (props) => {
  const navigate = useNavigate();
  const SetDisplayByName = () => {
    props.setDisplayBy("Name");
  };
  const SetDisplayById = () => {
    props.setDisplayBy("Id");
  };

  const handleChangeSearchBar = (e) => {
    props.setSearchBox(e.target.value);
  };

  const OnClickHandlerAddButton = () => {
    navigate(`/Add`);
  };
  return (
    <div className="ToolBarComponent">
      <div className="SearchComponent">
        <input
          className="SearchBox"
          placeholder="Search Hospital"
          onChange={handleChangeSearchBar}
        ></input>
        <button className="SearchButton">Search</button>
      </div>

      <div className="SortComponent">
        <div className="dropdown">
          <button className="dropbtn">SortBy</button>
          <div className="dropdown-content">
            <a onClick={SetDisplayByName}>Name</a>
            <a onClick={SetDisplayById}> Id</a>
          </div>
        </div>
      </div>

      <button className="button-71" onClick={OnClickHandlerAddButton}>
        + Add
      </button>
    </div>
  );
};

export default ToolBar;

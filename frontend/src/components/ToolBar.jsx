import React, { useEffect, useState } from "react";
import "../styles/toolbar.css";
const ToolBar = (props) => {
  const SetDisplayByName = () => {
    props.setDisplayBy("Name");
  };
  const SetDisplayById = () => {
    props.setDisplayBy("Id");
  };
  return (
    <div className="ToolBarComponent">
      <div className="SearchComponent">
        <input className="SearchBox" placeholder="Search Hospital"></input>
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

      <button className="button-71">+ Add</button>
    </div>
  );
};

export default ToolBar;

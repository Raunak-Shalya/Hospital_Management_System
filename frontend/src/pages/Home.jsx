import React from "react";
import "../styles/Home.scss";
import NavBar from "../components/Navbar";
const Home = () => {
  return (
    <div className="box">
      <NavBar />

      <div className="homebox">
        <div className="homebackground"> </div>
        <button className="button-71">+ Add</button>
      </div>
    </div>
  );
};

export default Home;

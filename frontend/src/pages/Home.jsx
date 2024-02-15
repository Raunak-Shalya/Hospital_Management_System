import { React, useState, useEffect } from "react";
import "../styles/Home.scss";
import NavBar from "../components/Navbar";
import axios from "axios";
import HospitalBox from "../components/HospitalBox";
import ToolBar from "../components/ToolBar";
const baseURL = "http://localhost:8080";

const Home = () => {
  const [Hospitals, setHospitals] = useState([]);
  const [DisplayBy, setDisplayBy] = useState("Id");
  const [SearchBox, setSearchBox] = useState("");

  //Axios call to Backend for SortBy Functionality
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/sortBy${DisplayBy}`
        );
        setHospitals(response.data);
      } catch (error) {
        console.log("Error in retrieving data from backend for Sorting");
      }
    };
    fetchdata();
  }, [DisplayBy]);

  //Axios call to Backend for Search Functionality
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get("http://localhost:8080/search", {
          params: {
            query: SearchBox,
          },
        });
        setHospitals(response.data);
      } catch (error) {
        console.log("Error in retrieving data from backend for Searching");
      }
    };
    fetchdata();
  }, [SearchBox]);

  return (
    <div className="box">
      <NavBar />
      <div className="homebox">
        <ToolBar setDisplayBy={setDisplayBy} setSearchBox={setSearchBox} />
        <div className="HospitalsList">
          {Hospitals.map((Hospital) => (
            <HospitalBox Hospital={Hospital} key={Hospital.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

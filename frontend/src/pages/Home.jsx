import { React, useState, useEffect } from "react";
import "../styles/Home.scss";
import NavBar from "../components/Navbar";
import axios from "axios";
import HospitalBox from "../components/HospitalBox";
import ToolBar from "../components/ToolBar";
const baseURL = "http://localhost:8080";

const Home = () => {
  const [Hospitals, setHospitals] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get("http://localhost:8080/page/0");
        setHospitals(response.data.content);
      } catch (error) {
        console.log("Error in retrieving data from backend");
      }
    };
    fetchdata();
  }, [Hospitals]);

  return (
    <div className="box">
      <NavBar />
      <div className="homebox">
        <ToolBar />
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

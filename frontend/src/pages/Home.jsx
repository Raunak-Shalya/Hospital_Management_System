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
  const [PageNo, setPageNo] = useState(1);
  let CurHospitals;
  //Variables for Implementing Pagination
  const totalPages = Math.ceil(Hospitals.length / 6);
  const startIndex = (PageNo - 1) * 6;
  const endIndex = startIndex + 6;
  CurHospitals = Hospitals.slice(startIndex, endIndex);

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
  }, [DisplayBy, PageNo]);

  const PageNoDec = () => {
    if (PageNo != 1) setPageNo(PageNo - 1);
    console.log(PageNo);
  };

  const PageNoInc = () => {
    if (PageNo != totalPages) setPageNo(PageNo + 1);
  };

  return (
    <div className="box">
      <NavBar />
      <div className="homebox">
        <ToolBar
          setDisplayBy={setDisplayBy}
          setHospitals={setHospitals}
          Hospitals={Hospitals}
        />
        <div className="HospitalsList">
          {CurHospitals.map((Hospital) => (
            <HospitalBox Hospital={Hospital} key={Hospital.id} />
          ))}
        </div>
        <div className="PaginationBox">
          <div className="btn btn-one" onClick={PageNoDec}>
            <span> &lt;&lt; </span>
          </div>
          <div> {PageNo}</div>
          <div className="btn btn-one" onClick={PageNoInc}>
            <span>&gt;&gt;</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

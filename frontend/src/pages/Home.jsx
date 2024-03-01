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
  const [Added, setAdded] = useState(0);
  let refresh = false;

  const [CurHospitals, setCurHospitals] = useState([]);
  const [PageHospitals, setPageHospitals] = useState([]);
  //Variables for Implementing Pagination
  const totalPages = Math.ceil(Hospitals.length / 9);
  let startIndex = (PageNo - 1) * 9;
  let endIndex = startIndex + 9;

  //Axios call to Backend for Fetching Data
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
  }, [refresh]);

  //Updating CurHospital onChange Hospitals
  useEffect(() => {
    setCurHospitals(Hospitals);
  }, [Hospitals]);
  //Updating PageHospital onChange CurHospital
  useEffect(() => {
    startIndex = (PageNo - 1) * 9;
    setPageHospitals(CurHospitals.slice(startIndex, endIndex));
  }, [CurHospitals]);

  //Implmented Sorting
  useEffect(() => {
    setPageNo(1);
    if (DisplayBy == "Name") {
      setCurHospitals(
        [...CurHospitals].sort((a, b) =>
          a.hospitalName > b.hospitalName ? 1 : -1
        )
      );
    } else {
      setCurHospitals([...CurHospitals].sort((a, b) => (a.id > b.id ? 1 : -1)));
      setPageHospitals(CurHospitals.slice(startIndex, endIndex));
    }
  }, [DisplayBy]);

  const PageNoDec = () => {
    if (PageNo != 1) setPageNo(PageNo - 1);
  };

  const PageNoInc = () => {
    if (PageNo != Math.ceil(CurHospitals.length / 9)) setPageNo(PageNo + 1);
  };

  useEffect(() => {
    startIndex = (PageNo - 1) * 9;
    setPageHospitals(CurHospitals.slice(startIndex, endIndex));
  }, [PageNo]);

  return (
    <div className="box">
      <NavBar />
      <div className="homebox">
        <ToolBar
          setDisplayBy={setDisplayBy}
          setHospitals={setHospitals}
          Hospitals={Hospitals}
          CurHospitals={CurHospitals}
          setCurHospitals={setCurHospitals}
          PageHospitals={PageHospitals}
          setPageHospitals={setPageHospitals}
          Added={Added}
          setPageNo={setPageNo}
          setAdded={setAdded}
        />
        <div className="ListTitles">
          <div className="Title1">ID</div>
          <div className="Title2">Name</div>
          <div className="Title3">First Person Name</div>
          <div className="Title4">Second Person Name</div>
          <div className="Title5">Hospital Details</div>
          <div className="Title6">DICOM</div>
        </div>
        <div className="HospitalsList">
          {PageHospitals.map((Hospital) => (
            <HospitalBox Hospital={Hospital} key={Hospital.id} />
          ))}
        </div>
        <div className="PaginationBox">
          <div className="btn btn-one" onClick={PageNoDec}>
            <span> &lt;&lt; </span>
          </div>
          <div className="PaginationNumber"> {PageNo}</div>
          <div className="btn btn-one" onClick={PageNoInc}>
            <span>&gt;&gt;</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

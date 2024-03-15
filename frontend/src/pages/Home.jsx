import { React, useState, useEffect } from "react";
import "../styles/Home.scss";
import NavBar from "../components/Navbar";
import axios from "axios";
import HospitalBox from "../components/HospitalBox";
import ToolBar from "../components/ToolBar";
const baseURL = "http://localhost:8080";

axios.defaults.withCredentials = true;

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
          `http://localhost:8080/user/sortBy${DisplayBy}`
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
    console.log("Page");
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

  //Sorting Functions

  const ascsortid = () => {
    setCurHospitals(CurHospitals.sort((a, b) => (a.id > b.id ? 1 : -1)));
    startIndex = (PageNo - 1) * 9;
    setPageHospitals(CurHospitals.slice(startIndex, endIndex));
  };

  const dscsortid = () => {
    setCurHospitals(CurHospitals.sort((a, b) => (a.id > b.id ? -1 : 1)));
    startIndex = (PageNo - 1) * 9;
    setPageHospitals(CurHospitals.slice(startIndex, endIndex));
  };

  const ascsorthname = () => {
    setCurHospitals(
      CurHospitals.sort((a, b) => (a.hospitalName > b.hospitalName ? 1 : -1))
    );
    startIndex = (PageNo - 1) * 9;
    setPageHospitals(CurHospitals.slice(startIndex, endIndex));
  };

  const dscsorthname = () => {
    setCurHospitals(
      CurHospitals.sort((a, b) => (a.hospitalName > b.hospitalName ? -1 : 1))
    );
    startIndex = (PageNo - 1) * 9;
    setPageHospitals(CurHospitals.slice(startIndex, endIndex));
  };

  const ascsortad = () => {
    setCurHospitals(
      CurHospitals.sort((a, b) =>
        a.hospitalAddress > b.hospitalAddress ? 1 : -1
      )
    );
    startIndex = (PageNo - 1) * 9;
    setPageHospitals(CurHospitals.slice(startIndex, endIndex));
  };

  const dscsortad = () => {
    setCurHospitals(
      CurHospitals.sort((a, b) =>
        a.hospitalAddress > b.hospitalAddress ? -1 : 1
      )
    );
    startIndex = (PageNo - 1) * 9;
    setPageHospitals(CurHospitals.slice(startIndex, endIndex));
  };

  const ascsortname1 = () => {
    setCurHospitals(CurHospitals.sort((a, b) => (a.name1 > b.name1 ? 1 : -1)));
    startIndex = (PageNo - 1) * 9;
    setPageHospitals(CurHospitals.slice(startIndex, endIndex));
  };

  const dscsortname1 = () => {
    setCurHospitals(CurHospitals.sort((a, b) => (a.name1 > b.name1 ? -1 : 1)));
    startIndex = (PageNo - 1) * 9;
    setPageHospitals(CurHospitals.slice(startIndex, endIndex));
  };

  const ascsortname2 = () => {
    setCurHospitals(CurHospitals.sort((a, b) => (a.name2 > b.name2 ? 1 : -1)));
    startIndex = (PageNo - 1) * 9;
    setPageHospitals(CurHospitals.slice(startIndex, endIndex));
  };

  const dscsortname2 = () => {
    setCurHospitals(CurHospitals.sort((a, b) => (a.name2 > b.name2 ? -1 : 1)));
    startIndex = (PageNo - 1) * 9;
    setPageHospitals(CurHospitals.slice(startIndex, endIndex));
  };

  const PageNoDec = () => {
    if (PageNo != 1) setPageNo(PageNo - 1);
  };
  const PageNoDecs = () => {
    setPageNo(Math.max(1, PageNo - 3));
  };

  const PageNoInc = () => {
    if (PageNo != Math.ceil(CurHospitals.length / 9)) setPageNo(PageNo + 1);
  };

  const PageNoIncs = () => {
    setPageNo(Math.min(totalPages, PageNo + 3));
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
          <button className="uparrow1" onClick={ascsortid}>
            {" "}
            &#8593;{" "}
          </button>
          <button className="downarrow" onClick={dscsortid}>
            {" "}
            &#8595;{" "}
          </button>
          <div className="Title2">Name</div>
          <button className="uparrow2" onClick={ascsorthname}>
            {" "}
            &#8593;{" "}
          </button>
          <button className="downarrow" onClick={dscsorthname}>
            {" "}
            &#8595;{" "}
          </button>
          <div className="Title3">Address</div>
          <button className="uparrow3" onClick={ascsortad}>
            {" "}
            &#8593;{" "}
          </button>
          <button className="downarrow" onClick={dscsortad}>
            {" "}
            &#8595;{" "}
          </button>
          <div className="Title4">First Person</div>
          <button className="uparrow4" onClick={ascsortname1}>
            {" "}
            &#8593;{" "}
          </button>
          <button className="downarrow" onClick={dscsortname1}>
            {" "}
            &#8595;{" "}
          </button>
          <div className="Title5">Second Person</div>
          <button className="uparrow5" onClick={ascsortname2}>
            {" "}
            &#8593;{" "}
          </button>
          <button className="downarrow" onClick={dscsortname2}>
            {" "}
            &#8595;{" "}
          </button>
          <div className="Title6">Hospital Details</div>
          <div className="Title7">DICOM</div>
        </div>
        <div className="HospitalsList">
          {PageHospitals.map((Hospital) => (
            <HospitalBox Hospital={Hospital} key={Hospital.id} />
          ))}
        </div>
        <div className="PaginationBox">
          <div className="btn btn-one" onClick={PageNoDecs}>
            <span> &lt;&lt;&lt; </span>
          </div>
          <div className="btn btn-one" onClick={PageNoDec}>
            <span> &lt;&lt; </span>
          </div>
          <div className="PaginationNumber">
            {" "}
            {PageNo} / {totalPages}
          </div>
          <div className="btn btn-one" onClick={PageNoInc}>
            <span>&gt;&gt;</span>
          </div>
          <div className="btn btn-one" onClick={PageNoIncs}>
            <span>&gt;&gt;&gt;</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

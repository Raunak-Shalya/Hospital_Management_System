import { React, useState, useEffect } from "react";
import "../styles/Home.scss";
import NavBar from "../components/Navbar";
import axios from "axios";
const baseURL = "http://localhost:8080";

const Home = () => {
  const [myData, setMyData] = useState([]);

  async function fetchData() {
    try {
      const response = await axios.get("http://localhost:8080/page/0");
      setMyData(response.data);
    } catch (error) {
      console.log("Axios API Failed");
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="box">
      <NavBar />
      <div className="homebox">
        <button className="button-71">+ Add</button>
      </div>
    </div>
  );
};

export default Home;

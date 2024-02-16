import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Home from "./pages/Home";
import HospitalEdit from "./pages/HospitalEdit";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/edit/*" element={<HospitalEdit />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

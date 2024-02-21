import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import LoginPage from "./pages/LoginPage.jsx";
import Protected from "./components/Protected.jsx";
import Home from "./pages/Home.jsx";
import HospitalEdit from "./pages/HospitalEdit";
import HospitalAdd from "./pages/HospitalAdd";
import HospitalView from "./pages/HospitalView";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="login" element={<LoginPage />} />
      <Route path="/Add" element={<HospitalAdd />}></Route>
      <Route path="/edit/*" element={<HospitalEdit />} />
      <Route path="/view/*" element={<HospitalView />} />
      <Route path="/" element={<Protected />}>
        <Route path="/" index element={<Home />} />
      </Route>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

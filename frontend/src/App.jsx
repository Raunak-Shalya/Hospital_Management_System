import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";
import LoginPage from "./pages/LoginPage.jsx";
import Protected from "./components/Protected.jsx";
import Home from "./pages/Home.jsx";
import HospitalEdit from "./pages/HospitalEdit";
import HospitalAdd from "./pages/HospitalAdd";
import HospitalView from "./pages/HospitalView";

function App() {
  const [auth, setauth] = useState(false);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/login"
            element={<LoginPage auth={auth} setauth={setauth} />}
          />
          <Route
            path="/"
            element={auth ? <Home /> : <Navigate to="/login" replace />}
          />
          <Route
            path="/Add/*"
            element={auth ? <HospitalAdd /> : <Navigate to="/login" replace />}
          />
          <Route
            path="/edit/*"
            element={auth ? <HospitalEdit /> : <Navigate to="/login" replace />}
          />
          <Route
            path="/view/*"
            element={auth ? <HospitalView /> : <Navigate to="/login" replace />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

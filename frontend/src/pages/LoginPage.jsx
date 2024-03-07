import React, { useState } from "react";
import "../styles/LoginPage.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    if (email == "") windows.alert("Enter Email To Login");
    if (password == "") windows.alert("Enter Password To Login");
    e.preventDefault();
    try {
      const authdata = { username: email, password: password };
      console.log(authdata);
      const response = await axios.post(
        "http://localhost:8080/auth/signin",
        authdata
      );

      if (response.data.result == "SUCCESS") {
        localStorage.setItem("jwtToken", response.data.token);
        await props.setauth(true);
        navigate("/");
      }
    } catch (error) {
      alert("Invalid Username or Password");
    }
  };
  return (
    <div className="c1">
      <div className="container">
        <form action="">
          <h1>Login</h1>

          <div className="input-box">
            <input
              type="text"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <i className="bx bxs-user"></i>
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <i className="bx bxs-lock-alt"></i>
          </div>

          {/* <div className="remember-forgot">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#">Forgot password?</a>
          </div> */}

          <button type="submit" className="btn" onClick={handleSubmit}>
            Login
          </button>

          {/* <div className="register-link">
            <p>
              Don't have an account? <a href="#">Register here!</a>
            </p>
          </div> */}
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

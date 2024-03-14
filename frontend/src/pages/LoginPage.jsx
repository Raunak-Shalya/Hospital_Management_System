import React, { useState } from "react";
import "../styles/LoginPage.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Error1, SetError1] = useState(false);
  const [ErrorLine, SetErrorLine] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const authdata = { username: email, password: password };
      console.log(authdata);
      const response = await axios.post(
        "http://localhost:8080/auth/signin",
        authdata
      );

      console.log(response);
      if (response.data.result == "SUCCESS") {
        // localStorage.setItem("jwtToken", response.data.token);
        await props.setauth(true);
        navigate("/");
      } else throw new Exception();
    } catch (error) {
      SetError1(true);
      if (email == "") SetErrorLine("*Username cannot be empty");
      else if (password == "") SetErrorLine("*Password cannot be empty");
      else SetErrorLine("*Invalid Username or Password");
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
              placeholder="Username"
              onChange={(e) => setEmail(e.target.value)}
            />
            <i className="bx bxs-user"></i>
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            {Error1 && <p className="error1">{ErrorLine}</p>}
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

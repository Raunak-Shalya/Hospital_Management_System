import React from "react";
import "../styles/LoginPage.css";

const LoginPage = () => {
  return (
    <div className="c1">
      <div className="container">
        <form action="">
          <h1>Login</h1>

          <div className="input-box">
            <input type="text" placeholder="username" required />
            <i className="bx bxs-user"></i>
          </div>
          <div className="input-box">
            <input type="password" placeholder="password" required />
            <i className="bx bxs-lock-alt"></i>
          </div>

          <div className="remember-forgot">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#">Forgot password?</a>
          </div>

          <button type="submit" className="btn">
            Login
          </button>

          <div className="register-link">
            <p>
              Don't have an account? <a href="#">Register here!</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

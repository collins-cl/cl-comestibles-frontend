import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../LogIn/Login.css";
import { Alert } from "@mui/material";
import Navbar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import axios from "axios";

const Login = ({ setisLogin }) => {
  const navigate = useNavigate();

  const initialState = {
    email: "",
    password: "",
  };

  const [state, setState] = useState(initialState);
  const [success, setSuccess] = useState(false);
  const [loginsuccess, setLoginSuccess] = useState("lol");
  const [removelogin, setRemoveLogin] = useState(false);
  const [message, setMessage] = useState(false);
  const [setmessage, setSetMessage] = useState(false);

  const { email, password } = state;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const response = axios
      .post("http://localhost:5000/api/users/login", {
        email,
        password,
      })
      .then((result) => {
        if (result.data.error) {
          setSetMessage(true);
          setMessage(result.data.error);
        } else {
          setSuccess(true);
          setisLogin();
          setState(initialState);
          setLoginSuccess(result.data.success);
          setSetMessage(false)
          setRemoveLogin(true);
          setTimeout(() => {
            navigate("/");
          }, 3000);
          sessionStorage.setItem("accessToken", result.data.accessToken);
        }
      })
      .catch((result) => {
        console.log(result.data.error);
      });
  };

  return (
    <>
      <div className="login">
        <Navbar />
        <div className="login-container">
          <div className="login-section">
            <div className="login-head">HOW NICE TO SEE YOU AGAIN!</div>

            <div className="login-info">
              By entering you will be able to know the status of your orders,
              the products stored in your cart and soo much more!.
            </div>

            <div className="login-form">
              <form action="post" onSubmit={handleSubmit}>
                <div className={removelogin ? "true" : "false"}>
                  <Alert severity="success" sx={{ width: "100%" }}>
                    {loginsuccess}
                  </Alert>
                </div>
                <div className="log-email">
                  <label htmlFor="email">EMAIL</label>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    placeholder="example@mail.com"
                    required
                  />
                </div>

                <div className="log-password">
                  <label htmlFor="password" className="f-password">
                    <a href="/">Did you forget your password?</a>

                    <span>PASSWORD</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                    placeholder="password"
                    required
                  />
                </div>

                <div className={setmessage ? "true" : "false"}>
                  <Alert severity="error">{message}</Alert>
                </div>

                <div className="login-button">
                  <button>LOG IN</button>
                </div>
              </form>
            </div>
          </div>

          <div className="login-account-link">
            Don't have an account? <a href="/register">Register</a> with us now!
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Login;

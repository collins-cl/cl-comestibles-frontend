import React from "react";
import { Link } from "react-router-dom";
import "../LogIn/Login.css";
import { Alert } from "@mui/material";
import Navbar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import useUserContext from "../../context/userContext";

const Login = () => {
  const {
    message,
    setmessage,
    handleChange,
    handleSubmit,
    password,
    email,
    loginsuccess,
    removelogin,
  } = useUserContext();

  const handleChangeHandler = (e) => {
    handleChange(e);
  };

  const handleSubmitHandler = (e) => {
    handleSubmit(e);
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
              <form action="post" onSubmit={handleSubmitHandler}>
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
                    onChange={handleChangeHandler}
                    placeholder="example@mail.com"
                    required
                  />
                </div>

                <div className="log-password">
                  <label htmlFor="password" className="f-password">
                    <Link to="/forgetpassword">
                      Did you forget your password?
                    </Link>

                    <span>PASSWORD</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChangeHandler}
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
            Don't have an account? <Link to="/register">Register</Link> with us
            now!
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Login;

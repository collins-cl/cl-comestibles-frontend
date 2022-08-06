import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../LogIn/Login.css";
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
        console.log(result.data);
        if (result.data.error) {
          alert(result.data.error);
        } else {
          setSuccess(true);
          setisLogin();
        }
      })
      .catch((result) => {
        console.log(result.data.error);
      });
  };

  return (
    <>
      {success ? (
        setTimeout(() => {
          alert("login successful");
          navigate("/");
        }, 1000)
      ) : (
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

                  <div className="login-button">
                    <button>LOG IN</button>
                  </div>
                </form>
              </div>
            </div>

            <div className="login-account-link">
              Don't have an account? <a href="/register">Register</a> with us
              now!
            </div>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};

export default Login;

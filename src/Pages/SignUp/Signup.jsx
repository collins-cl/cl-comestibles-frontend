import React, { useState } from "react";
import "./Signup.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";

const Signup = () => {
  const navigate = useNavigate();

  const initialValues = {
    firstname: "",
    surname: "",
    email: "",
    password: "",
  };

  const [state, setState] = useState(initialValues);

  const { firstname, surname, email, password } = state;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstname || !surname || !email || !password) {
      alert("some inputs are missing");
    } else {
      const res = axios
        .post("http://localhost:5000/api/users/register", {
          firstname,
          surname,
          email,
          password,
        })
        .then(() => {
          setState({
            firstname: "",
            surname: "",
            email: "",
            password: "",
          });
        });
      // setTimeout(() => {
      //   navigate("/login");
      // }, 3000);
      console.log(res);
    }
  };

  return (
    <div className="signup">
      <NavBar />
      <div className="signup-container">
        <div className="signup-section">
          <div className="signup-head">CREATE ACCOUNT</div>
          <div className="signup-info">
            Create your account, it is free and you can order your eatables from
            anywhere nationwide
          </div>
          <div className="signup-form">
            <form action="post" onSubmit={handleSubmit} >
              <div className="log-text">
                <label htmlFor="firstname">First Name</label>
                <input
                  type="text"
                  name="firstname"
                  value={firstname}
                  onChange={handleChange}
                  placeholder="My First Name"
                  required
                />
              </div>
              <div className="log-surname">
                <label htmlFor="Surname">Surname</label>
                <input
                  type="text"
                  name="surname"
                  value={surname}
                  onChange={handleChange}
                  placeholder="My Surname"
                  required
                />
              </div>

              <div className="log-email">
                <label htmlFor="email">Email</label>
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
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                  placeholder="password"
                  required
                />
              </div>

              <div className="signup-button">
                <button type="submit">CREATE ACCOUNT</button>
              </div>
            </form>
          </div>
        </div>

        <div className="create-account-link">
          Already have an account? <a href="/login">Log In</a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;

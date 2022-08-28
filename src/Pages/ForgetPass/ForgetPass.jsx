import React, { useState } from "react";
import CartNav from "../../Components/CartNav/CartNav";
import "../ForgetPass/Forgetpass.css";
import Key from "../../Components/Assets/key.svg";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const ForgetPass = () => {
  const initialState = { email: "" };
  const [state, setState] = useState(initialState);

  const { email } = state;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setState(initialState);
  };

  return (
    <div className="forgetpass">
      <CartNav />
      <div className="forgotpass-cont">
        <div className="password-img">
          <img width={70} height={70} src={Key} alt="" />
        </div>

        <div className="password-head">Forgot password?</div>

        <div className="password-info">
          No worries, we'll send you reset instructions.
        </div>

        <form action="post" onSubmit={handleSubmit}>
          <div className="forget-email">
            <label htmlFor="forget-email"></label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
            />
          </div>

          <div>
            <button>Reset Password</button>
          </div>
        </form>

        <div className="back-to-login">
          <Link to="/login">
            <FaArrowLeft style={{ fontSize: "14px" }} />
            <div className="text">Back to log in</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgetPass;

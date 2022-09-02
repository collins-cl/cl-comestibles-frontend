import React, { useState } from "react";
import CartNav from "../../Components/CartNav/CartNav";
import "../ResetPass/Resetpass.css";
import KeyGold from "../../Components/Assets/keygold.svg";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import { Alert } from "@mui/material";

const Resetpass = () => {
  const initialState = {
    otpcode: "",
    newpassword: "",
  };

  const [state, setState] = useState(initialState);
  const [show, setShow] = useState(false);

  const open = <FaEye className="eye" onClick={() => setShow(!show)} />;
  const close = <FaEyeSlash className="eye" onClick={() => setShow(!show)} />;

  const handleClick = () => {
    setShow(!show);
  };

  const { otpcode, newpassword } = state;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put("http://localhost:5000/api/users/resetpassword", {
      otpcode,
      newpassword,
    });
  };

  return (
    <div className="reset">
      <CartNav />
      <div className="reset-cont">
        <div className="reset-img">
          <img width={70} height={70} src={KeyGold} alt="" />
        </div>

        <div className="reset-head">Set new password</div>

        <div className="info">
          Your new password must be different from the previously used
          passwords.
        </div>

        <form action="post" onSubmit={handleSubmit}>
          <div className="otp">
            <label htmlFor="otp">OTP Code</label>
            <input
              type="password"
              name="otpcode"
              value={otpcode}
              onChange={handleChange}
              placeholder="OTP code sent to email"
              required
            />
          </div>

          <div className="new-pass">
            <label htmlFor="new-pass">New Password</label>
            <input
              type={show ? "text" : "password"}
              name="newpassword"
              value={newpassword}
              onChange={handleChange}
              placeholder="New password"
              required
            />

            <div className="eye" onClick={handleClick}>
              {show ? open : close}
            </div>
          </div>

          <div>
            <button type="submit">Submit</button>
          </div>
        </form>

        {/* <div className="back-to-login">
          <Link to="/login">
            <FaArrowLeft style={{ fontSize: "14px" }} />
            <div className="text">Back to log in</div>
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default Resetpass;

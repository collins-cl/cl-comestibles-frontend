import React from "react";
import "../PasswordSuccess/PassSuccess.css";
import NavBar from "../NavBar/NavBar";
import CartNav from "../CartNav/CartNav";
import { Link } from "react-router-dom";
import SuccessSvg from "../Assets/success.svg";
import { FaArrowLeft } from "react-icons/fa";

const PassSuccess = () => {
  return (
    <div className="passwordsuccess">
      <CartNav />
      <div className="success-container">
        <div className="success-img">
          <img width={70} height={70} src={SuccessSvg} alt="" />
        </div>

        <div className="success-head">Check your email</div>

        <div className="info">We sent a password reset link to</div>

        <div className="resend">
          <div>Didn't get our email? </div>
          <div>
            <Link to="/forgetpassword">Click to resend</Link>
          </div>
        </div>

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

export default PassSuccess;

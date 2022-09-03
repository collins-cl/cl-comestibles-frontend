import React, { useState, useEffect } from "react";
import CartNav from "../../Components/CartNav/CartNav";
import "../ForgetPass/Forgetpass.css";
import Key from "../../Components/Assets/key.svg";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import PassSuccess from "../../Components/PasswordSuccess/PassSuccess";
import axios from "axios";
import { Alert } from "@mui/material";

const ForgetPass = () => {
  // const navigate = useNavigate();

  const initialState = { email: "" };
  const [state, setState] = useState(initialState);
  const [message, setMessage] = useState("");
  const [err, setErr] = useState(false);
  const [success, setSuccess] = useState("");
  const [suc, setSuc] = useState(false);
  const [show, setShow] = useState(true);

  const { email } = state;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTimeout(() => {
      setShow(false);
    }, 4000);
    // await axios
    //   .post("http://localhost:5000/api/users/forgetpassword", {
    //     email,
    //   })
    //   .then((result) => {
    //     if (result.data.error) {
    //       setState(initialState);
    //       setErr(true);
    //       setSuc(false);
    //       setMessage(result.data.error);
    //       setShow(true);
    //     } else {
    //       setSuc(true);
    //       setErr(false);
    //       setSuccess(result.data.success);
    //       setState(initialState);
    //       if (result.data.success) {
    //         setTimeout(() => {
    //           setShow(false);
    //         }, 4000);
    //       } else {
    //         setShow(true);
    //       }
    //     }
    //   });
  };

  return (
    <div className="forgetpass">
      <CartNav />
      {show ? (
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

            <div className={err ? "true" : "false"}>
              <Alert severity="error">{message}</Alert>
            </div>

            <div className={suc ? "true" : "false"}>
              <Alert severity="success">{success}</Alert>
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
      ) : (
        <PassSuccess setShow={setShow} />
      )}
    </div>
  );
};

export default ForgetPass;

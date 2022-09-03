import React, { useState } from "react";
import CartNav from "../../Components/CartNav/CartNav";
import "../ResetPass/Resetpass.css";
import KeyGold from "../../Components/Assets/keygold.svg";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import { Alert } from "@mui/material";

const Resetpass = () => {
  const initialState = {
    otpcode: "",
    newpassword: "",
  };

  const navigate = useNavigate();

  const [state, setState] = useState(initialState);
  const [show, setShow] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [err, setErr] = useState(false);
  const [suc, setSuc] = useState(false);

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
    setTimeout(() => {
      navigate("/login");
    }, 2000);
    // await axios
    //   .put("http://localhost:5000/api/users/resetpassword", {
    //     otpcode,
    //     newpassword,
    //   })
    //   .then((result) => {
    //     if (result.data.error) {
    //       setError(result.data.error);
    //       setErr(true);
    //       setSuc(false)
    //     } else {
    //       setState(initialState);
    //       setSuc(true);
    //       setErr(false);
    //       if (result.data.success) {
    //         setSuccess(result.data.success);
    //         setTimeout(() => {
    //           navigate("/login");
    //         }, 2000);
    //       }
    //     }
    //   });
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

          <div className={err ? "true" : "false"}>
            <Alert severity="error">{error}</Alert>
          </div>

          <div className={suc ? "true" : "false"}>
            <Alert severity="success">{success}</Alert>
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

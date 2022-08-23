import React from "react";
import "../ProfileIcon/PI.css";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import { FaUser } from "react-icons/fa";

function ProfileIcon() {
  const LoggedIn = () => {
    return (
      <div>
        <Link to="/profile">
          <FaUser className="user-icon" />
        </Link>
      </div>
    );
  };

  const NotLoggedIn = () => {
    return (
      <div>
        <Link to="/login">
          <FaUser className="user-icon" />
        </Link>
      </div>
    );
  };

  return (
    <div className="profileicon">
      <IconButton
        aria-label="profile"
        size="medium"
        sx={{ width: "40px", height: "40px" }}
      >
        <div>
          {localStorage.getItem("accessToken") ? <LoggedIn /> : <NotLoggedIn />}
        </div>
      </IconButton>
    </div>
  );
}

export default ProfileIcon;

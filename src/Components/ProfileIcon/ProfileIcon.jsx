import React from "react";
import '../ProfileIcon/PI.css'
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import { FaUser } from "react-icons/fa";


function ProfileIcon() {

  return (
    <div className="profileicon">
      <IconButton to="/login" component={Link} size="large" aria-label="profile">
        <FaUser  className="user-icon" />
      </IconButton>
    </div>
  );
}

export default ProfileIcon;

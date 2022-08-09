import React, { useState, useEffect } from "react";
import "../ProfileIcon/PI.css";
import { Link } from "react-router-dom";
import { IconButton, Avatar } from "@mui/material";
import { FaTimes, FaUser } from "react-icons/fa";


function ProfileIcon({ profile }) {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  const profileAvatar = <FaUser className="user-icon" onClick={handleClick} />;
  const profileAvatarClose = (
    <FaTimes className="user-icon" onClick={handleClick} />
  );

  //logout function
  const logOut = () => {
    localStorage.removeItem("accessToken");
  };

  

  return (
    <div className="profileicon">
      <div onClick={handleClick}>
        <IconButton size="large" aria-label="profile ">
          {open ? profileAvatarClose : profileAvatar}
        </IconButton>
      </div>

      <div className={open ? "modalopen" : "modalclose"}>
        {localStorage.getItem("accessToken") ? (
          <div>
            <div className="modalhead">Account Information</div>
            <div className="modalimage">
              <Avatar sx={{ bgcolor: "blue" }}>
                <FaUser />
              </Avatar>
            </div>
            <div className="modaldetails">{profile.firstname} {profile.surname}</div>

            <div className="modalemail">{profile.email}</div>

            <div className="modallogout">
              <a href="/" onClick={logOut}>
                Log Out
              </a>
            </div>
          </div>
        ) : (
          <div className="redirect">
            Not Logged In? <Link to="/login">Login</Link> to enjoy the benefits
            of CL Comestibles
          </div>
        )}
      </div>
    </div>
  );
}

export default ProfileIcon;

import React, { useState, useEffect } from "react";
import "../Profile/Profile.css";
import NavBar from "../../Components/NavBar/NavBar";
import { Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("accessToken");
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };
  

  // {
  //   headers: {
  //     accessToken: accessToken,
  //   },
  // }

  const [profile, setProfile] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("accessToken"));
    setProfile(items);
  }, []);

  return (
    <div className="profile">
      <NavBar />
      <div className="profile-container">
        <div className="profile-header">Personal Account Details</div>
        <div className="profile-contents">
          <div className="img">
            <Avatar sx={{ width: "100px", height: "100px", fontSize: "2em" }}>
              Av
            </Avatar>
          </div>

          <div className="names">
            <div className="firstname">
              <label htmlFor="fname">FirstName</label>
              <input
                type="text"
                disabled
                value={profile.firstname}
                name="fname"
              />
            </div>

            <div className="surname">
              <label htmlFor="sname">Surname</label>
              <input
                type="text"
                disabled
                value={profile.surname}
                name="sname"
              />
            </div>
          </div>

          <div className="email">
            <label htmlFor="email">Email</label>
            <input type="text" disabled value={profile.email} name="email" />
          </div>

          <div className="created-at">
            <label htmlFor="created">Date Created</label>
            <input
              type="text"
              disabled
              value={profile.createdAt}
              name="created"
            />
          </div>

          <div className="button-logout">
            <button onClick={logout}>Log Out</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

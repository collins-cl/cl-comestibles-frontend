import React, { useState } from "react";
import "../NavBar/Navbar.css";
import ProfileIcon from "../ProfileIcon/ProfileIcon";
import CartIcon from "../CartIcon/CartIcon";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function NavBar({ count, profile }) {
  const location = useLocation();

  const [navwrapper, setNavWrapper] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 40) {
      setNavWrapper(true);
    } else {
      setNavWrapper(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(!open);
  const closeMobile = () => setOpen(false);

  const hamburgerOpen = (
    <FaBars className="hamburger" onClick={() => setOpen(!open)} />
  );

  const hamburgerClose = (
    <FaTimes className="hamburger" onClick={() => setOpen(!open)} />
  );

  return (
    <div className="nav">
      <div className={navwrapper ? "navwrapper" : "navwrapper active"}>
        <div className="first-nav">
          <div className="hamburger" onClick={handleClick}>
            {open ? hamburgerClose : hamburgerOpen}
          </div>
          <div className="logo">
            <Link to="/">CL COMESTIBLES</Link>
          </div>
          {location.pathname === "/login" ? null : (
            <div className="icons-events">
              <ProfileIcon />
              <CartIcon count={count} />
            </div>
          )}
        </div>

        <div className={open ? "secondnav" : "secondnav active"}>
          <Link to="/shop" onClick={closeMobile}>
            SHOP
          </Link>
          <Link to="/flashsale" onClick={closeMobile}>
            FLASHSALE
          </Link>
          <Link to="/" onClick={closeMobile}>
            CONTACTS
          </Link>
          <a href="/#email" onClick={closeMobile}>
            EMAIL
          </a>
        </div>
      </div>
    </div>
  );
}

export default NavBar;

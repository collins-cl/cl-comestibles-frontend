import React, { useState } from "react";
import "../ShopNav/Shopnav.css";
import ProfileIcon from "../ProfileIcon/ProfileIcon";
import CartIcon from "../CartIcon/CartIcon";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

function Shopnav({ count }) {
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
            <a href="/">CL COMESTIBLES</a>
          </div>

          <div className="shop-icon-events">
            <ProfileIcon />
            <CartIcon count={count} />
          </div>
        </div>

        <div className={open ? "secondshopnav" : "secondshopnav active"}>
          <Link
            activeClass="active"
            spy={true}
            to="main-course"
            onClick={closeMobile}
          >
            MAIN-COURSE
          </Link>
          <Link spy={true} to="dessert" onClick={closeMobile}>
            DESSERTS
          </Link>
          <a href="/" className="bhome" onClick={closeMobile}>
            BACK HOME
          </a>
        </div>
      </div>
    </div>
  );
}

export default Shopnav;

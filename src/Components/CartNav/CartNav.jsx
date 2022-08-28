import React from "react";
import "../CartNav/CartNav.css";
import { MdOutlineShoppingBag } from "react-icons/md";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";

const CartNav = () => {
  return (
    <div className="cartnav">
      <div className="logo">
        <Link to="/">CL COMESTIBLES</Link>
      </div>

      <div className="backtoshop">
        <IconButton
          component={Link}
          to="/shop"
          size="medium"
          aria-label="shop"
          sx={{ width: "40px", height: "40px", color: "black" }}
        >
          <MdOutlineShoppingBag />
        </IconButton>
      </div>
    </div>
  );
};

export default CartNav;

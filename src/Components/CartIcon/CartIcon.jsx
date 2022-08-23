import React from "react";
import "../CartIcon/CartIcon.css";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

function CartIcon({ count }) {
  return (
    <div className="carticon">
      <IconButton
        component={Link}
        to="/cart"
        size="large"
        aria-label="cart"
        className="cartbadge"
      >
        <FaShoppingCart className="cart-icon" />
        <p>{count}</p>
      </IconButton>
    </div>
  );
}

export default CartIcon;

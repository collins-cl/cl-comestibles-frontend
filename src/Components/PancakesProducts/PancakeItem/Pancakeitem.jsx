import React from "react";
import "./Pancake.css";
import { MdAddShoppingCart } from "react-icons/md";
import { IconButton } from "@mui/material";

const Pancakeitem = ({ pasta }) => {
  return (
    <div className="Pancake">
      <div className="Pancake-wrapper">
        <div className="Pancake-image">
          <img src={pasta.image} alt="" />
        </div>
        <div className="Pancake-name">{pasta.name}</div>
        <div className="Pancake-description">{pasta.description}</div>
        <div className="Pancake-price">{pasta.price}</div>
        <IconButton className="pancakecart">
          <MdAddShoppingCart className="addtocart" />
        </IconButton>
      </div>
    </div>
  );
};

export default Pancakeitem;

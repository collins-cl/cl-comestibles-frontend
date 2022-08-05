import React from "react";
import "../CartItem/Cartitem.css";
import { Button } from "@mui/material";

const Cartitem = ({ cartitem, dispatch, count }) => {
  return (
    <div className="cartitem">
      <div className="cartitem-container">
        <div className="cart-image">
          <img src={cartitem.image} alt="" />
        </div>
        <div className="name-price">
          <div className="name">{cartitem.name}</div>
          <div className="price">{cartitem.price}</div>
        </div>
        <div className="cartitem-actions">
          <div className="events">
            <Button
              sx={{ color: "black", fontSize: "19px" }}
              type="button"
              size="small"
              onClick={()=>dispatch('increment')}
            >
              +
            </Button>
            <div className="cart-quantity">{count}</div>
            <Button
              sx={{ color: "black", fontSize: "25px" }}
              type="button"
              size="small"
              onClick={()=>dispatch('decrement')}
            >
              -
            </Button>
          </div>

          <div className="remove-item">
            <Button
              variant="contained"
              type="button"
              color="error"
              size="small"
              sx={{
                color: "black",
                backgroundColor: "teal",
                fontSize: "14px",
                padding: "5px 18px 5px 18px",
              }}
            >
              Remove
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cartitem;

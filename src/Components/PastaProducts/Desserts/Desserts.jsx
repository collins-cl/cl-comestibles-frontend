import React from "react";
import "../Desserts/Desserts.css"
import {MdAddShoppingCart} from "react-icons/md"

const Desserts = ({pasta, dispatch}) => {
  return (
    <div className="desserts">
      <div className="desserts-wrapper">
        <div className="desserts-image">
          <img src={pasta.image} alt="" />
        </div>
        <div className="desserts-name">{pasta.name}</div>
        <div className="desserts-description">
          {pasta.description}
        </div>
        <div className="desserts-price">{pasta.price}</div>
        <div className="desserts-cart" onClick={()=>dispatch('increment')}><MdAddShoppingCart className="addtocart"/></div>
      </div>
    </div>
  );
};

export default Desserts;

import React from "react";
import "../PastaItem/Pastaitem.css";
import {MdAddShoppingCart} from "react-icons/md"

const Pastaitem = ({pasta, dispatch}) => {
  return (
    <div className="pastaitem">
      <div className="pastaitem-wrapper">
        <div className="pastaitem-image">
          <img src={pasta.image} alt="" />
        </div>
        <div className="pastaitem-name">{pasta.name}</div>
        <div className="pastaitem-description">
          {pasta.description}
        </div>
        <div className="pastaitem-price">{pasta.price}</div>
        <div className="pastaitem-cart" onClick={()=>dispatch('increment')}><MdAddShoppingCart className="addtocart"/></div>
      </div>
    </div>
  );
};

export default Pastaitem;

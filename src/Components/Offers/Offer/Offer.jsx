import React from "react";
import "../Offer/Offer.css";
import { Link } from "react-router-dom";

function Offer({ offer }) {
  return (
    // boiler plate for each offer products that would be mapped in the offers component

    <div className="offer">
      <div className="wrapper">
        <div className="offer-cont">
          <div className="offer-image">
            <img src={offer.image} alt="" />
          </div>
          <div className="offername">{offer.name}</div>
          <div className="offer-desc">{offer.description}</div>
          <div className="shop-now">
            <Link to="/shop">SHOP NOW</Link>
          </div>
        </div>
      </div>
    </div>

    // boiler plate ends here
  );
}

export default Offer;

import React from "react";
import OfferDummys from "../OfferDummy";
import "../Offers/Offers.css";
import Offer from "./Offer/Offer";

function Offers() {
  const offers = OfferDummys;

  return (
    <div className="offers">
      <div className="offers-container">
        {offers.map((offer) => (
          <div key={offer.id}>
            <Offer offer={offer} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Offers;

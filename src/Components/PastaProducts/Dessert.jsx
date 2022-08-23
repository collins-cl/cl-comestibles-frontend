import React from "react";
import PastaDummy from "../PastaDummy";
import "../PastaProducts/Dessert.css";
import Desserts from "./Desserts/Desserts";

const Dessert = ({ dispatch }) => {
  const pastas = PastaDummy;

  // to show if products is live and from commerce js

  const isLive = true;

  // if cart is online == Online products from commerce js would be displayed

  const OnlineCart = () => <div className="p-item">lol</div>;

  // if cart is offline == offline products from dummytext would be displayed

  const OfflineCart = () => (
    <div className="dessert-item">
      {pastas.map((pasta) => (
        <Desserts dispatch={dispatch} key={pasta.id} pasta={pasta} />
      ))}
    </div>
  );

  return (
    <div className="dessert-container">
      <div className="dessert" id="dessert">
        <div className="inner">
          <div className="dessert-heading">Dessert</div>
          <div className="dessert-description">
            Fresh out of the overn cakes and pies and everything you need for
            that wonderful dessert satisfaction. Take an order and try a bite!😉
          </div>
          {isLive ? <OfflineCart /> : <OnlineCart />}
        </div>
      </div>
    </div>
  );
};

export default Dessert;

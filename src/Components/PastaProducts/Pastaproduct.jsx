import React from "react";
import PastaDummy from "../PastaDummy";
import Pastaitem from "./PastaItem/Pastaitem";

const Pastaproduct = ({dispatch}) => {
  const pastas = PastaDummy;

  // to show if products is live and from commerce js

  const isLive = true;

  // if cart is online == Online products from commerce js would be displayed

  const OnlineCart = () => <div className="p-item">lol</div>;

  // if cart is offline == offline products from dummytext would be displayed

  const OfflineCart = () => (
    <div className="p-item">
      {pastas.map((pasta) => (
        <Pastaitem dispatch={dispatch} key={pasta.id} pasta={pasta} />
      ))}
    </div>
  );

  return (
    <div className="pasta-container">
      <div className="pancakeproduct" id="pasta">
        <div className="inner">
          <div className="pp-heading">Pasta</div>
          <div className="pp-description">
            Premium quality food, straight from the farm made from rich <br />{" "}
            pasta and rice miils to suit your taste.
          </div>
          {isLive ? <OfflineCart /> : <OnlineCart />}
        </div>
      </div>
    </div>
  );
};

export default Pastaproduct;

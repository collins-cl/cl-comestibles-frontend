import React from "react";
import PastaDummy from "../PastaDummy";
import Pastaitem from "../PastaProducts/PastaItem/Pastaitem";

const Riceproducts = ({dispatch}) => {
  const pastas = PastaDummy;

  //   to show if products is live and from commerce js

  const isLive = true;

  //   if cart is online == Online products from commerce js would be displayed

  const OnlineCart = () => <div className="p-item">lol</div>;

  //   if cart is offline == offline products from dummytext would be displayed

  const OfflineCart = () => (
    <div className="p-item">
      {pastas.map((pasta) => (
        <Pastaitem dispatch={dispatch} key={pasta.id} pasta={pasta} />
      ))}
    </div>
  );
  return (
    <div className="pancakeproduct" id="rice">
      <div className="inner">
        <div className="pp-heading">Rice Products</div>
        <div className="pp-description">
          Premium quality food, straight from the farm made from rich <br />{" "}
          pancakes and rice miils to suit your taste.
        </div>
      </div>
      {isLive ? <OfflineCart /> : <OnlineCart />}
    </div>
  );
};

export default Riceproducts;

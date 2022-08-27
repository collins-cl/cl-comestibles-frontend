import React from "react";
import "../Flashsale/Flashsale.css";
import NavBar from "../NavBar/NavBar";
import Flash from "../Assets/flashsale.png";
import Insta from "../Instagram/Insta";
import Footer from "../Footer/Footer";

const Flashsale = () => {
  return (
    <div className="flashsale">
      <NavBar />
      <div className="flash-cont">
        <div className="flash-intro">
          Enjoy A 3 Day flash sale with percentage(%) off of this particular
          item displayed.
        </div>

        <div className="flash-img">
          <div className="flash-div">
            <img src={Flash} alt="showing flash item" />

            <div className="percent-off">up to 60% off</div>
          </div>
        </div>

        <div className="locate">
          Click on the link below to locate this item on the shop and purchase.
        </div>

        <div className="flash-link">
          <a href="/shop">Go to shop</a>
        </div>
      </div>
      <Insta />
      <Footer />
    </div>
  );
};

export default Flashsale;

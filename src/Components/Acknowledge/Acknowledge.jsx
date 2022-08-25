import React from "react";
import "../Acknowledge/acknowledge.css";
import pic6 from "../Assets/pic6.jpg";

function Acknowledge() {
  return (
    <div className="ark">
      <div className="ark-container">
        <div className="container-1">
          <div className="head">No. 1 Ranked Food Store</div>
          <div className="details">
            Since we launched in 2019 we’ve been on a mission to support the
            communities where we live, work and play. We’ve set out to offer
            better products, leave our communities better than before, and be
            better than what you’ve been offered for 100 years. We are proud to
            be B Corp certified, for a better way to feel better.
          </div>
        </div>
        <div className="container-2">
          <img src={pic6} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Acknowledge;

import React from "react";
import PicksCss from "../Picks/Picks.module.css";
import image1 from "../Assets/image1.jpg";
import image2 from "../Assets/image2.jpg";
import image3 from "../Assets/image3.jpg";
import image4 from "../Assets/image4.jpg";
import image5 from "../Assets/image9.jpg";

function Picks() {
  return (
    <div className={PicksCss.picks}>
      <div className={PicksCss.pickscontainer}>
        <div className={PicksCss.picks1}>
          <img src={image1} alt="" />
        </div>
        <div className={PicksCss.picks1}>
          <img src={image2} alt="" />
        </div>
        <div className={PicksCss.picks1}>
          <img src={image3} alt="" />
        </div>
        <div className={PicksCss.picks1}>
          <img src={image4} alt="" />
        </div>
        <div className={PicksCss.picks1}>
          <img src={image5} alt="" />
        </div>
      </div>

      <div className={PicksCss.pickstext}>OUR PICKS FOR YOU</div>
    </div>
  );
}

export default Picks;

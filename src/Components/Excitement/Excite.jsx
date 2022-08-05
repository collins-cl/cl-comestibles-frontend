import React from "react";
import "../Excitement/Excite.css";
import img9 from "../Assets/img9.jpg"

function Excite() {
  return (
    <div className="excite">
      <div className="excite-wrapper">
        <div className="excite-image">
          <img src={img9} alt="" />
        </div>
        <div className="excite-other">
          <div className="body">
            <h2>OH MY <br /> DEAR !</h2>
            <p>I've missed you</p>
          </div>
          <div className="shopnow">
            <a href="/">SHOP NOW</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Excite;

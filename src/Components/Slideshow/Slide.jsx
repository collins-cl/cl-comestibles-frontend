import React from "react";
import "../Slideshow/Slide.css";


function Slideshow() {

  return (
    <div className="slide">
      <div className="slide-cont">
        <div className="slide-description">
          spaghetti seafood with tomato sauce decorated with beautiful
          ingredients
        </div>

        <div className="slide-shop-now">
          <a href="/shop">
            SHOP NOW
          </a>
        </div>
      </div>
    </div>
  );
}

export default Slideshow;

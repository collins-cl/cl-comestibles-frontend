import React from "react";
import PastaDummy from "../PastaDummy";
import "../Maincourse/Maincourse.css"
import Desserts from "../PastaProducts/Desserts/Desserts";

const MainCourse = ({dispatch}) => {
  const pastas = PastaDummy;

  //   to show if products is live and from commerce js

  const isLive = true;

  //   if cart is online == Online products from commerce js would be displayed

  const OnlineCart = () => <div className="p-item">lol</div>;

  //   if cart is offline == offline products from dummytext would be displayed

  const OfflineCart = () => (
    <div className="maincourse-item">
      {pastas.map((pasta) => (
        <Desserts dispatch={dispatch} key={pasta.id} pasta={pasta} />
      ))}
    </div>
  );
  return (
    <div className="maincourse" id="main-course">
      <div className="inner">
        <div className="maincourse-heading">Main Course</div>
        <div className="maincourse-description">
          Premium quality food, straight from the farm made from grains <br />{" "}
          well bred stocks and made by the best chefs to suit your taste.
        </div>
      </div>
      {isLive ? <OfflineCart /> : <OnlineCart />}
    </div>
  );
};

export default MainCourse;

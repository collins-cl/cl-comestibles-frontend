import React from "react";
import "../Shop/Shop.css";
import Ads from "../../Components/Adsbar/Ads";
import Shopnav from "../../Components/ShopNav/Shopnav";
import Footer from "../../Components/Footer/Footer";  
import Twitter from "../../Components/Twitter/Twitter";  
import Dessert from "../../Components/PastaProducts/Dessert";
import MainCourse from "../../Components/Maincourse/MainCourse";

const Shop = ({dispatch, count}) => {
  return (
    <div className="shop">
      <Ads />
      <Shopnav count={count} />
      <div className="little-details">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quis,
        nemo labore a quas hic sed voluptatem, magni ut atque consequuntur neque
        repudiandae dolore cupiditate voluptates accusamus ab. Repellat,
        laborum!
      </div>
      <div className="products-section">
        <MainCourse dispatch={dispatch} />
        <Dessert  dispatch={dispatch}/>
      </div>
      <Twitter/>
      
      <Footer />
    </div>
  );
};

export default Shop;

import React from "react";
import "../Shop/Shop.css";
import Ads from "../../Components/Adsbar/Ads";
import Pastaproduct from "../../Components/PastaProducts/Pastaproduct";
import Shopnav from "../../Components/ShopNav/Shopnav";
import Pancakeproduct from "../../Components/PancakesProducts/Pancakeproduct";
import Ketoneproducts from "../../Components/KetoneProducts/Ketoneproducts";
import Riceproducts from "../../Components/RiceProductss/Riceproducts";
import Footer from "../../Components/Footer/Footer";  
import Twitter from "../../Components/Twitter/Twitter";  

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
        <Riceproducts dispatch={dispatch} />
        <Pastaproduct  dispatch={dispatch}/>
        <Pancakeproduct />
        <Ketoneproducts />
      </div>
      <Twitter/>
      
      <Footer />
    </div>
  );
};

export default Shop;

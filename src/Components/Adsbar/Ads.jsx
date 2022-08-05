import React, { useState } from "react";
import "../Adsbar/Ads.css";
import { FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

function Ads() {
  const [ads, setAds] = useState(true);

  const handleClose = () => {
    setAds(false);
  };

  return (
    <div className={ads ? "ads" : "adsbar"}>
      <motion.div
        className="ads-wrapper"
        initial={{ x: -1500 }}
        animate={{ x: 0 }}
        transition={{ duration: 1, delay: 2 }}
        type="tween"
      >
        <div className="ads-details">GET 20% OFF ON FIRST COMPLETED ORDER</div>
        <div className="ads-close" onClick={handleClose}>
          <FaTimes />
        </div>
      </motion.div>
    </div>
  );
}

export default Ads;

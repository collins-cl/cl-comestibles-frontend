import React from "react";
import "../Home/Home.css";
import Ads from "../../Components/Adsbar/Ads";
import NavBar from "../../Components/NavBar/NavBar";
import Offers from "../../Components/Offers/Offers";
import Slideshow from "../../Components/Slideshow/Slide";
import Twitter from "../../Components/Twitter/Twitter";
import Acknowledge from "../../Components/Acknowledge/Acknowledge";
import Picks from "../../Components/Picks/Picks";
import bigImage from "../../Components/Assets/img10.jpg";
import Excite from "../../Components/Excitement/Excite";
import Insta from "../../Components/Instagram/Insta";
import Footer from "../../Components/Footer/Footer";
import CssBaseline from '@mui/material/CssBaseline'

function Home({count, isLogin, setisLogin}) {

  
  return (
    <div className="home">
      <CssBaseline/>
      <Ads />
      <div className="navbar-container">
        <NavBar count={count} isLogin={isLogin} setisLogin={setisLogin} />
      </div>
      <Slideshow />
      <Twitter />
      <Offers />
      <Acknowledge />
      <Picks />
      <div className="sendEmail" id="email">
        <div className="email-container">
          send an email to <a href="mailto:">@CLCOMESTIBLES</a>
        </div>
      </div>

      <div className="big-image">
        <img src={bigImage} alt="" />
      </div>
      <Excite />
      <Insta />
      <Footer />
    </div>
  );
}

export default Home;

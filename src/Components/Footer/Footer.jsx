import React from "react";
import "../Footer/Footer.css";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="col-1">
          <div className="col-3">
            <h3>SHOP</h3>
            <p>PASTA</p>
            <p>KETONE</p>
            <p>RICE</p>
            <p>PASTA</p>
            <p>KETONE</p>
            <p>RICE</p>
            <p>STEW</p>
          </div>
          <div className="col-3">
            <h3>BRAND</h3>
            <p>COLE</p>
            <p>MUMUYEKE ENTREPRISE</p>
            <p>SAMULAJOR</p>
            <p>OMEH STUDIOS</p>
            <p>MUMUYEKE ENTREPRISE</p>
          </div>
          <div className="col-3">
            <h3>HELP</h3>
            <p>COMMUNITY HELP</p>
            <p>COMMUNITY HELP</p>
            <p>COMMUNITY HELP</p>
            <a href="mailto:">EMAIL</a>
            <a href="tel:+2348060015910">CALL</a>
            <a href="tel:+">TEXT</a>
          </div>

          <div className="col-2">
            <div className="heading">BE PART OF OUR JOURNEY</div>
            <p>Lorem ipsum dolor sit, amet consectetur</p>

            <div className="socials">
              <a href="/">
                <FaInstagram />
              </a>
              <a href="/">
                <FaFacebookF />
              </a>
              <a href="/">
                <FaTwitter />
              </a>
            </div>

            <div className="footer-logo">CL COMESTIBLES</div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

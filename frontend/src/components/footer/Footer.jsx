import React from "react";
import "./footer.css"
import logo from "../../assets/images/batStateUNeu-logo.png"
import spartan from "../../assets/images/redspartan_logo.png"
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa"


const Footer = () => {
  return (
    <section id="footer-container">
      <div className="footer">
        <div className="footer-second-layer">
          <div className="mid-content">
            <div className="bsu-logo">
              <img src={logo} alt="BSU logo" />
            </div>
            <div className="socials">
              <ul className="socials-list">
                <li>
                  <a href="https://www.facebook.com/BatStateU.RMS">
                    <i className="bx bxl-facebook-circle icon" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bx bxl-instagram-alt icon" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bx bxl-twitter icon" />
                  </a>
                </li>
              </ul>
            </div>

            <div className="contact-us">

              <h3 className="contact">Contact Us</h3>
              
              <p className="number"><FaPhoneAlt className="phone-icon" /> (123) 456-7890</p>

              <div className="email">
                <FaEnvelope className="envelope-icon" /> 
                <a href="mailto:info@gmail.com">
                  <p>researchmanagement@g.batstate-u.edu.ph</p>
                </a>
              </div>

            </div>

            <div className="complete-address">
              <h3 className="address">Address</h3>
              <p className="street">Rizal Avenue</p>
              <p className="city">Batangas City, Philippines, 4200</p>
            </div>
          </div>
        </div>
        <div className="logo">
          <a href="”https://www.google.com“">
            <img src={spartan} alt="" />
          </a>
        </div>
      </div>
      <div className="bottom">
        <p>© 2023 Batangas State University | RMS - All Rights Reserved.</p>
      </div>
    </section>
  );
};

export default Footer;

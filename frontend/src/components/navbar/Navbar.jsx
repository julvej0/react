import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import batstateulogo from "../../assets/images/batStateUNeu-logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(true);
  const [navBg, setNavBg] = useState("black");
  const [linkColor, setLinkColor] = useState("white");

  return (
    <section>
      <div className="loading-overlay" id="loadingOverlay">
        <div className="loading-spinner" />
      </div>
      <div className="navbar-container">
        <div className="left">
          <div className="left-md-container">
            <div className="left-sm-container">
              <div className="left-content">
                <div className="logo">
                  <img src={batstateulogo} alt="BSU logo" />
                </div>
                <div className="header-title">
                  <h4>BatStateU</h4>
                  <p>The National Engineering University</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="right-content">
            <ul className="nav-links">
              <li className="home-link">
                <Link href="/">HOME</Link>
              </li>
              <li className="ip-assets-link">
                <Link href="/ip-assets">IP ASSETS</Link>
              </li>
              <li className="pb-link">
                <Link href="/abt-link">PUBLICATIONS</Link>
              </li>
              <li className="abt-link">
                <Link href="/about">ABOUT US</Link>
              </li>
              <a href="/" className="signin-btn">
                Sign In
              </a>
            </ul>
            <div className="device">
              <div className="container">
                <button id="burger" className="open-main-nav">
                  <span className="burger" />
                  <span className="burger-text">Menu</span>
                </button>
                <nav className="main-nav" id="main-nav">
                  <ul>
                    <li>
                      <a href="#">About me</a>
                    </li>
                    <li>
                      <a href="#">Speaker Writer</a>
                    </li>
                    <li>
                      <a href="#">Work</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                    <li>
                      <a href="#">Blog</a>
                    </li>
                  </ul>
                </nav>
                <p className="notice">
                  Design Copyright <strong>Stéphanie Walter</strong>
                  <br />
                  <a href="https://stephaniewalter.design/" target="_blank">
                    StephanieWalter.Design
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;

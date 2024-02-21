import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import batstateulogo from "../../assets/images/batStateUNeu-logo.png";

const Navbar = () => {
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
              <li>
                <Link
                  to="/"
                  id="home-link"
                  //   onClick="showLoadingScreen()"
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  to="/ip-assets"
                  id="ip-assets-link"
                  //   onClick="showLoadingScreen()"
                >
                  IP ASSETS
                </Link>
              </li>
              <li>
                <Link
                  to="/publications"
                  id="pb-link"
                  //   onClick="showLoadingScreen()"
                >
                  PUBLICATIONS
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  id="abt-link"
                  //   onClick="showLoadingScreen()"
                >
                  ABOUT
                </Link>
              </li>
              <a className="signin-btn" href=""></a>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;

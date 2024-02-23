import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import batstateulogo from "../../assets/images/batStateUNeu-logo.png";

const Navbar = () => {
  function toggleNavbar() {
    const sidebar = document.querySelector(".tab-nav");
    if (sidebar.style.display === "none") {
      sidebar.style.display = "flex";
    } else {
      sidebar.style.display = "none";
    }
  }

  return (
    <section>
      <div className="shadow navbar-container">
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
            <div className="burger" onClick={toggleNavbar}>
              <AiOutlineMenu size={30} />
            </div>
            <div className="close" onClick={toggleNavbar}>
              <AiOutlineClose size={30} />
            </div>
          </div>
        </div>

      </div>
        <div className="tab-nav">
          <ul>
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
        </div>
    </section>
  );
};

export default Navbar;

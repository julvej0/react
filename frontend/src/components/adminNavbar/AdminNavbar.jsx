import React, { useState } from "react";
import "./adminnavbar.css";
import {
  MdOutlineDashboard,
  MdOutlineMenuBook,
  MdOutlineFolder,
  MdOutlineGroups,
} from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
import { IoLogInOutline } from "react-icons/io5";
import { HiOutlineCog6Tooth } from "react-icons/hi2";
import { CiLogout } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";
import bsulogo2 from "../../assets/images/batStateUNeu-logo.png";
import { Link } from "react-router-dom";

const AdminNavbar = () => {
  var path = window.location.pathname;
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="AdminNavbarPage">
      <section id="sidebar">
        <div className="logo">
          <div className="logo-wrapper">
            <img src={bsulogo2} alt="" />
          </div>
          <h4 className="logo-title">Research Management Services</h4>
        </div>
        <div className="loading-overlay" id="loadingOverlay">
          <div className="loading-spinner" />
        </div>
        <ul className="side-menu">
          <li>
            <Link
              to="/admin/dashboard"
              id="dashboard-link"
              className={path.includes("dashboard") ? "active" : ""}
              onClick="showLoadingScreen()"
            >
              <MdOutlineDashboard className="bx bxs-dashboard icon" />
              Dashboard
            </Link>
          </li>

          <li className="divider" data-text="Main">
            Main
          </li>
          <li className="togglebtn">
            <Link
              to="/admin/publications"
              id="publication-link"
              className={path.includes("publications") ? "active" : ""}
              onClick="showLoadingScreen()"
            >
              <MdOutlineMenuBook className="bx bxs-book-open icon" />
              Publications
            </Link>
          </li>
          <li className="togglebtn">
            <Link
              to="/admin/ipassets"
              id="ip-assets-link"
              className={path.includes("ipassets") ? "active" : ""} 
              onClick="showLoadingScreen()"
            >
              <MdOutlineFolder className="bx bxs-folder icon" />
              IP Assets
            </Link>
          </li>
          <li>
            <a
              to="/admin/authors"
              id="author-link"
              className={path.includes("authors") ? "active" : ""}
              onclick="showLoadingScreen()"
            >
              <MdOutlineGroups className="bx bxs-group icon" />
              Authors
            </a>
          </li>
          <li>
            <Link
              to="/admin/useraccounts"
              id="user-accounts-link"
              className={path.includes("user-accounts") ? "active" : ""}
              onClick="showLoadingScreen()"
            >
              <FaRegUser className="bx bxs-user icon" />
              User Accounts
            </Link>
          </li>
          <li className="divider" data-text="Account">
            Account
          </li>
          <li>
            <Link
              to="/admin/logs"
              id="log-link"
              className={path.includes("logs") ? "active" : ""}
              onClick="showLoadingScreen()"
            >
              <IoLogInOutline className="bx bxs-log-in icon" />
              Logs
            </Link>
          </li>

          <li onClick={toggleDropdown} id="account-settings">
            <Link to="#" id="account-link">
              <HiOutlineCog6Tooth className="bx bxs-cog icon" />
              Account Settings
              <MdKeyboardArrowDown className="bx bx-chevron-right icon-right" />
            </Link>
            {isOpen && (
              <ul className="side-dropdown">
                <li>
                  <Link
                    // to="../../../views/admin/account-management/user-profile.php"
                    className={path.includes("authors") ? "active" : ""}
                    id="user-link"
                    onClick="showLoadingScreen()"
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <Link
                    // to="../../../views/admin/account-management/change-password.php"
                    id="security-link"
                    onClick="showLoadingScreen()"
                  >
                    Change Password
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <a className="logout" onClick="return showLogoutAlert()">
              <CiLogout className="bx bx-log-out icon rotate" name="logout" />
              Sign Out
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default AdminNavbar;

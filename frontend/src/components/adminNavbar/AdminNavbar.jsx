import React from "react";
import "./adminnavbar.css"
import { MdOutlineDashboard, MdOutlineMenuBook, MdOutlineFolder,MdOutlineGroups  } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
import { IoLogInOutline } from "react-icons/io5";
import { HiOutlineCog6Tooth } from "react-icons/hi2";
import { CiLogout } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";
import bsulogo2 from "../../assets/images/batStateUNeu-logo.png"

const AdminNavbar = () => {
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
          <a
            // href="../../../views/admin/dashboard/dashboard.php"
            id="dashboard-link"
            onclick="showLoadingScreen()"
          >
            <MdOutlineDashboard className="bx bxs-dashboard icon" />
            Dashboard
          </a>
        </li>
        <li className="divider" data-text="Main">
          Main
        </li>
        <li>
          <a
            // href="../../../views/admin/publications/publications.php"
            id="publication-link"
            onclick="showLoadingScreen()"
          >
            <MdOutlineMenuBook className="bx bxs-book-open icon" />
            Publications
          </a>
        </li>
        <li>
          <a
            // href="../../../views/admin/ip-assets/ip-assets.php"
            id="ip-assets-link"
            onclick="showLoadingScreen()"
          >
            <MdOutlineFolder className="bx bxs-folder icon" />
            IP Assets
          </a>
        </li>
        <li>
          <a
            // href="../../../views/admin/authors/authors.php"
            id="author-link"
            onclick="showLoadingScreen()"
          >
            <MdOutlineGroups className="bx bxs-group icon" />
            Authors
          </a>
        </li>
        <li>
          <a
            // href="../../../views/admin/user-accounts/user-accounts.php"
            id="user-accounts-link"
            onclick="showLoadingScreen()"
          >
            <FaRegUser className="bx bxs-user icon" />
            User Accounts
          </a>
        </li>
        <li className="divider" data-text="Account">
          Account
        </li>
        <li>
          <a
            // href="../../../views/admin/logs/logs.php"
            id="log-link"
            onclick="showLoadingScreen()"
          >
            <IoLogInOutline className="bx bxs-log-in icon" />
            Logs
          </a>
        </li>
        <li id="account-settings">
          <a href="#" id="account-link">
            <HiOutlineCog6Tooth className="bx bxs-cog icon" />
            Account Settings
            <MdKeyboardArrowDown className="bx bx-chevron-right icon-right" />
          </a>
          <ul className="side-dropdown">
            <li>
              <a
                // href="../../../views/admin/account-management/user-profile.php"
                id="user-link"
                onclick="showLoadingScreen()"
              >
                Profile
              </a>
            </li>
            <li>
              <a
                // href="../../../views/admin/account-management/change-password.php"
                id="security-link"
                onclick="showLoadingScreen()"
              >
                Change Password
              </a>
            </li>
          </ul>
          <a className="logout" onclick="return showLogoutAlert()">
            <CiLogout className="bx bx-log-out icon rotate" name="logout" />
            Sign Out
          </a>
        </li>
      </ul>
    </section>
    </div>
  );
}

export default AdminNavbar;

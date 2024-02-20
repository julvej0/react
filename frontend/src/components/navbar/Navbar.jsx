import React from "react";
import "./navbar.css"
import {Link} from "react-router-dom"
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
                  <img
                    src={batstateulogo}
                    alt="BSU logo"
                  />
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
          <div className="right-md-container">
            <div className="right-sm-container">
              <div className="right-content">
                <ul className="nav-links">
                  {/*?php if( isset($_SESSION['account_type']) ): ?*/}
                  {/*?php if ($_SESSION['account_type'] == "Admin"): ?*/}
                  {/* <li>
                    <a
                      href="../../../admin/dashboard/dashboard.php"
                      id="home-link"
                    //   onClick="showLoadingScreen()"
                    >
                      DASHBOARD
                    </a>
                  </li>
                  <li>
                    <a
                      href="../../../admin/publications/publications.php"
                      id="pb-link"
                    //   onClick="showLoadingScreen()"
                    >
                      PUBLICATIONS
                    </a>
                  </li>
                  <li>
                    <a
                      href="../../../admin/ip-assets/ip-assets.php"
                      id="ip-assets-link"
                    //   onClick="showLoadingScreen()"
                    >
                      IP ASSETS
                    </a>
                  </li>
                  <li>
                    <a
                      href="../../../admin/authors/authors.php"
                      id="author-link"
                    //   onClick="showLoadingScreen()"
                    >
                      AUTHORS
                    </a>
                  </li> */}
                  {/* <li><a href="/new-rms-webdev/views/admin/about/about.php" id='abt-link' onClick="showLoadingScreen()">ABOUT</a></li> */}
                  {/*?php else: ?*/}
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
                  {/*?php endif; ?*/}
                  {/*?php else: ?*/}
                  {/* <li>
                    <a
                      href="../../../views/public-user/home/home.php"
                      id="home-link"
                    //   onClick="showLoadingScreen()"
                    >
                      HOME
                    </a>
                  </li>
                  <li>
                    <a
                      href="../../../views/public-user/ip-assets/ip-assets.php"
                      id="ip-assets-link"
                    //   onClick="showLoadingScreen()"
                    >
                      IP ASSETS
                    </a>
                  </li>
                  <li>
                    <a
                      href="../../../views/public-user/articles/articles.php"
                      id="pb-link"
                    //   onClick="showLoadingScreen()"
                    >
                      PUBLICATIONS
                    </a>
                  </li>
                  <li>
                    <a
                      href="../../../views/public-user/about/about.php"
                      id="abt-link"
                    //   onClick="showLoadingScreen()"
                    >
                      ABOUT
                    </a>
                  </li> */}
                  {/*?php endif; ?*/}
                  <a
                    className="signin-btn"
                    href="<?=isset($_SESSION['user_email']) ? '/new-rms-webdev/views/logout/logout.php?logout=1' :  '/new-rms-webdev/views/login/login.php'?>"
                    // onClick="<?=isset($_SESSION['user_email']) ? 'return showLogoutAlert()' : ''?>"
                  >
                    {/*?=isset($_SESSION['user_email']) ? 'LOGOUT' : 'LOGIN'?*/}
                  </a>
                </ul>
                {/*?php
                      $sessionActive = isset($_SESSION['user_email']);
                      $accountType = isset($_SESSION['account_type']) ? $_SESSION['account_type'] : '';

                      // Check if the user is an author
                      $isAuthor = $accountType == 'Author';
                  ?*/}
                <div className="dropdown-container <?= $sessionActive ? 'show' : '' ?>">
                  {/*?php if ($sessionActive): ?*/}
                  {/* <i className="fas fa-cog" onClick="toggleDropdown()" /> */}
                  <div className="dropdown" id="dropdown">
                    <a
                      style={{ marginRight: 30 }}
                      href="/new-rms-webdev/views/public-user/profile/user-profile.php"
                    >
                      <i className="fas fa-user" /> PROFILE
                    </a>
                    {/*?php if ($isAuthor): ?*/}
                    <a
                      style={{ marginRight: 30 }}
                      href="/new-rms-webdev/views/public-user/author-info/author-profile.php"
                    >
                      <i className="fas fa-info-circle" /> AUTHOR INFORMATION
                    </a>
                    {/*?php endif; ?*/}
                    <a href="/new-rms-webdev/views/public-user/profile/change-password.php">
                      <i className="fas fa-lock" /> CHANGE PASSWORD
                    </a>
                  </div>
                  {/*?php endif; ?*/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;

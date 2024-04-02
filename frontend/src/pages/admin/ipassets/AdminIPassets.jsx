import React, { useState } from "react";
// import "./adminipassets.css";
import { AdminNavbar } from "../../../components";

function AdminIPassets() {
  return (
    <div>
      {/*?php
    include_once 'functionalities/ipa_include/ipa_filter.php';
    include_once 'functionalities/ipa_include/ipa_year.php';
    include_once 'functionalities/ipa_include/ipa_count.php';
    ?*/}

      <nav>
        <i className="bx bx-menu toggle-sidebar" />
        <span className="divider" />
        <div className="profile">
          <p
            className="user-name"
            style={{ fontWeight: "bold", textTransform: "uppercase" }}
          >
            {/*?=$_SESSION['user_name']?*/}
          </p>
          <small>Admin</small>
        </div>
      </nav>

      <AdminNavbar />
      {/* <div id="loading-screen">
              <div className="loading-img">
                <img
                  src="../../../assets/images/redspartan_logo.png"
                  alt="redSpartan"
                />
              </div>
            </div> */}

      <section id="appbar-and-content">
        {/*?php include_once dirname(__FILE__, 4) . '/components/navbar/admin-navbar.php'; ?*/}
        <main>
          <div className="header">
            <h1 className="title">IP Assets</h1>
            <div className="left">
              <div className="btn-container">
                <button
                  className="select-columns-btn"
                  onClick="rotateButton()"
                  id="button-icon"
                  title="Edit Table Column"
                >
                  {/* <i className="fas fa-caret-down" /> */}
                </button>
                <div className="checkbox-container" id="checkbox-container">
                  <input
                    type="checkbox"
                    name="col-registration"
                    id="col-registration"
                    defaultChecked
                  />
                  <label className="checkbox-button" htmlFor="col-registration">
                    Registration Number
                  </label>
                  <br />
                  <input
                    type="checkbox"
                    name="col-title"
                    id="col-title"
                    defaultChecked
                  />
                  <label className="checkbox-button" htmlFor="col-title">
                    Title
                  </label>
                  <br />
                  <input type="checkbox" name="col-type" id="col-type" />
                  <label className="checkbox-button" htmlFor="col-type">
                    Type
                  </label>
                  <br />
                  <input type="checkbox" name="col-cow" id="col-cow" />
                  <label className="checkbox-button" htmlFor="col-cow">
                    Class of Work
                  </label>
                  <br />
                  <input
                    type="checkbox"
                    name="col-date-cre"
                    id="col-date-cre"
                    defaultChecked
                  />
                  <label className="checkbox-button" htmlFor="col-date-cre">
                    Date of Creation
                  </label>
                  <br />
                  <input
                    type="checkbox"
                    name="col-date-reg"
                    id="col-date-reg"
                    defaultChecked
                  />
                  <label className="checkbox-button" htmlFor="col-date-reg">
                    Date Registered
                  </label>
                  <br />
                  <input
                    type="checkbox"
                    name="col-campus"
                    id="col-campus"
                    defaultChecked
                  />
                  <label className="checkbox-button" htmlFor="col-campus">
                    Campus
                  </label>
                  <br />
                  <input type="checkbox" name="col-college" id="col-college" />
                  <label className="checkbox-button" htmlFor="col-college">
                    College
                  </label>
                  <br />
                  <input type="checkbox" name="col-program" id="col-program" />
                  <label className="checkbox-button" htmlFor="col-program">
                    Program
                  </label>
                  <br />
                  <input
                    type="checkbox"
                    name="col-authors"
                    id="col-authors"
                    defaultChecked
                  />
                  <label className="checkbox-button" htmlFor="col-authors">
                    Authors
                  </label>
                  <input
                    type="checkbox"
                    name="col-status"
                    id="col-status"
                    defaultChecked
                  />
                  <label className="checkbox-button" htmlFor="col-status">
                    Status
                  </label>
                </div>
              </div>
              <form action method="get">
                <div className="form-group">
                  {/* <input type="text" placeholder="Search" name="search" defaultValue="<?php echo isset($_GET[" search']) ? $_get['search'] : '' />' */}
                  placeholder="Search..."&gt;
                  <i className="bx bx-search icon" />
                </div>
              </form>
              <div className="filter">
                <button className="btn">
                  {/*?= $type != "empty_type" ? $type : 'Type' ?*/}
                  <i className="bx bx-chevron-down icon" />
                </button>
                <ul className="filter-link">
                  <li>
                    <a href="<?= filterIPA($search, 'empty_type', $class, $year); ?>">
                      All
                    </a>
                  </li>
                  <li>
                    <a href="<?= filterIPA($search, 'Invention', $class, $year); ?>">
                      Invention
                    </a>
                  </li>
                  <li>
                    <a href="<?= filterIPA($search, 'Utility Model', $class, $year); ?>">
                      Utility Model
                    </a>
                  </li>
                  <li>
                    <a href="<?= filterIPA($search, 'Industrial Design', $class, $year); ?>">
                      Industrial Design
                    </a>
                  </li>
                  <li>
                    <a href="<?= filterIPA($search, 'Trademark', $class, $year); ?>">
                      Trademark
                    </a>
                  </li>
                  <li>
                    <a href="<?= filterIPA($search, 'Copyright', $class, $year); ?>">
                      Copyright
                    </a>
                  </li>
                </ul>
              </div>
              <div className="filter">
                <button className="btn">
                  {/*?= $class != "empty_class" ? 'Class ' . $class : 'Class' ?*/}
                  <i className="bx bx-chevron-down icon" />
                </button>
                <ul className="filter-link">
                  <li>
                    <a href="<?= filterIPA($search, $type, 'empty_class', $year); ?>">
                      All
                    </a>
                  </li>
                  <li>
                    <a href="<?= filterIPA($search, $type, 'A', $year); ?>">
                      Class A
                    </a>
                  </li>
                  <li>
                    <a href="<?= filterIPA($search, $type, 'G', $year); ?>">
                      Class G
                    </a>
                  </li>
                  <li>
                    <a href="<?= filterIPA($search, $type, 'O', $year); ?>">
                      Class O
                    </a>
                  </li>
                </ul>
              </div>
              <div className="filter">
                <button className="btn">
                  {/*?= $year != "empty_year" ? $year : 'Year' ?*/}
                  <i className="bx bx-chevron-down icon" />
                </button>
                <ul className="filter-link">
                  {/*?php include_once 'functionalities/ipa_include/ipa_year_filter.php' ?*/}
                </ul>
              </div>
              <a href="./new/new-ip-asset.php" className="addBtn">
                <i className="bx bxs-file-plus icon" />
                New
              </a>
            </div>
          </div>
          <section>
            <div className="table-container">
              {/*?php
              include_once 'functionalities/ipa_include/ipa_table.php';
              ?*/}
            </div>
            {/*?php
          include_once 'functionalities/ipa_include/pagination.php';
          ?*/}
          </section>
        </main>
        {/* Modal Popup */}
        <div id="myModal" className="modal">
          <div className="modal-content1">
            <h3
              style={{
                float: "left",
                position: "relative",
                marginTop: "-35px",
              }}
            >
              Download
            </h3>
            <span className="close" onclick="closeModal()">
              ×
            </span>
            <iframe src="functionalities/download/download_ip-assets.php?search=<?php echo $search; ?>&type=<?php echo $type; ?>&class=<?php echo $class; ?>&year=<?php echo $year; ?>" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default AdminIPassets;

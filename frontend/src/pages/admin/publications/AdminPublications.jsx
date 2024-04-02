import React, { useState } from "react";
import { AdminNavbar } from "../../../components";
import "./AdminPublication.css";

function AdminPublications() {
  return (
    <div>
      {/*?php
    include_once 'functionalities/publications_include/publication_filter_extract.php';
    include_once 'functionalities/publications_include/publication_filter_display.php';
    include_once 'functionalities/publications_include/publication_filter.php';

    $search = (isset($_GET['search']) && strpos($_GET['search'], "'") === false) ? $_GET['search'] : 'empty_search';
    $type = isset($_GET['type']) ? $_GET['type'] : 'empty_type';
    $fund = isset($_GET['fund']) ? $_GET['fund'] : 'empty_fund';
    $year = isset($_GET['year']) ? $_GET['year'] : 'empty_year';

    $page_number = isset($_GET['page']) ? intval($_GET['page']) : 1;
    ?*/}

      {/* <div id="loading-screen">
    <div className="loading-img">
      <img src="../../../assets/images/redspartan_logo.png" alt="redSpartan" />
    </div>
  </div> */}
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
      <section id="appbar-and-content">
        {/*?php include_once dirname(__FILE__, 4) . '/components/navbar/admin-navbar.php'; ?*/}
        <main>
          <div className="header">
            <h1 className="title">Publications</h1>
            <div className="left">
              <div className="btn-container">
                <button
                  className="select-columns-btn"
                  onclick="rotateButton()"
                  id="button-icon"
                  title="Edit Table Column"
                >
                  <i className="fa-solid fa-caret-down" />
                </button>
                <div className="checkbox-container" id="checkbox-container">
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
                  <input
                    type="checkbox"
                    name="col-publisher"
                    id="col-publisher"
                  />
                  <label className="checkbox-button" htmlFor="col-publisher">
                    Publisher
                  </label>
                  <br />
                  <input
                    type="checkbox"
                    name="col-research-area"
                    id="col-research-area"
                  />
                  <label
                    className="checkbox-button"
                    htmlFor="col-research-area"
                  >
                    Research Area
                  </label>
                  <br />
                  <input
                    type="checkbox"
                    name="col-college"
                    id="col-college"
                    defaultChecked
                  />
                  <label className="checkbox-button" htmlFor="col-college">
                    College
                  </label>
                  <br />
                  <input
                    type="checkbox"
                    name="col-quartile"
                    id="col-quartile"
                  />
                  <label className="checkbox-button" htmlFor="col-quartile">
                    Quartile
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
                  <input type="checkbox" name="col-sdg" id="col-sdg" />
                  <label className="checkbox-button" htmlFor="col-sdg">
                    SDG
                  </label>
                  <br />
                  <input
                    type="checkbox"
                    name="col-date-published"
                    id="col-date-published"
                    defaultChecked
                  />
                  <label
                    className="checkbox-button"
                    htmlFor="col-date-published"
                  >
                    Date Published
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
                  <br />
                  <input type="checkbox" name="col-funding" id="col-funding" />
                  <label className="checkbox-button" htmlFor="col-funding">
                    Funding
                  </label>
                  <br />
                  <input
                    type="checkbox"
                    name="col-fund-type"
                    id="col-fund-type"
                  />
                  <label className="checkbox-button" htmlFor="col-fund-type">
                    Fund Type
                  </label>
                  <br />
                  <input
                    type="checkbox"
                    name="col-fund-agency"
                    id="col-fund-agency"
                  />
                  <label className="checkbox-button" htmlFor="col-fund-agency">
                    Fund Agency
                  </label>
                  <br />
                  <input
                    type="checkbox"
                    name="col-citations"
                    id="col-citations"
                    defaultChecked
                  />
                  <label className="checkbox-button" htmlFor="col-citations">
                    Citations
                  </label>
                </div>
              </div>
              <form action method="get">
                <div className="form-group">
                  {/* <input type="text" name="search" defaultValue="<?php echo isset($_GET[" search']) ? $_get['search'] : '' />' placeholder="Search..."&gt; */}
                  {/* <input type="text" name="search" />' placeholder="Search..."&gt; */}
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
                    <a href="<?= filterPublication($search, 'empty_type', $fund, $year); ?>">
                      All
                    </a>
                  </li>
                  <li>
                    <a href="<?= filterPublication($search, 'Original Article', $fund, $year); ?>">
                      Original Article
                    </a>
                  </li>
                  <li>
                    <a href="<?= filterPublication($search, 'Review', $fund, $year); ?>">
                      Review
                    </a>
                  </li>
                  <li>
                    <a href="<?= filterPublication($search, 'Proceedings', $fund, $year); ?>">
                      Proceedings
                    </a>
                  </li>
                  <li>
                    <a href="<?= filterPublication($search, 'Communication', $fund, $year); ?>">
                      Communication
                    </a>
                  </li>
                  <li>
                    <a href="<?= filterPublication($search, 'International', $fund, $year); ?>">
                      International
                    </a>
                  </li>
                  {/*?php
                      // displayTypeFilter($publicationurl, $search, $fund, $year);
                      ?*/}
                </ul>
              </div>
              <div className="filter">
                <button className="btn">
                  {/*?= $fund != "empty_fund" ? $fund : 'Fund' ?*/}
                  <i className="bx bx-chevron-down icon" />
                </button>
                <ul className="filter-link">
                  <li>
                    <a href="<?= filterPublication($search, $type, 'empty_fund', $year); ?>">
                      All
                    </a>
                  </li>
                  <li>
                    <a href="<?= filterPublication($search, $type, 'Funded', $year) ?>">
                      Funded
                    </a>
                  </li>
                  <li>
                    <a href="<?= filterPublication($search, $type, 'Non-Funded', $year) ?>">
                      Non-funded
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
                  {/*?php

                      displayYearFilter($publicationurl, $search, $type, $fund);
                      ?*/}
                </ul>
              </div>
              <a href="./new/new-publication.php" className="addBtn">
                <i className="bx bxs-file-plus icon" />
                New
              </a>
            </div>
          </div>
          <section>
            <div className="table-container">
              {/*?php
              include_once 'functionalities/publications_include/publication_table.php';
              ?*/}
            </div>
            {/*?php
          include_once 'functionalities/publications_include/pagination.php';
          ?*/}
          </section>
        </main>
        {/* Modal Popup */}
        <div id="myModalpub" className="modal">
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
            <iframe src="../publications/functionalities/download/download_pub.php" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default AdminPublications;

import React, { useState } from "react";
import { AdminNavbar } from "../../../components";
import "./adminpublications.css";
import Pagination from "../Pagination";

function AdminPublications() {
  return (
    <div className="AdminPubPage">
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

      <nav className="topnavadmin">
        {/* <i className="bx bx-menu toggle-sidebar" /> */}
        <span className="divider" />
        <div className="profile">
          <p
            className="user-name"
            style={{ fontWeight: "bold", textTransform: "uppercase" }}
          >
            {/*?=$_SESSION['user_name']?*/}
          </p>
          <small className="margin-right: 50px;">Admin</small>
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
                  onClick="rotateButton()"
                  id="button-icon"
                  title="Edit Table Column"
                >
                  {/* <i className="fa-solid fa-caret-down" /> */}
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
                {/* <i className="bx bxs-file-plus icon" /> */}
                New
              </a>
            </div>
          </div>
          <section>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th className="col-title" style={{ minWidth: "350px" }}>
                      Title
                    </th>
                    <th className="col-type">Type</th>
                    <th className="col-publisher" style={{ minWidth: "190px" }}>
                      Publisher
                    </th>
                    <th className="col-research-area">Research Area</th>
                    <th className="col-college">College</th>
                    <th className="col-quartile">Quartile</th>
                    <th className="col-campus">Campus</th>
                    <th className="col-sdg">SDG's</th>
                    <th className="col-date-published">Date Published</th>
                    <th className="col-authors" style={{ minWidth: "190px" }}>
                      Authors
                    </th>
                    <th className="col-funding">Funding</th>
                    <th className="col-fund-type">Fund Type</th>
                    <th className="col-fund-agency">Fund Source</th>
                    <th className="col-citations">Citations</th>
                    <th
                      className="stickey-col-header"
                      style={{ backgroundColor: "var(--grey)" }}
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    {/*?php
      if ($table_rows !== null && !empty ($table_rows)) { // Check if $table_rows is not null
          foreach ($table_rows as $row) { // Loop through each row in $table_rows
              ?*/}
                  </tr>
                  <tr>
                    {/*Displays the data from the database per column*/}
                    <td
                      className="publication-col col-title"
                      style={{ minWidth: "15.625rem" }}
                    >
                      {/*?= $row['title_of_paper']; ?*/}
                    </td>
                    <td className="publication-col col-type">
                      {/*?= $row['type_of_publication'] != null ? $row['type_of_publication'] : "N/A"; ?*/}
                    </td>
                    <td className="publication-col col-publisher">
                      {/*?= $row['publisher'] != null ? $row['publisher'] : "N/A"; ?*/}
                    </td>
                    <td className="publication-col col-research-area">
                      {/*?= $row['department'] != null ? $row['department'] : "N/A"; ?*/}
                    </td>
                    <td className="publication-col col-college">
                      {/*?= $row['college'] != null ? $row['college'] : "N/A"; ?*/}
                    </td>
                    <td className="publication-col col-quartile">
                      {/*?= $row['quartile'] != null ? $row['quartile'] : "N/A"; ?*/}
                    </td>
                    <td className="publication-col col-campus">
                      {/*?= $row['campus'] != null ? $row['campus'] : "N/A"; ?*/}
                    </td>
                    <td className="publication-col col-sdg">
                      {/*?= $row['sdg_no'] != null ? $row['sdg_no'] : "N/A"; ?*/}
                    </td>
                    <td className="publication-col col-date-published">
                      {/*?= $row['date_published'] != null ? $row['date_published'] : "N/A"; ?*/}
                    </td>
                    <td className="publication-col col-authors">
                      {/*?= $row['authors'] != null ? $row['authors'] : "N/A"; ?*/}
                    </td>
                    <td className="publication-col col-funding">
                      {/*?= $row['nature_of_funding'] != null ? $row['nature_of_funding'] : "N/A"; ?*/}
                    </td>
                    <td className="publication-col col-fund-type">
                      {/*?= $row['funding_type'] != null ? $row['funding_type'] : "N/A"; ?*/}
                    </td>
                    <td className="publication-col col-fund-agency">
                      {/*?= $row['funding_source'] != null ? $row['funding_source'] : "N/A"; ?*/}
                    </td>
                    <td className="publication-col col-citations">
                      {/*?= $row['number_of_citation'] != null ? $row['number_of_citation'] : "N/A"; ?*/}
                    </td>
                    <td className="pb-action-btns stickey-col">

                      {/*?php
                      // Check if the $google_link is empty which is prioritized by the redirect button $google_link 
                      = $row['google_scholar_details']; if (empty ($google_link)) { // If the $google_link is empty,
                     set $google_link to null $google_link = null;}?*/}
                      {/*If the $google_link == null, the value will be no_url which is needed to trigger SweetAlert2*/}

                      <a
                        onclick="redirect('<?= $google_link != null ? $google_link : 'no_url'; ?>')"
                        className="gdrive-btn"
                        title="Click to Redirect"
                      >
                        <i className="fa-solid fa-arrow-up-right-from-square" />
                      </a>
                      <form
                        action="../publications/edit/edit-publication.php"
                        method="POST"
                      >
                        <input
                          type="hidden"
                          name="row_id"
                          defaultValue="<?= $row['publication_id'] ?>"
                        />
                        <button type="submit" className="edit-btn" name="edit">
                          <i
                            className="fas fa-pen-to-square icon"
                            title="Click to Edit"
                          />
                        </button>
                      </form>
                      {/*Onclick calls the confirmDelete() function with the registration number as a parameter*/}
                      <button
                        className="delete-btn"
                        name="delete"
                        onclick="confirmDelete('<?= $row['publication_id'] ?>')"
                        title="Click to Delete"
                      >
                        <i className="fas fa-trash-can" />
                      </button>
                    </td>
                  </tr>
                  {/*?php}} else {?*/}
                  <tr>
                    <td colSpan={15} style={{ textAlign: "center" }}>
                      No Records Found!
                    </td>
                    {/*If the $table_rows is empty, this will display instead of the table*/}
                  </tr>
                  {/*?php}?*/}
                </tbody>
              </table>
            </div>
            {/*?php
          include_once 'functionalities/publications_include/pagination.php';
          ?*/}
          <Pagination />
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

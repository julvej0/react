import React from "react";
import "./dashboard.css";
import { AdminNavbar } from "../../../components";

const Dashboard = () => {
  return (
    <div className="DashboardPage">
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
            <img src="../../../assets/images/redspartan_logo.png" alt="redSpartan" />
          </div>
          </div> */}
      <section id="appbar-and-content">
        {/*?php include_once  dirname(__FILE__, 4) . '/components/navbar/admin-navbar.php'; ?*/}
        <main>
          <div className="header">
            <h1 className="title">Dashboard</h1>
            <div className="routes">
              <a href="#" className="nav-button" data-target="#pb-page">
                <span>Publications</span>
              </a>
              <a href="#" className="nav-button" data-target="#ipa-page">
                <span>IP assets</span>
              </a>
            </div>
          </div>
          <section id="pb-page" className="sub-page">
            <div className="content-data">
              <div className="content-card">
                <div className="head">
                  <div>
                    {/*?php
                          // Retrieve the user count using the `getUserCount` function and store it in the variable $user_count
                          $user_count = getUserCount($userurl);
                          
                          // Output the user count within an <h2*/}{" "}
                    <h2>low</h2>
                    <p>Users</p>
                  </div>
                  <i className="bx bx-group icon" />
                </div>
              </div>
              <div className="content-card">
                <div className="head">
                  <div>
                    {/*?php
                          // Retrieve the author count using the `getAuthorCount` function and store it in the variable $author_count
                          $author_count = getAuthorCount($authorurl);

                          // Output the author count within an <h2*/}{" "}
                    HTML element echo '<h2>'.$author_count.'</h2>'; ?&gt;
                    <p>Contributors</p>
                  </div>
                  <i className="bx bxs-group icon" />
                </div>
              </div>
              <div className="content-card">
                <div className="head">
                  <div>
                    {/*?php
                          // Retrieve the article count using the `getArticleCount` function and store it in the variable $article_count
                          $article_count = getArticleCount($publicationurl);

                          // Output the article count within an <h2*/}{" "}
                    HTML element echo '<h2>'.$article_count.'</h2>'; ?&gt;
                    <p>Articles</p>
                  </div>
                  <i className="bx bxs-book-open" />
                </div>
              </div>
            </div>
            <div className="data">
              <div className="main-content-data">
                <div className="head">
                  <h3>Publications Report</h3>
                </div>
                <div className="chart">
                  {/*?php
                      // Retrieve publications data per year using the `getPublicationsPerYear` function and store it in the variable $pub_per_year
                      $pub_per_year = getPublicationsPerYear($publicationurl);

                      // Extract the publications data from the $pub_per_year array and assign it to the variable $publications_data
                      $publications_data = $pub_per_year['data'];

                      // Extract the year labels from the $pub_per_year array and assign them to the variable $publications_year
                      $publications_year = $pub_per_year['labels'];
                  ?*/}
                  <div id="pb-bar-chart"></div>
                </div>
              </div>
              <div className="main-content-data">
                <div className="head">
                  <h3>Type of Publications Report</h3>
                </div>
                <div className="chart">
                  {/*?php
                      // Retrieve publication types and their data using the `getPublicationType` function and store it in the variable $pb_status
                      $pb_status = getPublicationType($publicationurl);

                      // Extract the publication data from the $pb_status array and assign it to the variable $status_data
                      $status_data = $pb_status['data'];

                      // Extract the publication type labels from the $pb_status array and assign them to the variable $status_labels
                      $status_labels = $pb_status['labels'];
                  ?*/}
                  <div id="pb-pie-chart"></div>
                </div>
              </div>
              <div className="main-content-data">
                <div className="head">
                  <h3>Top Contributors</h3>
                </div>
                <div>
                  {/*?php
                  // Call the `getPublicationsContributors` function to retrieve publications contributors using the database connection object $conn
                  echo getPublicationsContributors($authorurl, $publicationurl)
              ?*/}
                </div>
              </div>
              <div className="main-content-data">
                <div className="head">
                  <h3>Most Cited Articles</h3>
                </div>
                <div>
                  {/*?php
                  // Call the `getMostViewedPapers` function to retrieve the most viewed papers using the database connection object $conn
                  echo getMostViewedPapers($publicationurl)
              ?*/}
                </div>
              </div>
            </div>
          </section>
          {/* IP-assets */}
          <section id="ipa-page" className="sub-page">
            <div className="content-data">
              <div className="content-card">
                <div className="head">
                  <div>
                    {/*?php
                          // Retrieve the user count using the `getUserCount` function with an optional parameter and store it in the variable $user_count
                          $user_count = getUserCount($userurl);

                          // Output the user count within an <h2*/}{" "}
                    HTML element echo '<h2>'.$user_count.'</h2>'; ?&gt;
                    <p>Users</p>
                  </div>
                  <i className="bx bx-group icon" />
                </div>
              </div>
              <div className="content-card">
                <div className="head">
                  <div>
                    {/*?php
                          // Retrieve the author count using the `getAuthorCount` function with an optional parameter and store it in the variable $author_count
                          $author_count = getAuthorCount($authorurl);

                          // Output the author count within an <h2*/}{" "}
                    HTML element echo '<h2>'.$author_count.'</h2>'; ?&gt;
                    <p>Contributors</p>
                  </div>
                  <i className="bx bxs-group icon" />
                </div>
              </div>
              <div className="content-card">
                <div className="head">
                  <div>
                    {/*?php
                          // Retrieve the published IP assets using the `getPublishedIPAssets` function and store it in the variable $published_ipassets
                          $published_ipassets = getPublishedIPAssets($ipassetsurl);

                          // Output the published IP assets within an <h2*/}{" "}
                    HTML element echo '<h2>'.$published_ipassets.'</h2>'; ?&gt;
                    <p>Articles</p>
                  </div>
                  <i className="bx bxs-book-open" />
                </div>
              </div>
            </div>
            <div className="data">
              <div className="main-content-data">
                <div className="head">
                  <h3>IP Assets Report</h3>
                </div>
                <div className="chart">
                  {/*?php
                      // Retrieve IP assets per year using the `getIPAssetsPerYear` function and store it in the variable $ipassets_per_year
                      $ipassets_per_year = getIPAssetsPerYear($ipassetsurl);

                      // Extract the IP assets data from the $ipassets_per_year array and assign it to the variable $ipyear_data
                      $ipyear_data = $ipassets_per_year['data'];

                      // Extract the year labels from the $ipassets_per_year array and assign them to the variable $ipyear_labels
                      $ipyear_labels = $ipassets_per_year['labels'];
                  ?*/}
                  <div id="ipa-bar-chart"></div>
                </div>
              </div>
              <div className="main-content-data">
                <div className="head">
                  <h3>IP Assets Report (campus)</h3>
                </div>
                <div className="chart">
                  {/*?php
                      // Retrieve IP assets by campus using the `getIpAssetsCampus` function and store it in the variable $data
                      $data = getIpAssetsCampus($ipassetsurl);

                      // Extract the IP assets data from the $data array and assign it to the variable $campus_data
                      $campus_data = $data["data"];

                      // Extract the campus labels from the $data array and assign them to the variable $campus_labels
                      $campus_labels = $data["labels"];
                  ?*/}
                  <div id="ipa-pie-chart"></div>
                </div>
              </div>
              <div className="main-content-data">
                <div className="head">
                  <h3>Top Contributors</h3>
                </div>
                <div>
                  {/*?php
                  // Call the `getIpAssetsContributors` function to retrieve the contributors of intellectual property (IP) assets using the database connection object $conn
                  echo getIpAssetsContributors($ipassetsurl, $authorurl);
              ?*/}
                </div>
              </div>
              <div className="main-content-data">
                <div className="head">
                  <h3>Recently Added Articles</h3>
                </div>
                <div>
                  {/*?php
                  // Call the `getRecentIpAssets` function to retrieve the most recent intellectual property (IP) assets using the database connection object $conn and a limit of 5
                  getRecentIpAssets($ipassetsurl);
              ?*/}
                </div>
              </div>
            </div>
          </section>
        </main>
        {/* Section closing tag from navbar */}
      </section>
    </div>
  );
};

export default Dashboard;

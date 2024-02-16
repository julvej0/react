import batstateulogo from "../../../assets/images/batStateUNeu-logo.png";
import { Link } from "react-router-dom";
import "./home.css";
import vipcorals from "../../../assets/images/vipcorals.webp";
import "../../../css/boxiconsV2.1.4.min.css";
import { FaArrowRight, FaSearch } from "react-icons/fa";
import useSWR from "swr";
import { useEffect, useState } from "react";
import {
  getMostViewedPapers,
  getPublicationsContributors,
  getRecentPublications,
} from "./functionalities";

function Home() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const {
    data: publicationsData,
    error,
    isValidating,
  } = useSWR("http://localhost:5000/table_publications", fetcher);

  if (error) return <div className="failed">Failed to load</div>;
  if (isValidating) return <div className="Loading">Loading...</div>;

  const publications = publicationsData.table_publications;
  
  return (
    <>
      {/* <div id="loading-screen">
        <div className="loading-img">
          <Link href="/">
            <a>
              <img
                src={batstateulogo}
                alt="/"
                width="85"
                height="90"
                className=""
              />
            </a>
          </Link>
        </div>
      </div> ///for navigation bar*/}
      <div className="home-content">
        <section id="hero-img">
          <div className="rms-title">
            <h1>Research Management Services</h1>
          </div>
          <div className="search">
            <form id="search-form">
              <div className="form-group">
                <select name="dropdown" id="select-option">
                  <option value="publications">Publications</option>
                  <option value="ip-assets">IP Assets</option>
                </select>
              </div>

              <div className="form-group">
                <input type="text" placeholder="Search" id="txt-search" />
                <i className="fa fa-search icon"></i>
              </div>
            </form>
          </div>
        </section>
        <div className="main-container">
          <div className="content">
            <div className="text-white">
              <h3>Publications</h3>
            </div>
            <div className="card-container">
              <div className="card" id="card">
                <div className="card-content">
                  <h3>Top Contributors</h3>
                  <div className="table">
                    <table>
                      <tbody>
                        <tr>
                          <th>Authors</th>
                          <th>Number of Publications</th>
                        </tr>
                        {getPublicationsContributors(publications).map(
                          (authors) => {
                            return (
                              <tr key={authors}>
                                <td>{authors[0]}</td>
                                <td>{authors[1]}</td>
                              </tr>
                            );
                          }
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="card " id="card">
                <div className="card-content">
                  <h3>Most Cited </h3>
                  <div className="table">
                    <table>
                      <tr>
                        <th>Title of Paper</th>
                        <th>Number of Citations</th>
                      </tr>
                      {getMostViewedPapers(publications).map((papers) => {
                        return (
                          <tr>
                            <td>{papers[0]}</td>
                            <td>{papers[1]}</td>
                          </tr>
                        );
                      })}
                    </table>
                  </div>
                </div>
              </div>
              <div className="card " id="card">
                <div className="card-content">
                  <h3>Recently Added </h3>
                  <div className="table">
                    <table>
                      <tr>
                        <th>Title</th>
                        <th>Date Published</th>
                      </tr>
                      {getRecentPublications(publications).map((papers) => {
                        return (
                          <tr>
                            <td>{papers[0]}</td>
                            <td>{papers[1]}</td>
                          </tr>
                        )
                      })}
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="see-more-btn">
              <Link to="/publications">
                See More <FaArrowRight />
              </Link>
            </div>
          </div>
          <div className="content">
            <div className="title">
              <h3>IP ASSETS</h3>
            </div>
            <div className="card-container">
              <div className="card">
                <div className="card-content">
                  <h3>Top Contributors</h3>
                  <div className="table">
                    {"{"}/*{" "}
                    {/*?php
                         // Call the `getIpAssetsContributors` function to retrieve the contributors of intellectual property (IP) assets using the database connection object $conn
                        getIpAssetsContributors($ipassetsurl, $authorurl)
                        ?*/}{" "}
                    */{"}"}
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-content">
                  <h3>Top Campus with IP Assets</h3>
                  <div className="table">
                    {"{"}/*{" "}
                    {/*?php
                        //Call `getTopCampus` function to retrieve the top campus with most ip assets
                        getTopCampus($ipassetsurl)
                        ?*/}{" "}
                    */{"}"}
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-content">
                  <h3>Recently Added</h3>
                  <div className="table">
                    {"{"}/*{" "}
                    {/*?php
                        // Call the `getRecentIpAssets` function to retrieve the most recent intellectual property (IP) assets using the database connection object $conn and a limit of 5
                        getRecentIpAssets($ipassetsurl)
                        ?*/}{" "}
                    */{"}"}
                  </div>
                </div>
              </div>
            </div>
            <div className="see-more-btn">
              <Link to="/ip-assets">
                See More <FaArrowRight />
              </Link>
            </div>
          </div>
          <div className="content">
            <div className="title">
              <h3>ABOUT</h3>
            </div>
            <div className="card-container">
              <div className="card abt-card">
                <div className="abt-img">
                  <img src={vipcorals} alt="" />
                </div>
                <div className="abt-text">
                  <div className="title">
                    <h1>Why do we use it?</h1>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using 'Content here, content here', making it
                      look like readable English.
                    </p>
                  </div>
                  <div className="see-more-btn">
                    <Link to="/">
                      See More <FaArrowRight />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

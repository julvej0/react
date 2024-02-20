import batstateulogo from "../../../assets/images/batStateUNeu-logo.png";
import { Link } from "react-router-dom";
import "./home.css";
import vipcorals from "../../../assets/images/vipcorals.webp";
import "../../../css/boxiconsV2.1.4.min.css";
import { FaArrowRight } from "react-icons/fa";
import useSWR from "swr";
import { useState } from "react";
import {
  getMostViewedPapers, getRecentDatePublished, getRecentDateRegistered, getTopCampus, getTopContributions,
} from "./functionalities";
import { API } from "../../../API";
import Card from "./Card";
import Footer from "../../../components/footer/Footer";

function Home() {
  const [isError, setIsError] = useState(false);
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const {
    data: publicationsData,
    error: publicationsError,
    isValidating: publicationsIsValidating,
  } = useSWR(`${API}/table_publications`, fetcher);

  const {
    data: ipassetsData,
    error: ipassetsError,
    isValidating: ipassetsIsValidating,
  } = useSWR(`${API}/table_ipassets`, fetcher);

  if (publicationsError || ipassetsError) return <div className="Loading">Error...</div>;
  // if (publicationsError) return <div className="Loading">Error...</div>;
  // if (publicationsIsValidating)
  //   return <div className="Loading">Loading...</div>;
  if (publicationsIsValidating || ipassetsIsValidating) return <div className="Loading">Loading...</div>;

  const publications = publicationsData.table_publications;
  const ipassets = ipassetsData.table_ipassets;

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
            <div className="title">
              <h3>Publications</h3>
            </div>
            <div className="card-container">
              <Card header="Top Contributor" title1="Authors" title2="Number of Publications" data={getTopContributions(publications)} />
              <Card header="Most Cited" title1="Title of Paper" title2="Number of Citations" data={getMostViewedPapers(publications)} />
              <Card header="Recently Added" title1="Title" title2="Date Published" data={getRecentDatePublished(publications)} />
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
              <Card header="Top Contributor" title1="Authors" title2="Number of IP Assets" data={getTopContributions(ipassets)} />
              <Card header="Top Campus with IP Assets" title1="Campus" title2="Number of IP Assets" data={getTopCampus(ipassets)} />
              <Card header="Recently Added" title1="Title" title2="Date Registered" data={getRecentDateRegistered(ipassets)} />
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
      
      <Footer />
    </>
  );
}

export default Home;

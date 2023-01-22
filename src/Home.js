import React from "react";
import { Link } from "react-router-dom";
import "./css/Home.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function Home() {
  return (
    <div className="home__container">
      {/* navbar */}
      <nav className="navBar">
        <div className="navBar__block">
          <img
            src="https://www.freeiconspng.com/uploads/realistic-frog-outline-0.png"
            width="350"
            alt="Realistic Frog Outline"
          />
          <h1>Pollution tracker</h1>
        </div>
        <a
          href="https://github.com/mohammedavez125/Pollution-Tracker"
          className="Sc__link"
        >
          <h1>Source Code</h1>
        </a>
      </nav>
      {/* main */}
      <div className="home__mainBlock">
        <div>
          <img
            src="https://static4.depositphotos.com/1000423/399/i/600/depositphotos_3995714-stock-photo-our-own-earth.jpg"
            alt="loading"
            id="img1"
          />
          <div className="container__text">Search Pollution in City</div>
          <Link className="home__div path_link" to="/states">
            <button className="route__button buttonText">
              <SearchOutlinedIcon className="icons" />
              Search In City
            </button>
          </Link>
        </div>
        <div className="container__text">
          <div>Search pollution from your IP address</div>
          <Link className=" path_link" to="./IPgeolocation">
            <button className="route__button buttonText">
              <LocationOnIcon className="icons" />
              IP Geolocation
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;

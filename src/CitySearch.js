import axios from "./axios.js";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RenderThis from "./RenderThis.js";
import "./css/CitySearch.css";

function CitySearch() {
  const key = "02249e35-8124-449e-bb82-e18e3b649efb";
  const [info1, setInfo1] = useState([]);
  const [searchCountry, setSearchCountry] = useState("India");
  const [searchState, setSearchState] = useState("Telangana");
  const [searchCity, setSearchCity] = useState("Hyderabad");
  // http://api.airvisual.com/v2/city?city=Los Angeles&state=California&country=USA&key={{YOUR_API_KEY}}

  useEffect(() => {
    async function fetchData() {
      const req1 = await axios.get(
        `/city?city=${searchCity}&state=${searchState}&country=${searchCountry}&key=${key}`
      );
      setInfo1(req1.data);
    }
    fetchData();
  }, [searchCountry, searchState, searchCity]);
  const data = info1?.data;
  console.log(data);
  return (
    <div className="mainContainer">
      <h1>Search In City</h1>
      <div className="buttonContainer">
        <input
          type="search"
          className="searchCountry searchBox"
          id="countryInput"
          placeholder="Country Name"
        />
        <input
          type="search"
          className="searchState searchBox"
          id="stateInput"
          placeholder="State Name"
        />
        <input
          type="search"
          className="searchCity searchBox"
          id="cityInput"
          placeholder="City Name"
        />
      </div>
      <div>
        <button
          className="buttons"
          onClick={() => {
            var input1 = document.getElementById("countryInput").value;
            var input2 = document.getElementById("stateInput").value;
            var input3 = document.getElementById("cityInput").value;
            setSearchCountry(input1);
            setSearchState(input2);
            setSearchCity(input3);
            console.log(searchCountry);
          }}
        >
          Search
        </button>
      </div>
      <div>
        <RenderThis info={data} />
      </div>
      <Link to="/">
        <button className="buttons">back</button>
      </Link>
    </div>
  );
}

export default CitySearch;

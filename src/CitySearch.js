import axios from "./axios.js";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function CitySearch() {
  const key = "e111813b-0f99-4ef2-8e73-c75ce62b2e32";
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

  return (
    <div>
      <h1>Search In City</h1>
      <br />
      <input
        type="search"
        className="searchCountry"
        id="countryInput"
        placeholder="Country Name"
      />
      <input
        type="search"
        className="searchState"
        id="stateInput"
        placeholder="State Name"
      />
      <input
        type="search"
        className="searchCity"
        id="cityInput"
        placeholder="City Name"
      />
      <button
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
        Click
      </button>
      <div>
        {
          //   info1?.data?.state.map((item) => {
          //     return (
          //       <div>
          //         <h1>{item}</h1>
          //       </div>
          //     );
          //   })
          JSON.stringify(info1)
        }
      </div>
      <Link to="/">
        <button>back</button>
      </Link>
    </div>
  );
}

export default CitySearch;

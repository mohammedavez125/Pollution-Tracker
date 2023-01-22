import axios from "./axios.js";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./css/IPgeolocation.css";
import RenderThis from "./RenderThis.js";

function IPgeolocation() {
  const key = "02249e35-8124-449e-bb82-e18e3b649efb";
  const [info, setInfo] = useState([]);
  // const [search, setSearch] = useState("India");

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get(`/nearest_city?key=${key}`);
      setInfo(req.data);
    }
    fetchData();
  });
  const data = info?.data;

  return (
    <div className="mainDiv">
      <h1>IP Geolocation</h1>

      {/* {JSON.stringify(data)} */}
      <div className="renderer">
        <RenderThis info={data} />
        <img src="https://media.licdn.com/dms/image/C5112AQFoWvjosy1ztA/article-cover_image-shrink_600_2000/0/1581337369402?e=2147483647&v=beta&t=8YAt5ZNZTRDqZzcKiQpiOsDhrd_aVA20o3mHeOJXYUw" />
      </div>

      <Link to="/">
        <button className="backButton">Home</button>
      </Link>
    </div>
  );
}

export default IPgeolocation;

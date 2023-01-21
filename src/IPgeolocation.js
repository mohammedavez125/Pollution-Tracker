import axios from "./axios.js";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function IPgeolocation() {
  const key = "e111813b-0f99-4ef2-8e73-c75ce62b2e32";
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
    <div>
      IPgeolocation
      {/* {JSON.stringify(data)} */}
      <br />
      <ol>
        <li>City={data?.city}</li>
        <li>State={data?.state}</li>
        <li>country={data?.country}</li>
        <li>{console.log(JSON.stringify(data))}</li>
      </ol>
      <Link to="/">
        <button>Home</button>
      </Link>
    </div>
  );
}

export default IPgeolocation;

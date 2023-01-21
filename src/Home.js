import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Routes</h1>
      <Link className="home__div" to="/states">
        <button>Search In City</button>
      </Link>
      <br />
      <Link to="./IPgeolocation">
        <button>IPgeolocation</button>
      </Link>
    </div>
  );
}

export default Home;

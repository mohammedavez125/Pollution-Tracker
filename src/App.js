import CitySearch from "./CitySearch";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home.js";
import IPgeolocation from "./IPgeolocation";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/states" element={<CitySearch />} />
          <Route path="/IPgeolocation" element={<IPgeolocation />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

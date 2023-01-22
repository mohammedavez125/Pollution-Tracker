import React from "react";
import "./css/RenderThis.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import CompressIcon from "@mui/icons-material/Compress";
import OpacityIcon from "@mui/icons-material/Opacity";
import AirIcon from "@mui/icons-material/Air";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import NightlightIcon from "@mui/icons-material/Nightlight";
import CloudIcon from "@mui/icons-material/Cloud";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import SevereColdIcon from "@mui/icons-material/SevereCold";

function RenderThis({ info }) {
  const weather = info?.current?.weather;
  const pollution = info?.current?.pollution;
  const aqi = pollution?.aqius;
  const aqiLevel = () => {
    if (aqi <= 50) {
      return <div className="textDiv"> {info?.city} is good</div>;
    } else if (aqi <= 100) {
      return <div className="textDiv"> {info?.city} is good</div>;
    } else if (aqi <= 200) {
      return <div className="textDiv"> {info?.city} is Satisfactory</div>;
    } else if (aqi <= 300) {
      return <div className="textDiv"> {info?.city} is Moderate</div>;
    } else if (aqi <= 400) {
      return <div className="textDiv"> {info?.city} is Poor</div>;
    } else if (aqi <= 500) {
      return <div className="textDiv"> {info?.city} is Severe</div>;
    }
  };
  const weatherIcon = () => {
    switch (weather?.ic) {
      case "01d":
        return (
          <div className="dataDiv">
            <WbSunnyIcon className="icons" />
            weather = Clear Sky
          </div>
        );
      case "01n":
        return (
          <div className="dataDiv">
            <NightlightIcon className="icons" />
            weather = Clear Sky
          </div>
        );
      case "02d":
        return (
          <div className="dataDiv">
            <CloudIcon className="icons" />
            weather = Few Clouds
          </div>
        );
      case "02n":
        return (
          <div className="dataDiv">
            <CloudIcon className="icons" />
            weather = Few Clouds
          </div>
        );
      case "03d":
        return (
          <div className="dataDiv">
            <CloudIcon className="icons" />
            weather = Scattered Clouds
          </div>
        );
      case "04d":
        return (
          <div className="dataDiv">
            <CloudIcon className="icons" />
            weather = Broken Clouds
          </div>
        );
      case "09d":
        return (
          <div className="dataDiv">
            <ThunderstormIcon className="icons" />
            weather = Shower Rain
          </div>
        );
      case "10d":
        return (
          <div className="dataDiv">
            <ThunderstormIcon className="icons" />
            weather = Rain
          </div>
        );
      case "10n":
        return (
          <div className="dataDiv">
            <ThunderstormIcon className="icons" />
            weather = Rain
          </div>
        );
      case "11d":
        return (
          <div className="dataDiv">
            <ThunderstormIcon className="icons" />
            weather = Thunderstorm
          </div>
        );
      case "13d":
        return (
          <div className="dataDiv">
            <SevereColdIcon className="icons" />
            weather = Snow
          </div>
        );
      case "50d":
        return (
          <div className="dataDiv">
            <AcUnitIcon className="icons" />
            Weather = Mist
          </div>
        );
    }
  };
  return (
    <div className="testClass">
      <div className="maincontainer">
        <div className="container__part">
          <div className="dataDiv">
            <LocationOnIcon className="icons" />
            <div className="textDiv">
              {info?.country},{info?.state},{info?.city}
            </div>
          </div>
          <div className="dataDiv">
            <DeviceThermostatIcon className="icons" />
            <div className="textDiv">
              <div className="textDiv">Temperature = {weather?.tp} °C</div>
            </div>
          </div>
          <div className="dataDiv">
            <CompressIcon className="icons" />
            <div className="textDiv">
              Atmospheric Pressure = {weather?.pr} hPa
            </div>
          </div>
        </div>
        <div className="container__part">
          <div className="dataDiv ">
            <OpacityIcon className="icons" />
            <div className="textDiv">Humidity = {weather?.hu}</div>
          </div>
          <div className="dataDiv">
            <AirIcon className="icons" />
            <div className="textDiv">Wind Speed = </div>
            {weather?.ws}
          </div>
          <div className="dataDiv">{weatherIcon()}</div>
        </div>
      </div>
      <div className="createSpace">
        <div className="dataDiv aqidiv">
          <div className="textDiv">Air Quality in </div>
          <div> {aqiLevel()}</div>
          <div className="textDiv"> AQI = {aqi}</div>
        </div>
      </div>
    </div>
  );
}

export default RenderThis;

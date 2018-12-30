import React, { Component } from "react";
import fullDate from "../date";

class WeatherDisplay extends Component {
  render() {
    const {
      city,
      country,
      temperature,
      feelslike,
      condition,
      conditionImg,
      humidity,
      wind,
      lastUpdated
    } = this.props.weatherData;
    const { fetchError, errorMessage, wasCityFound } = this.props;
    if (fetchError)
      return (
        <div className="jumbo">
          <h4 className="text-center" style={{ color: "red" }}>
            {errorMessage}
          </h4>
          <br />
          <h5 className="text-center" style={{ color: "red" }}>
            Check your internet connection!
          </h5>
        </div>
      );
    else if (!wasCityFound)
      return (
        <div className="jumbo">
          <h4 className="text-center" style={{ color: "red" }}>
            City was not found.
          </h4>
        </div>
      );
    else
      return (
        <div>
          <div className="jumbo">
            <h5 className="text-center">
              {city} <small> - {country}</small>
            </h5>
            <p className="text-center">{fullDate}</p>
            <h2 className="display-4 text-center">
              {conditionImg}{" "}
              <strong>
                {temperature}°<span>c</span>
              </strong>
            </h2>
            <h6 className="text-center">{condition}</h6>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="row">
              <p className="col-sm-4 text-center">
                <strong>Feelslike: </strong>
                {feelslike}°c
              </p>
              <p className="col-sm-4 text-center">
                <strong>Humidity: </strong>
                {humidity}%
              </p>
              <p className="col-sm-4 text-center">
                <strong>Wind: </strong>
                {wind} km/h
              </p>
            </div>
            <br />
            <div className="jumbo-footer">
              <p className="text-right">
                <strong>Last Updated: </strong>
                {lastUpdated}
              </p>
            </div>
          </div>
        </div>
      );
  }
}

export default WeatherDisplay;

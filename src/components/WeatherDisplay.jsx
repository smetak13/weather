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
    const { maxTemp, minTemp } = this.props.forecastData;
    const { fetchError, errorMessage, wasCityFound } = this.props;
    if (fetchError)
      return (
        <div className="jumbo-error">
          <h4 className="text-center" style={{ color: "red" }}>
            {errorMessage}
          </h4>
          <br />
          <h5 className="text-center">Check your internet connection!</h5>
        </div>
      );
    else if (!wasCityFound)
      return (
        <div className="jumbo-error">
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
              <img src={conditionImg} alt="" />
              <strong>
                {temperature}°<span>c</span>
              </strong>
            </h2>
            <h6 className="text-center">{condition}</h6>
            <br />
            <br />
            <div className="row min-max-temp">
              <div className="col-sm-6 text-center">
                <h6>Daily max:</h6>
                <h3>{maxTemp}</h3>
              </div>
              <div className="col-sm-6 text-center">
                <h6>Daily min:</h6>
                <h3>{minTemp}</h3>
              </div>
            </div>
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

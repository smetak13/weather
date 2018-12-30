import React, { Component } from "react";

class WeatherDisplay extends Component {
  render() {
    const {
      city,
      country,
      temperature,
      feelslike,
      condition,
      humidity,
      wind,
      lastUpdated
    } = this.props.weatherData;
    const { fetchError, errorMessage } = this.props;
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
    else if (city === undefined)
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
            <p>
              <strong>City: </strong>
              {city}
            </p>
            <p>
              <strong>Country: </strong>
              {country}
            </p>
            <p>
              <strong>Temperature: </strong>
              {temperature}°C
            </p>
            <p>
              <strong>Feels like: </strong>
              {feelslike}°C
            </p>
            <p>
              <strong>Condition: </strong>
              {condition}
            </p>
            <p>
              <strong>Humidity: </strong>
              {humidity}%
            </p>
            <p>
              <strong>Wind: </strong>
              {wind} km/h
            </p>
            <p>
              <strong>Last Updated: </strong>
              {lastUpdated}
            </p>
          </div>
        </div>
      );
  }
}

export default WeatherDisplay;

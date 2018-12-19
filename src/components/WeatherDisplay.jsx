import React, { Component } from "react";

class WeatherDisplay extends Component {
  render() {
    if (this.props.weatherData.city === undefined)
      return (
        <div className="jumbo">
          <h4 className="text-center" style={{ color: "red" }}>
            City was not found.
          </h4>
        </div>
      );
    return (
      <div>
        <div className="jumbo">
          <p>
            <strong>City: </strong>
            {this.props.weatherData.city}
          </p>
          <p>
            <strong>Country: </strong>
            {this.props.weatherData.country}
          </p>
          <p>
            <strong>Temperature: </strong>
            {this.props.weatherData.temperature}°C
          </p>
          <p>
            <strong>Feels like: </strong>
            {this.props.weatherData.feelslike}°C
          </p>
          <p>
            <strong>Condition: </strong>
            {this.props.weatherData.condition}
          </p>
          <p>
            <strong>Humidity: </strong>
            {this.props.weatherData.humidity}%
          </p>
          <p>
            <strong>Wind: </strong>
            {this.props.weatherData.wind} km/h
          </p>
          <p>
            <strong>Last Updated: </strong>
            {this.props.weatherData.lastUpdated}
          </p>
        </div>
      </div>
    );
  }
}

export default WeatherDisplay;

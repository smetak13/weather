import React, { Component } from "react";

class WeatherDisplay extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid">
        <div className="jumbotron">
          <p>
            <strong>City: </strong>
            {this.props.city}
          </p>
          <p>
            <strong>Country: </strong>
            {this.props.country}
          </p>
        </div>
      </div>
    );
  }
}

export default WeatherDisplay;

import React, { Component } from "react";

class WeatherDisplay extends Component {
  state = {
    months: [
      "january",
      "february",
      "march",
      "april",
      "may",
      "june",
      "july",
      "august",
      "september",
      "october",
      "november",
      "december"
    ]
  };
  getNextDays = number => {
    let day = new Date(this.props.currentTime);
    let nextDay = new Date(day);
    nextDay.setDate(day.getDate() + number);
    return `${nextDay.getDate()}. ${this.state.months[nextDay.getMonth()]}`;
  };

  render() {
    const {
      city,
      country,
      temperature,
      condition,
      conditionImg,
      lastUpdated
    } = this.props.weatherData;
    const {
      maxTemp,
      minTemp,
      maxTemp1,
      minTemp1,
      maxTemp2,
      minTemp2,
      forecastConditionImg,
      forecastConditionImg1,
      forecastConditionImg2
    } = this.props.forecastData;
    const { fetchError, errorMessage, wasCityFound, currentTime } = this.props;
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
            <p className="text-center">{currentTime}</p>
            <h2 className="display-4 text-center">
              <img className="m-2" src={conditionImg} alt="" />
              <strong>
                {temperature}°<span>c</span>
              </strong>
            </h2>
            <h6 className="text-center">{condition}</h6>
            <br />
            <br />
            <div className="row">
              <div className="text-center col-sm-4">
                <h5 className="date text-center">
                  Today
                  <div>
                    <img src={forecastConditionImg} alt="" />
                  </div>
                </h5>
                <div className="day">
                  <div className="text-right">
                    <h6>Daily max:</h6>
                    <h3>{maxTemp}</h3>
                  </div>
                  <div className="text-left">
                    <h6>Daily min:</h6>
                    <h3>{minTemp}</h3>
                  </div>
                </div>
              </div>
              <div className="text-center col-sm-4">
                <h5 className="date text-center">
                  {this.getNextDays(1)}
                  <div>
                    <img src={forecastConditionImg1} alt="" />
                  </div>
                </h5>
                <div className="day">
                  <div className="text-right">
                    <h6>Daily max:</h6>
                    <h3>{maxTemp1}</h3>
                  </div>
                  <div className="text-left">
                    <h6>Daily min:</h6>
                    <h3>{minTemp1}</h3>
                  </div>
                </div>
              </div>
              <div className="text-center col-sm-4">
                <h5 className="date text-center">
                  {this.getNextDays(2)}
                  <div>
                    <img src={forecastConditionImg2} alt="" />
                  </div>
                </h5>
                <div className="day">
                  <div className="text-right">
                    <h6>Daily max:</h6>
                    <h3>{maxTemp2}</h3>
                  </div>
                  <div className="text-left">
                    <h6>Daily min:</h6>
                    <h3>{minTemp2}</h3>
                  </div>
                </div>
              </div>
            </div>
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

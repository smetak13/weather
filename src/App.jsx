import React, { Component } from "react";
import "./App.css";
import Introduction from "./components/Introduction";
import Form from "./components/Form";
import WeatherDisplay from "./components/WeatherDisplay";
import Footer from "./components/Footer";
import backgrounds from "./backgrounds";

class App extends Component {
  state = {
    weatherData: {},
    forecastData: {},
    currentTime: "",
    backgrounds,
    backgroundImgUrl: "",
    fetchError: false,
    errorMessage: undefined,
    wasCityFound: true,
    wereDataSearched: false
  };

  getData = e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    this.fetchData(city);
  };

  fetchTime(timeZone) {
    const API_KEY = "YKWEVTP2AJHD";
    const link = `http://api.timezonedb.com/v2.1/get-time-zone?key=${API_KEY}&format=json&by=zone&zone=${timeZone}`;
    fetch(link)
      .then(response => response.json())
      .then(data => {
        this.setState({ currentTime: data.formatted });
      });
  }

  fetchData(city) {
    const API_KEY = "f7f0746423dc40efa80133843181912";
    const FORECAST_DAYS = 7;
    const link = `http://api.apixu.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=${FORECAST_DAYS}`;
    fetch(link)
      .then(response => response.json())
      .then(data => {
        this.setState({
          fetchError: false,
          wasCityFound: true,
          wereDataSearched: true
        });
        if (data.location === undefined)
          return this.setState({ wasCityFound: false });
        else
          return this.setState({
            weatherData: {
              city: data.location.name,
              timeZone: data.location.tz_id,
              country: data.location.country,
              temperature: data.current.temp_c,
              condition: data.current.condition.text,
              conditionImg: data.current.condition.icon,
              lastUpdated: data.current.last_updated
            },
            forecastData: {
              maxTemp: data.forecast.forecastday[0].day.maxtemp_c,
              minTemp: data.forecast.forecastday[0].day.mintemp_c,
              maxTemp1: data.forecast.forecastday[1].day.maxtemp_c,
              minTemp1: data.forecast.forecastday[1].day.mintemp_c,
              maxTemp2: data.forecast.forecastday[2].day.maxtemp_c,
              minTemp2: data.forecast.forecastday[2].day.mintemp_c,
              forecastConditionImg:
                data.forecast.forecastday[0].day.condition.icon,
              forecastConditionImg1:
                data.forecast.forecastday[1].day.condition.icon,
              forecastConditionImg2:
                data.forecast.forecastday[2].day.condition.icon,
              data: data
            }
          });
      })
      .then(() => {
        this.fetchTime(this.state.weatherData.timeZone);
        this.changeBackground();
      })
      .catch(error => {
        return this.setState({
          fetchError: true,
          errorMessage: error.message
        });
      });
  }

  getRandomNumber(start, range) {
    return Math.round(Math.random() * (range - start) + start);
  }

  changeBackground() {
    this.setState({
      backgroundImgUrl: `url(${
        this.state.backgrounds[
          this.getRandomNumber(0, this.state.backgrounds.length - 1)
        ].url
      })`
    });
  }

  componentDidMount() {
    this.changeBackground();
  }

  render() {
    const {
      backgroundImgUrl,
      weatherData,
      forecastData,
      currentTime,
      fetchError,
      errorMessage,
      wasCityFound,
      wereDataSearched
    } = this.state;
    if (!wereDataSearched)
      return (
        <div
          className="App bg-dark"
          style={{
            backgroundImage: backgroundImgUrl,
            backgroundSize: "cover",
            transition: "4s"
          }}
        >
          <div className="form-component bg-dark text-right">
            <Form getData={this.getData} />
          </div>
          <div className="container">
            <Introduction />
          </div>
          <div className="footer-component fixed-bottom bg-dark text-right">
            <Footer />
          </div>
        </div>
      );
    else
      return (
        <div
          className="App bg-dark"
          style={{
            backgroundImage: backgroundImgUrl,
            backgroundSize: "cover",
            transition: "4s"
          }}
        >
          <div className="form-component bg-dark text-right">
            <Form getData={this.getData} />
          </div>
          <div className="container">
            <WeatherDisplay
              weatherData={weatherData}
              forecastData={forecastData}
              currentTime={currentTime}
              fetchError={fetchError}
              errorMessage={errorMessage}
              wasCityFound={wasCityFound}
            />
          </div>
          <div className="footer-component fixed-bottom bg-dark text-right">
            <Footer />
          </div>
        </div>
      );
  }
}

export default App;

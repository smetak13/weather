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
    const API_KEY = "8a3c715b7cab0c9950a816c544a25fce";
    const link = `http://api.weatherstack.com/current?access_key=${API_KEY}&query=${city}`;
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
              timeZone: data.location.timezone_id,
              country: data.location.country,
              temperature: data.current.temperature,
              condition: data.current.weather_descriptions[0],
              conditionImg: data.current.weather_icons[0],
              lastUpdated: data.current.observation_time
            },
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

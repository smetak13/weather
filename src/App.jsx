import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";
import WeatherDisplay from "./components/WeatherDisplay";
import Footer from "./components/Footer";
import backgrounds from "./backgrounds";

class App extends Component {
  state = {
    weatherData: {
      city: "Praha",
      country: "Czech Republic",
      temperature: 10,
      feelslike: 8,
      condition: "Slight rain",
      conditionImg: "",
      humidity: 80,
      wind: 15,
      lastUpdated: "2018-12-30 13:00"
    },
    backgrounds,
    backgroundImgUrl: "",
    fetchError: false,
    errorMessage: undefined,
    wasCityFound: true
  };

  getData = e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    this.fetchData(city);
  };

  fetchData(city) {
    const API_KEY = "f7f0746423dc40efa80133843181912";
    const FORECAST_DAYS = 7;
    const link = `http://api.apixu.com/v1/current.json?key=${API_KEY}&q=${city}`;
    const link2 = `http://api.apixu.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=${FORECAST_DAYS}`;
    Promise.all([fetch(link), fetch(link2)])
      .then(allResponses => allResponses.forEach(response => response.json()))
      .then(data => {
        const currentWeather = data[0];
        const forecast = data[1];
        this.setState({ fetchError: false, wasCityFound: true });
        if (currentWeather.location === undefined)
          return this.setState({ wasCityFound: false });
        else
          return this.setState({
            weatherData: {
              city: currentWeather.location.name,
              country: currentWeather.location.country,
              temperature: currentWeather.current.temp_c,
              feelslike: currentWeather.current.feelslike_c,
              condition: currentWeather.current.condition.text,
              conditionImg: currentWeather.current.condition.icon,
              humidity: currentWeather.current.humidity,
              wind: currentWeather.current.wind_kph,
              lastUpdated: currentWeather.current.last_updated
            }
          });
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
    setInterval(() => {
      this.changeBackground();
    }, 10000);
  }

  render() {
    const {
      backgroundImgUrl,
      weatherData,
      fetchError,
      errorMessage,
      wasCityFound
    } = this.state;
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
        <div className="display-component container">
          <WeatherDisplay
            weatherData={weatherData}
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

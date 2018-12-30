import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";
import WeatherDisplay from "./components/WeatherDisplay";
import Footer from "./components/Footer";
import backgrounds from "./backgrounds";

class App extends Component {
  state = {
    weatherData: {
      city: null
    },
    backgrounds,
    backgroundImgUrl: "",
    fetchError: false,
    errorMessage: undefined
  };

  getData = e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    this.fetchData(city);
  };

  fetchData(city) {
    const API_KEY = "f7f0746423dc40efa80133843181912";
    const link = `http://api.apixu.com/v1/current.json?key=${API_KEY}&q=${city}`;
    fetch(link)
      .then(response => response.json())
      .then(data => {
        this.setState({ fetchError: false });
        if (data.location === undefined)
          return this.setState({ weatherData: { city: undefined } });
        else
          return this.setState({
            weatherData: {
              city: data.location.name,
              country: data.location.country,
              temperature: data.current.temp_c,
              feelslike: data.current.feelslike_c,
              condition: data.current.condition.text,
              conditionImg: data.current.condition.icon,
              humidity: data.current.humidity,
              wind: data.current.wind_kph,
              lastUpdated: data.current.last_updated
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
      errorMessage
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

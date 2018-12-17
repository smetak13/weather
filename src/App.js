import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";
import Header from "./components/Header";
import WeatherDisplay from "./components/WeatherDisplay";
import Footer from "./components/Footer";

class App extends Component {
  state = {
    city: undefined,
    country: undefined
  };

  getData = e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    this.fetchData(city, country);
  };

  fetchData(city, country) {
    const API_KEY = "68b31310b79d9990a172d5a08816b154";
    const link = `api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}`;
    fetch(link)
      .then(response => response.json())
      .then(data => console.log(data));
  }

  render() {
    return (
      <div className="App">
        <div className="form-component bg-dark text-right">
          <Form getData={this.getData} />
        </div>
        <div className="header-component container">
          <Header />
        </div>
        <div className="display-component container">
          <WeatherDisplay city={this.state.city} country={this.state.country} />
        </div>
        <div className="footer-component fixed-bottom bg-dark text-right">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;

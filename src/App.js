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

  fetchData = e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    this.setState({
      city,
      country
    });
  };

  render() {
    return (
      <div className="App">
        <div className="form-component bg-dark text-right">
          <Form fetchData={this.fetchData} />
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

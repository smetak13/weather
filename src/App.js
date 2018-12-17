import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";
import Header from "./components/Header";
import WeatherDisplay from "./components/WeatherDisplay";

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
      <div className="App container-fluid">
        <Header />
        <div className="content">
          <div className="form-component">
            <Form fetchData={this.fetchData} />
          </div>
          <div className="display-component">
            <WeatherDisplay
              city={this.state.city}
              country={this.state.country}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

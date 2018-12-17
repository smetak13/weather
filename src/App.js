import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";
import Header from "./components/Header";
import WeatherDisplay from "./components/WeatherDisplay";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Form />
        <WeatherDisplay />
      </div>
    );
  }
}

export default App;

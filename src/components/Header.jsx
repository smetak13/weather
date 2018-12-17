import React, { Component } from "react";
import logo from "../logo.svg";

class Header extends Component {
  state = {};
  render() {
    return (
      <div>
        <img className="img-fluid" src={logo} alt="logo" width="200" />
      </div>
    );
  }
}

export default Header;

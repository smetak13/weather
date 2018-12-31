import React, { Component } from "react";

class Introduction extends Component {
  state = {};
  render() {
    return (
      <div className="jumbo-error">
        <h4 className="text-center" style={{ color: "red" }}>
          Find out the weather in your town
        </h4>
        <br />
        <h5 className="text-center">
          Use the searchbar at the top of the page
        </h5>
      </div>
    );
  }
}

export default Introduction;

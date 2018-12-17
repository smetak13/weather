import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <div className="form">
        <form onSubmit={this.props.fetchData}>
          <input
            className="m-1 form-group"
            type="text"
            name="city"
            placeholder="City..."
          />
          <input
            className="m-1 form-group"
            type="text"
            name="country"
            placeholder="Country..."
          />
          <button className="btn btn-sm btn-secondary m-2">Get Weather</button>
        </form>
      </div>
    );
  }
}

export default Form;

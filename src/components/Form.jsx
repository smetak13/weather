import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <div>
        <form className="form" onSubmit={this.props.getData}>
          <input
            className="m-1"
            type="text"
            name="city"
            placeholder="City..."
          />
          <input
            className="m-1"
            type="text"
            name="country"
            placeholder="Country..."
          />
          <button className="btn btn-sm btn-secondary m-2">Get Weather</button>
        </form>
        <hr />
      </div>
    );
  }
}

export default Form;

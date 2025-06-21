import React, { Component } from "react";
import "./Counter.css";

class ClassCounter extends Component {
  state = { count: 0 };

  increment = () => this.setState({ count: this.state.count + 1 });

  decrement = () =>
    this.setState((prevState) => ({
      count: prevState.count > 0 ? prevState.count - 1 : 0,
    }));

  render() {
    return (
      <div className="counter-box">
        <h2>Class Component</h2>
        <p>{this.state.count}</p>
        <div>
          <button onClick={this.decrement}>-</button>
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    );
  }
}

export default ClassCounter;

import React, { Component } from "react";

export default class NewClass extends Component<{}, { count: number }> {
  constructor(props) {
    super(props);
    this.state = { count: 1 };
  }

  increment = () => {
    const { count } = this.state;
    this.setState({ count: count + 1 });
  };

  render = () => {
    const { count } = this.state;
    return (
      <div>
        <p>This is the count {count}</p>
        <button type="button" onClick={this.increment}>
          increment
        </button>
      </div>
    );
  };
}

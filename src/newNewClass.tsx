import React, { Component } from "react";

export default class NewNweClass extends Component<{}, { count: number }> {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = (): void => {
    const { count } = this.state;
    this.setState({ count: count + 1 });
  };

  render = (): JSX.Element => {
    const { count } = this.state;

    return (
      <div>
        <p>{count}</p>
        <button type="button" onClick={this.increment}>
          increment
        </button>
      </div>
    );
  };
}

import * as React from "react";

export default class Counter extends React.Component<{}, { count: number }> {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment = (): void => {
    const { count } = this.state;
    this.setState({
      count: count + 1
    });
  };

  decrement = (): void => {
    const { count } = this.state;
    this.setState({
      count: count - 1
    });
  };

  render(): JSX.Element {
    const { count } = this.state;
    return (
      <div>
        <h1>{count}</h1>
        <button type="button" onClick={this.increment}>
          Increment
        </button>
        <button type="button" onClick={this.decrement}>
          Decrement
        </button>
      </div>
    );
  }
}

import React from "react";
import { StateProps, DispatchProps } from "./CounterSimpleRedux.model";

const counterSimpleRedux: React.FC<StateProps & DispatchProps> = (
  props: StateProps & DispatchProps
) => {
  const { count, increment } = props;
  return (
    <div>
      <h1>Function Component</h1>
      <h3>{count}</h3>
      <button type="button" onClick={increment}>
        Increment
      </button>
    </div>
  );
};

export default counterSimpleRedux;

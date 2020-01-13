import * as React from "react";
import CounterClass from "./CounterClass";
import CounterFunction from "./CounterFunction";

export default (): JSX.Element => (
  <div>
    <CounterFunction title1="Increment" title2="Decrement" />
    <CounterClass />
  </div>
);

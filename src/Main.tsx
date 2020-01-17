import * as React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import CounterClass from "./CounterClass";
import CounterFunction from "./CounterFunction";
import CounterSimpleRedux from "./counterSimpleRedux/CounterSimpleRedux.container";

const main: React.FC<{}> = () => (
  <Provider store={store}>
    <CounterFunction title1="Increment" title2="Decrement" />
    <CounterClass />
    <CounterSimpleRedux />
  </Provider>
);

export default main;

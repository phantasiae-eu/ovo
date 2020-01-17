import { Reducer } from "redux";
import { StateProps, defaultStateProps } from "./CounterSimpleRedux.model";
import { AIncrement, INCREMENT } from "./CounterSimpleRedux.actions";

const counterSimpleRedux: Reducer<StateProps, AIncrement> = (
  state: StateProps = defaultStateProps,
  action: AIncrement
): StateProps => {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    default:
      return state;
  }
};

export default counterSimpleRedux;

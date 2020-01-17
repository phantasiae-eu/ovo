import { Dispatch } from "redux";
import { AIncrement } from "./CounterSimpleRedux.actions";

export interface StateProps {
  count: number;
}

export const defaultStateProps: StateProps = {
  count: 0
};

export interface DispatchProps {
  increment: () => AIncrement;
  dispatch: Dispatch;
}

import { connect } from "react-redux";
import { Dispatch } from "redux";
import CounterSimpleReduxComponent from "./CounterSimpleRedux.component";
import { StateProps, DispatchProps } from "./CounterSimpleRedux.model";
import { AIncrement, incrementACreator } from "./CounterSimpleRedux.actions";
import { AppState } from "../store/store.model";

const mapStateToProps = (state: AppState): StateProps => ({
  count: state.counterSimpleRedux.count
});
const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  increment: (): AIncrement => dispatch(incrementACreator()),
  dispatch
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterSimpleReduxComponent);

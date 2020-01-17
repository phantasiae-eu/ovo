import { combineReducers } from "redux";
import counterSimpleRedux from "../counterSimpleRedux/counterSimpleRedux.reducer";

const rootReducer = combineReducers({ counterSimpleRedux });

export default rootReducer;

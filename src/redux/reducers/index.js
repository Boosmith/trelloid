import { combineReducers } from "redux";
import apiCallsInProgress from "./apiStatusReducer";
import cards from "./cardReducer";
import users from "./userReducer";

const rootReducer = combineReducers({
	apiCallsInProgress,
	cards,
	users
});

export default rootReducer;

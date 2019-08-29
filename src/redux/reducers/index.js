import { combineReducers } from "redux";
import apiCallsInProgress from "./apiStatusReducer";
import authentication from "./authReducer";
import cards from "./cardReducer";
import users from "./userReducer";

const rootReducer = combineReducers({
	apiCallsInProgress,
	authentication,
	cards,
	users
});

export default rootReducer;

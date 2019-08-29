import { combineReducers } from "redux";
import apiCallsInProgress from "./apiStatusReducer";
import auth from "./authReducer";
import cards from "./cardReducer";
import users from "./userReducer";

const rootReducer = combineReducers({
	apiCallsInProgress,
	auth,
	cards,
	users
});

export default rootReducer;

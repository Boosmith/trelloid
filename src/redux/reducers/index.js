import { combineReducers } from "redux";
import apiCallsInProgress from "./apiStatusReducer";

import users from "./userReducer";

const rootReducer = combineReducers({
	apiCallsInProgress,
	users
});

export default rootReducer;

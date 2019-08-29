import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function authReducer(state = initialState.users, action) {
	switch (action.type) {
		case actionTypes.LOGIN_SUCCESS:
			return action.user;
		default:
			return state;
	}
}

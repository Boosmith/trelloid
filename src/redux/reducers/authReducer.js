import * as actionTypes from "../actions/actionTypes";

export default function authentication(state = {}, action) {
	switch (action.type) {
		case actionTypes.LOGIN_REQUEST:
			return { loggingIn: true, user: action.user };
		case actionTypes.LOGIN_SUCCESS:
			return { loggedIn: true, user: action.user };
		default:
			return state;
	}
}

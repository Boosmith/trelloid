import * as actionTypes from "./actionTypes";

export function loginFailure(user) {
	return { type: actionTypes.LOGIN_FAILURE, user: user };
}

export function loginRequest(user) {
	return { type: actionTypes.LOGIN_REQUEST, user: user };
}

export function loginSuccess(user) {
	return { type: actionTypes.LOGIN_SUCCESS, user: user };
}

export function logout(user) {
	return { type: actionTypes.LOGOUT, user: user };
}

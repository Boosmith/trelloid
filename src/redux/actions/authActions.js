import * as actionTypes from "./actionTypes";
import { beginApiCall } from "./apiStatusActions";
import authApi from "../../api/authApi";

export function loginFailure(user) {
	return { type: actionTypes.LOGIN_FAILURE, user: user };
}

export function loginRequest(user) {
	return { type: actionTypes.LOGIN_REQUEST, user: user };
}

export function loginSuccess(user) {
	return { type: actionTypes.LOGIN_SUCCESS, user: user };
}

export function logoutSuccess(user) {
	return { type: actionTypes.LOGOUT_SUCCESS };
}

export function login(user) {
	return function(dispatch) {
		dispatch(beginApiCall());
		dispatch(loginRequest({ user }));
		const { userName, password } = user;
		return authApi
			.login(userName, password)
			.then(() => {
				dispatch(loginSuccess(user));
			})
			.catch(err => {
				dispatch(loginFailure(err));
				throw err;
			});
	};
}

export function logout() {
	localStorage.removeItem("trelloid_token");
	return logoutSuccess();
}

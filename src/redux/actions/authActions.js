import * as actionTypes from "./actionTypes";
import { beginApiCall } from "./apiStatusActions";
import authApi from "../../api/authApi";

export function loginFailure(user) {
	return { type: actionTypes.LOGIN_FAILURE, user: user };
}

export function loginRequest(user) {
	return { type: actionTypes.LOGIN_REQUEST, user: user };
}

export function loginSuccess(auth) {
	return { type: actionTypes.LOGIN_SUCCESS, auth: auth };
}

export function logoutSuccess(user) {
	return { type: actionTypes.LOGOUT_SUCCESS };
}

export function login(loginDetails) {
	return function(dispatch) {
		dispatch(beginApiCall());
		dispatch(loginRequest({ loginDetails }));
		const { userName, password } = loginDetails;
		return authApi
			.login(userName, password)
			.then(({ token, user }) => {
				dispatch(loginSuccess({ token, user }));
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

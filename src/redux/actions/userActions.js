import * as actionTypes from "./actionTypes";
import * as userApi from "../../api/userApi";
import { beginApiCall } from "./apiStatusActions";
import { act } from "react-testing-library";

export function apiCallError(error) {
	return { type: actionTypes.API_CALL_ERROR, error: error };
}

export function createUserSuccess(user) {
	return { type: actionTypes.CREATE_USER_SUCCESS, user: user };
}

export function deleteUserOptimistic(user) {
	return { type: actionTypes.DELETE_USER_OPTIMISTIC, user: user };
}

export function loadUsersSuccess(users) {
	return { type: actionTypes.LOAD_USERS_SUCCESS, users: users };
}

export function updateUserSuccess(user) {
	return { type: actionTypes.UPDATE_USER_SUCCESS, user: user };
}

export function deleteUser(user) {
	return function(dispatch) {
		dispatch(deleteUserOptimistic(user));
		return userApi.deleteUser(user._id);
	};
}

export function loadUsers() {
	return function(dispatch) {
		dispatch(beginApiCall());
		return userApi
			.getUsers()
			.then(users => {
				dispatch(loadUsersSuccess(users));
			})
			.catch(err => {
				dispatch(apiCallError(err));
				throw err;
			});
	};
}

export function saveUser(user) {
	return function(dispatch) {
		dispatch(beginApiCall());
		return userApi
			.saveUser(user)
			.then(savedUser => {
				user._id
					? dispatch(updateUserSuccess(savedUser))
					: dispatch(createUserSuccess(savedUser));
			})
			.catch(err => {
				dispatch(apiCallError(err));
				throw err;
			});
	};
}

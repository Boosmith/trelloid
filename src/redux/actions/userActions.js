import * as actionTypes from "./actionTypes";
import * as userApi from "../../api/userApi";

export function createUser(user) {
	return { type: actionTypes.CREATE_USER, user };
}

export function loadUsersSuccess(users) {
	return { type: actionTypes.LOAD_USERS_SUCCESS, users: users };
}

export function loadUsers() {
	return function(dispatch) {
		return userApi
			.getUsers()
			.then(users => {
				dispatch(loadUsersSuccess(users));
			})
			.catch(err => {
				throw err;
			});
	};
}

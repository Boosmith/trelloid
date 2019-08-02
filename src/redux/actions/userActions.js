import * as actionTypes from "./actionTypes";
export function createUser(user) {
	return { type: actionTypes.CREATE_USER, user };
}

import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.REACT_APP_API_URL + "/api/users/";

export function getUsers() {
	return fetch(baseUrl)
		.then(handleResponse)
		.catch(handleError);
}

export function getOneUser(userId) {
	return fetch(baseUrl + userId)
		.then(handleResponse)
		.catch(handleError);
}

export function saveUser(user) {
	return fetch(baseUrl + (user._id || ""), {
		method: user._id ? "PUT" : "POST",
		headers: { "content-type": "application/json" },
		body: JSON.stringify(user)
	})
		.then(handleResponse)
		.catch(handleError);
}

export function deleteUser(userId) {
	return fetch(baseUrl + userId, { method: "DELETE" })
		.then(handleResponse)
		.catch(handleError);
}

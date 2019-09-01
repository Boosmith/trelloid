import { handleResponse, handleError } from "./apiUtils";
import { bearerHeaders } from "../tools/auth";
const baseUrl = process.env.REACT_APP_API_URL + "/api/users/";

export function getUsers() {
	return fetch(baseUrl, bearerHeaders())
		.then(handleResponse)
		.catch(handleError);
}

export function getOneUser(userId) {
	return fetch(baseUrl + userId)
		.then(handleResponse)
		.catch(handleError);
}

export function saveUser(user) {
	const options = {
		method: user._id ? "PUT" : "POST",
		headers: { "content-type": "application/json" },
		body: JSON.stringify(user)
	};
	options.headers = { ...options.headers, ...bearerHeaders().headers };
	return fetch(baseUrl + (user._id || ""), options)
		.then(handleResponse)
		.catch(handleError);
}

export function deleteUser(userId) {
	return fetch(baseUrl + userId, { method: "DELETE" })
		.then(handleResponse)
		.catch(handleError);
}

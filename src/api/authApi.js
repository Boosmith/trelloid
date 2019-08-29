import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.REACT_APP_API_URL + "/api/auth/";

function login(username, password) {
	const requestOptions = {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ username, password })
	};

	return fetch(baseUrl + "/auth/login", requestOptions)
		.then(handleResponse)
		.then(token => {
			localStorage.setItem("trelloid_token", JSON.stringify(token));
			return token;
		})
		.catch(handleError);
}

function logout() {
	localStorage.removeItem("user");
}

export const auth = {
	login,
	logout
};

import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.REACT_APP_API_URL + "/auth";

function login(userName, password) {
	const requestOptions = {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ userName, password })
	};

	return fetch(baseUrl + "/login", requestOptions)
		.then(handleResponse)
		.then(({ token, user }) => {
			return { token, user };
		})
		.catch(handleError);
}

function logout() {
	localStorage.removeItem("user");
}

export default {
	login,
	logout
};

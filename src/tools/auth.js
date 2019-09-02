function getToken() {
	return localStorage.getItem("trelloid_token");
}

function bearerHeaders() {
	return {
		headers: { Authorization: "Bearer " + getToken() }
	};
}

export { bearerHeaders };

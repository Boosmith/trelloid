export function bearerHeaders(token) {
	return {
		headers: { Authorization: "Bearer " + token }
	};
}

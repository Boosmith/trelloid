import { handleResponse, handleError } from "./apiUtils";
import { bearerHeaders } from "../tools/auth";
const baseUrl = process.env.REACT_APP_API_URL + "/api/cards/";

export function getCards() {
	return fetch(baseUrl, bearerHeaders())
		.then(handleResponse)
		.catch(handleError);
}

export function getOneCard(CardId, bearerHeaders) {
	return fetch(baseUrl + CardId)
		.then(handleResponse)
		.catch(handleError);
}

export function saveCard(Card) {
	return fetch(baseUrl + (Card._id || ""), {
		method: Card._id ? "PUT" : "POST",
		headers: { "content-type": "application/json" },
		body: JSON.stringify(Card)
	})
		.then(handleResponse)
		.catch(handleError);
}

export function deleteCard(CardId) {
	return fetch(baseUrl + CardId, { method: "DELETE" })
		.then(handleResponse)
		.catch(handleError);
}

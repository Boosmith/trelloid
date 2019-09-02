import * as actionTypes from "./actionTypes";
import * as cardApi from "../../api/cardApi";
import { beginApiCall } from "./apiStatusActions";

export function apiCallError(error) {
	return { type: actionTypes.API_CALL_ERROR, error: error };
}

export function createCardSuccess(card) {
	return { type: actionTypes.CREATE_CARD_SUCCESS, card: card };
}

export function deleteCardOptimistic(card) {
	return { type: actionTypes.DELETE_CARD_OPTIMISTIC, card: card };
}

export function loadCardsSuccess(cards) {
	return { type: actionTypes.LOAD_CARDS_SUCCESS, cards: cards };
}

export function updateCardSuccess(card) {
	return { type: actionTypes.UPDATE_CARD_SUCCESS, card: card };
}

export function deleteCard(card) {
	return function(dispatch) {
		dispatch(deleteCardOptimistic(card));
		return cardApi.deleteCard(card._id);
	};
}

export function loadCards() {
	return function(dispatch) {
		dispatch(beginApiCall());
		return cardApi
			.getCards()
			.then(cards => {
				dispatch(loadCardsSuccess(cards));
			})
			.catch(err => {
				dispatch(apiCallError(err));
				throw err;
			});
	};
}

export function saveCard(card) {
	return function(dispatch) {
		dispatch(beginApiCall());
		return cardApi
			.saveCard(card)
			.then(savedCard => {
				card._id
					? dispatch(updateCardSuccess(savedCard))
					: dispatch(createCardSuccess(savedCard));
			})
			.catch(err => {
				dispatch(apiCallError(err));
				throw err;
			});
	};
}

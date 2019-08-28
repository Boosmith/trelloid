import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function cardReducer(state = initialState.cards, action) {
	switch (action.type) {
		case actionTypes.DELETE_CARD_OPTIMISTIC:
			return state.filter(card => card._id !== action.card._id);
		case actionTypes.CREATE_CARD_SUCCESS:
			return [...state, { ...action.card }];
		case actionTypes.LOAD_CARDS_SUCCESS:
			return action.cards;
		case actionTypes.UPDATE_CARD_SUCCESS:
			return state.map(card =>
				card._id === action.card._id ? action.card : card
			);
		default:
			return state;
	}
}

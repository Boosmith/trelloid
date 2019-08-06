import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";
import { act } from "react-testing-library";

export default function userReducer(state = initialState.users, action) {
	switch (action.type) {
		case actionTypes.DELETE_USER_OPTIMISTIC:
			return state.filter(user => user._id !== action.user._id);
		case actionTypes.CREATE_USER_SUCCESS:
			return [...state, { ...action.user }];
		case actionTypes.LOAD_USERS_SUCCESS:
			return action.users;
		case actionTypes.UPDATE_USER_SUCCESS:
			return state.map(user =>
				user._id === action.user._id ? action.user : user
			);
		default:
			return state;
	}
}

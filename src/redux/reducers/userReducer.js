import * as actionTypes from "../actions/actionTypes";
export default function userReducer(state = [], action) {
	switch (action.type) {
		case actionTypes.CREATE_USER:
			return [...state, { ...action.user }];
		case actionTypes.LOAD_USERS_SUCCESS:
			return action.users;
		default:
			return state;
	}
}

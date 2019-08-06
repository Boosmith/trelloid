import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

function actionTypeEndsInSuccess(actionType) {
	return actionType.substring(actionType.length - 8) === "_SUCCESS";
}

export default function apiStatusReducer(
	state = initialState.apiCallsInProgress,
	action
) {
	if (action.type === actionTypes.BEGIN_API_CALL) {
		return state + 1;
	} else if (actionTypeEndsInSuccess(action.type)) {
		return state - 1;
	}
	return state;
}

import { createStore } from "redux";
import rootReducer from "./reducers";
import initialState from "./reducers/initialState";
import * as actions from "./actions/userActions";

describe("Store Integration Test", () => {
	it("should handle creating users", () => {
		const store = createStore(rootReducer, initialState);
		const user = {
			firstName: "John Doe"
		};

		const action = actions.createUserSuccess(user);
		store.dispatch(action);

		const createdUser = store.getState().users[0];
		expect(createdUser).toEqual(user);
	});
});

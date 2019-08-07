import * as userActions from "./userActions";
import * as types from "./actionTypes";
import users from "../../../tools/mockData";

describe("createUserSuccess", () => {
	it("should create a CREATE_USER_SUCCESS action", () => {
		const user = users[0];
		const expectedAction = {
			type: types.CREATE_USER_SUCCESS,
			user
		};

		const action = userActions.createUserSuccess(user);

		expect(action).toEqual(expectedAction);
	});
});

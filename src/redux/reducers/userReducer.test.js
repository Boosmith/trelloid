import userReducer from "./userReducer";
import * as actions from "../actions/userActions";

describe("Reducers", () => {
	describe("User Reducer", () => {
		it("should add user when passed action CREATE_USER_SUCCESS", () => {
			const initialState = [
				{
					firstName: "A"
				},
				{
					firstName: "B"
				}
			];

			const newUser = {
				firstName: "C"
			};

			const action = actions.createUserSuccess(newUser);

			const newState = userReducer(initialState, action);
			expect(newState.length).toEqual(3);
			expect(newState[0].firstName).toEqual("A");
			expect(newState[1].firstName).toEqual("B");
			expect(newState[2].firstName).toEqual("C");
		});
	});
});

import * as userActions from "./userActions";
import * as types from "./actionTypes";
import users from "../../../tools/mockData";
import configureMockStore from "redux-mock-store";
import fetchMock from "fetch-mock";
import thunk from "redux-thunk";

// Action creators.
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

// Thunks.
const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe("Async Actions", () => {
	afterEach(() => fetchMock.restore());
	describe("Load Users Thunk", () => {
		it("should create BEGIN_API_CALL and LOAD_USERS_SUCCESS action types when loading courses", () => {
			fetchMock.mock("*", {
				body: users,
				headers: { "content-type": "application/json" }
			});
			const expectedActions = [
				{ type: types.BEGIN_API_CALL },
				{ type: types.LOAD_USERS_SUCCESS, users }
			];

			const store = mockStore({ users: [] });

			return store.dispatch(userActions.loadUsers()).then(() => {
				expect(store.getActions()).toEqual(expectedActions);
			});
		});
	});
});

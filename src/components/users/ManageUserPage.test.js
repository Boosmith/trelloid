import React from "react";
import { mount } from "enzyme";
import { newUser, users } from "../../../tools/mockData";
import { ManageUserPage } from "./ManageUserPage";
import * as actions from "../../redux/actions/userActions";

function render(args) {
	const defaultProps = {
		history: {},
		match: {},
		actions,
		user: newUser,
		users
	};

	const props = { ...defaultProps, ...args };
	return mount(<ManageUserPage {...props} />);
}

it("sets error when attempting to save an empty first name field", () => {
	const wrapper = render();
	wrapper.find("form").simulate("submit");
	const error = wrapper.find(".alert").first();
	expect(error.text()).toBe("First name is required");
});

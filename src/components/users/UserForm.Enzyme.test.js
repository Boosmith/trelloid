import React from "react";
import UserForm from "./UserForm";
import { shallow } from "enzyme";

function renderUserForm(args) {
	const defaultProps = {
		saving: false,
		errors: {},
		onChange: () => {},
		onSave: () => {},
		user: {}
	};

	const props = { ...defaultProps, ...args };
	return shallow(<UserForm {...props} />);
}

it("renders form and header", () => {
	const wrapper = renderUserForm();
	expect(wrapper.find("form").length).toBe(1);
	expect(wrapper.find("h2").text()).toEqual("Add User");
});

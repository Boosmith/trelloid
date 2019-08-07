import React from "react";
import UserForm from "./UserForm";
import renderer from "react-test-renderer";
import { users } from "../../../tools/mockData";
import { isTSAnyKeyword, exportAllDeclaration } from "@babel/types";
import { JestEnvironment } from "@jest/environment";

it("sets submit button to 'Saving...' when saving is true", () => {
	const tree = renderer.create(
		<UserForm user={users[0]} onSave={jest.fn()} onChange={jest.fn()} saving />
	);

	expect(tree).toMatchSnapshot();
});

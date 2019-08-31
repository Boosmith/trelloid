import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Card from "../../src/components/cards/card";

const card = {
	_id: "5d6aa2c07500c1f9ceb14f9b",
	number: "#9",
	title: "upon fourth",
	description:
		"Fugiat nulla tempor pariatur anim fugiat culpa est ut cillum. Excepteur commodo reprehenderit mollit dolor fugiat reprehenderit. Magna culpa enim esse Lorem occaecat esse culpa ullamco. Tempor culpa voluptate fugiat reprehenderit. Ex non laborum ullamco sit nostrud laborum Lorem.",
	status: "",
	board: "",
	comments: "",
	activity: "",
	attachments: "",
	owner: {
		_id: "5d42e5d5e1e3d731df26010a",
		firstName: "Andrew",
		lastName: "Smith"
	},
	members: [
		{
			_id: "5d42104a7979bd071c129606",
			firstName: "Dale",
			lastName: "Fitzgerald"
		},
		{
			_id: "5d42104a7979bd071c129609",
			firstName: "Adeline",
			lastName: "Fitzgerald"
		}
	],
	createdDate: "2019-08-31T16:39:28.780Z",
	modifiedDate: "2019-08-31T16:39:28.780Z"
};

storiesOf("Card", module).add("default", () => <Card {...card} />);

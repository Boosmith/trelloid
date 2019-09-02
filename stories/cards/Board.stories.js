import React from "react";
import { storiesOf } from "@storybook/react";

import Board from "../../src/components/cards/Board";

const cards = [
	{
		_id: "5d6aa2c08040a256ce40c16b",
		number: "#0",
		title: "took division",
		description:
			"Veniam amet sint aliqua sit. Id nulla aliquip est ullamco excepteur sint aliquip. Ut in consequat esse incididunt. Laboris consequat pariatur aute incididunt labore elit. Velit veniam aute cupidatat laborum consectetur amet fugiat.",
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
		createdDate: "2019-08-31T16:39:28.779Z",
		modifiedDate: "2019-08-31T16:39:28.779Z"
	},
	{
		_id: "5d6aa2c0340c4e6be56eab91",
		number: "#1",
		title: "four perfectly",
		description:
			"Exercitation aute eiusmod culpa officia. Dolor aliquip minim veniam veniam aute. Eiusmod velit magna labore. Consequat quis quis in adipisicing et est ea. Nisi consectetur occaecat in.",
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
		createdDate: "2019-08-31T16:39:28.779Z",
		modifiedDate: "2019-08-31T16:39:28.779Z"
	},
	{
		_id: "5d6aa2c0c84791e741e771d8",
		number: "#2",
		title: "eaten chosen",
		description:
			"Consequat minim ipsum eiusmod qui velit proident. Adipisicing sint ad veniam qui reprehenderit consectetur elit dolor aliquip. Ea aliquip in ullamco culpa nisi adipisicing sit. Dolor eiusmod proident aute. Id elit velit aute commodo non ipsum.",
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
		createdDate: "2019-08-31T16:39:28.779Z",
		modifiedDate: "2019-08-31T16:39:28.779Z"
	},
	{
		_id: "5d6aa2c0f16942ff1f889661",
		number: "#3",
		title: "plant build",
		description:
			"Ex voluptate irure proident non commodo. Est eiusmod magna magna qui non magna. Officia duis et non amet dolore. Quis culpa ex consectetur magna cupidatat. Eu do labore tempor.",
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
		createdDate: "2019-08-31T16:39:28.779Z",
		modifiedDate: "2019-08-31T16:39:28.779Z"
	},
	{
		_id: "5d6aa2c0a8d87097a70116ba",
		number: "#4",
		title: "house mirror",
		description:
			"Consequat ullamco reprehenderit non eiusmod. Reprehenderit quis commodo commodo pariatur proident. Dolore fugiat ullamco dolor minim ea excepteur. Irure qui velit deserunt dolore sunt duis. Non officia aliquip nulla adipisicing excepteur eu quis quis.",
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
	},
	{
		_id: "5d6aa2c00f0395222d6483ba",
		number: "#5",
		title: "new dawn",
		description:
			"Deserunt consequat nisi sunt et sint eu magna. Pariatur pariatur ex aliqua dolor Lorem fugiat nulla et veniam. Sunt nostrud est duis reprehenderit culpa esse occaecat pariatur. Aliquip nostrud occaecat officia laboris aute et cillum non ex. Ea ad sunt non adipisicing laborum fugiat sint.",
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
	},
	{
		_id: "5d6aa2c07102a470b4f1066c",
		number: "#6",
		title: "income whose",
		description:
			"Ex officia est pariatur officia irure eu pariatur mollit. Sint excepteur cupidatat sunt do sit consequat non. Aute ea aliqua id do ut in. Non reprehenderit qui ea labore cupidatat excepteur excepteur qui aliquip. Mollit id labore voluptate nisi aute.",
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
	},
	{
		_id: "5d6aa2c09cad9ad87fb52743",
		number: "#7",
		title: "occur compare",
		description:
			"Mollit ut sunt sit. Commodo commodo sit esse anim amet. Culpa nostrud exercitation cupidatat. Commodo duis esse aliqua non. Elit laborum consequat quis ullamco nulla in aliqua est.",
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
	},
	{
		_id: "5d6aa2c0b3c3b66d9e80ceb6",
		number: "#8",
		title: "hold how",
		description:
			"Id fugiat et aliqua nisi. Ea laborum dolor exercitation sit. Veniam ea dolore ad est ad anim excepteur. Eiusmod magna aliquip duis. Anim deserunt dolor eu velit eiusmod aliquip eu consectetur Lorem.",
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
	},
	{
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
	}
];

storiesOf("Board", module).add("default", () => <Board cards={cards} />);

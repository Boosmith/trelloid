import { depopulateCard } from "./cardApi";

it("should clean up referenced members", function() {
	const card = {
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
	};

	expect(depopulateCard(card).members).toEqual([
		"5d42104a7979bd071c129606",
		"5d42104a7979bd071c129609"
	]);
});

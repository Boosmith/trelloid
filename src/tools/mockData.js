// Cards.
const cards = [
	{
		_id: "5d60727643805a36c4c71d11",
		title: "main until",
		boardId: "",
		status: "",
		owner: {
			_id: "5d42e5d5e1e3d731df26010a",
			firstName: "Andrew",
			lastName: "Smith",
			address: "32 Walpole Road",
			city: "London",
			postcode: "N17",
			__v: 0
		}
	},
	{
		_id: "5d6072760a36855fc69a385d",
		title: "worry know",
		boardId: "",
		status: "",
		owner: {
			_id: "5d42e5d5e1e3d731df26010a",
			firstName: "Andrew",
			lastName: "Smith",
			address: "32 Walpole Road",
			city: "London",
			postcode: "N17",
			__v: 0
		}
	},
	{
		_id: "5d60727602117c1e63eaaf33",
		title: "empty fog",
		boardId: "",
		status: "",
		owner: {
			_id: "5d42e5d5e1e3d731df26010a",
			firstName: "Andrew",
			lastName: "Smith",
			address: "32 Walpole Road",
			city: "London",
			postcode: "N17",
			__v: 0
		}
	},
	{
		_id: "5d6072760c989fa581296e02",
		title: "taste become",
		boardId: "",
		status: "",
		owner: {
			_id: "5d42104a7979bd071c129604",
			firstName: "Dora",
			lastName: "Fitzgerald",
			address: "1300 Eknaw Path",
			city: "Evegirhe",
			postcode: "P8K 4T1",
			__v: 0
		}
	},
	{
		_id: "5d6072763a5e8a7c5838ccfc",
		title: "clean hurry",
		boardId: "",
		status: "",
		owner: {
			_id: "5d42104a7979bd071c129604",
			firstName: "Dora",
			lastName: "Fitzgerald",
			address: "1300 Eknaw Path",
			city: "Evegirhe",
			postcode: "P8K 4T1",
			__v: 0
		}
	},
	{
		_id: "5d6072761396a6b379fa5c3a",
		title: "class invented",
		boardId: "",
		status: "",
		owner: {
			_id: "5d42104a7979bd071c129604",
			firstName: "Dora",
			lastName: "Fitzgerald",
			address: "1300 Eknaw Path",
			city: "Evegirhe",
			postcode: "P8K 4T1",
			__v: 0
		}
	},
	{
		_id: "5d607276ba59ac18120faf88",
		title: "care respect",
		boardId: "",
		status: "",
		owner: {
			_id: "5d42104a7979bd071c12960b",
			firstName: "Rodney",
			lastName: "Fitzgerald",
			address: "1961 Goku Heights",
			city: "Kivzupzi",
			postcode: "J5C 8H1",
			__v: 0
		}
	},
	{
		_id: "5d60727626e6e7175e135164",
		title: "stone enough",
		boardId: "",
		status: "",
		owner: {
			_id: "5d42104a7979bd071c12960b",
			firstName: "Rodney",
			lastName: "Fitzgerald",
			address: "1961 Goku Heights",
			city: "Kivzupzi",
			postcode: "J5C 8H1",
			__v: 0
		}
	},
	{
		_id: "5d607276ba76a9f8094409f0",
		title: "visit gulf",
		boardId: "",
		status: "",
		owner: {
			_id: "5d42104a7979bd071c12960b",
			firstName: "Rodney",
			lastName: "Fitzgerald",
			address: "1961 Goku Heights",
			city: "Kivzupzi",
			postcode: "J5C 8H1",
			__v: 0
		}
	},
	{
		_id: "5d607276f683aa17684f4288",
		title: "air running",
		boardId: "",
		status: "",
		owner: {
			_id: "5d42104a7979bd071c12960b",
			firstName: "Rodney",
			lastName: "Fitzgerald",
			address: "1961 Goku Heights",
			city: "Kivzupzi",
			postcode: "J5C 8H1",
			__v: 0
		}
	}
];

const newCard = {
	title: "",
	boardId: "",
	status: "",
	owner: ""
};

// Users.
const users = [
	{
		_id: "5d42e5d5e1e3d731df26010a",
		firstName: "Andrew",
		lastName: "Smith",
		address: "32 Walpole Road",
		city: "London",
		postcode: "N17",
		__v: 0
	},
	{
		_id: "5d43fed51d0825849c0f0b67",
		firstName: "Rosa",
		lastName: "Smith",
		address: "32 Walpole Road",
		city: "London",
		postcode: "N17",
		__v: 0
	},
	{
		_id: "5d42104a7979bd071c129604",
		firstName: "Dora",
		lastName: "Fitzgerald",
		address: "1300 Eknaw Path",
		city: "Evegirhe",
		postcode: "P8K 4T1",
		__v: 0
	},
	{
		_id: "5d42104a7979bd071c129605",
		firstName: "Bryan",
		lastName: "Fitzgerald",
		address: "1050 Dedu Point",
		city: "Irhekde",
		postcode: "G1K 2N9",
		__v: 0
	},
	{
		_id: "5d42104a7979bd071c129606",
		firstName: "Dale",
		lastName: "Fitzgerald",
		address: "560 Fibab Glen",
		city: "Hudmakap",
		postcode: "T9U 0N6",
		__v: 0
	},
	{
		_id: "5d42104a7979bd071c129607",
		firstName: "Alma",
		lastName: "Fitzgerald",
		address: "1630 Zuas Place",
		city: "Caturaagu",
		postcode: "G9E 7N0",
		__v: 0
	},
	{
		_id: "5d42104a7979bd071c129608",
		firstName: "Billy",
		lastName: "Fitzgerald",
		address: "1689 Hopge Square",
		city: "Vinpati",
		postcode: "C2O 6D1",
		__v: 0
	},
	{
		_id: "5d42104a7979bd071c129609",
		firstName: "Adeline",
		lastName: "Fitzgerald",
		address: "1912 Dusved Ridge",
		city: "Atehasma",
		postcode: "N2D 7C3",
		__v: 0
	},
	{
		_id: "5d42104a7979bd071c12960a",
		firstName: "Charlotte",
		lastName: "Fitzgerald",
		address: "611 Gumaf Way",
		city: "Kalover",
		postcode: "E4Y 2E7",
		__v: 0
	},
	{
		_id: "5d42104a7979bd071c12960b",
		firstName: "Rodney",
		lastName: "Fitzgerald",
		address: "1961 Goku Heights",
		city: "Kivzupzi",
		postcode: "J5C 8H1",
		__v: 0
	}
];

const newUser = {
	firstName: "",
	lastName: "",
	address: "",
	city: "",
	postcode: ""
};

module.exports = {
	cards,
	newCard,
	newUser,
	users
};

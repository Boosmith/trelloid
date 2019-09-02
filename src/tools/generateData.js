const randomWords = require("random-words");
const LoremIpsum = require("lorem-ipsum").LoremIpsum;
const bcrypt = require("bcrypt");
const { users } = require("./mockData");

const words = randomWords({ exactly: 10, wordsPerString: 2 });

var mongoObjectId = function() {
	var timestamp = ((new Date().getTime() / 1000) | 0).toString(16);
	return (
		timestamp +
		"xxxxxxxxxxxxxxxx"
			.replace(/[x]/g, function() {
				return ((Math.random() * 16) | 0).toString(16);
			})
			.toLowerCase()
	);
};

const createLoremIpsum = () => {
	const lorem = new LoremIpsum({
		wordsPerSentence: {
			max: 10,
			min: 4
		}
	});

	return lorem.generateSentences(5);
};

const generateCards = function() {
	const cards = [];
	for (let i = 0; i < 10; i++) {
		let card = {
			_id: mongoObjectId(),
			number: `#${i}`,
			title: words[i],
			description: createLoremIpsum(),
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
			members: JSON.stringify([
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
			]),
			createdDate: new Date().toJSON(),
			modifiedDate: new Date().toJSON()
		};
		cards.push(card);
	}
	console.log("object: %O", cards);
};

const generateStatuses = function() {
	const statuses = [];
	for (let i = 0; i < 5; i++) {
		let status = {
			_id: mongoObjectId(),
			status: ""
		};
		statuses.push(status);
	}
	console.log(statuses);
};
const updateMockUsers = function() {
	const updatedUsers = users.map(user => {
		let userName = randomWords({ exactly: 2, join: " " });
		let password = bcrypt.hashSync(userName, 5);
		let newFields = {
			userName: userName,
			password: password
		};
		return Object.assign(user, newFields);
	});
	console.log(updatedUsers);
};

module.exports = generateStatuses();
//updateMockUsers();

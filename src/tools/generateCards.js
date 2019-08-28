const randomWords = require("random-words");
const bcrypt = require("bcrypt");

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

const generateCards = function() {
	const cards = [];
	for (let i = 0; i < 10; i++) {
		let card = {
			_id: mongoObjectId(),
			title: words[i],
			boardId: "",
			status: "",
			owner: ""
		};
		cards.push(card);
	}
	console.log(cards);
};

module.exports = generateCards();

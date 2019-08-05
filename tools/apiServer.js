const jsonServer = require("json-server");
const server = jsonServer.create();
const path = require("path");
const router = jsonServer.router(path.join(__dirname, "db.json"));
const ObjectId = require("bson").ObjectId;

const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use(jsonServer.bodyParser);

server.use(function(req, res, next) {
	setTimeout(next, 1000);
});

server.use((req, res, next) => {
	if (req.method === "POST") {
		req.body.createdAt = Date.now();
	}
	next();
});

server.post("/users/", function(req, res, next) {
	const error = validateUser(req.body);
	if (error) {
		res.status(400).send(error);
	} else {
		req.body._id = createMongoId();
		next();
	}
});

router.db._.id = "_id";

server.use(router);

const port = 3001;
server.listen(port, () => {
	console.log(`JSON Server is running on port ${port}`);
});

function createMongoId() {
	return new ObjectId().toString();
}

function validateUser(user) {
	if (!user.firstName) return "First name is required.";
	if (!user.lastName) return "Last name is required.";
	if (!user.address) return "Address is required.";
	if (!user.city) return "City is required.";
	if (!user.postcode) return "Postcode is required.";
	return "";
}

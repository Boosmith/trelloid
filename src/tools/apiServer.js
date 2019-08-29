const jsonServer = require("json-server");
const server = jsonServer.create();
const path = require("path");
const fs = require("fs");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const router = jsonServer.router(path.join(__dirname, "db.json"));
const users = JSON.parse(
	fs.readFileSync(path.join(__dirname, "db.json"), "UTF-8")
).users;
const ObjectId = require("bson").ObjectId;

const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use(jsonServer.bodyParser);

server.use(function(req, res, next) {
	setTimeout(next, 2000);
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

server.post("/users/authenticate", function(req, res, next) {
	const { userName, password } = req.body;
	if (isAuthenticated(userName, password) === false) {
		const status = 401;
		const message = "Incorrect email or password";
		res.status(status).json({ status, message });
		return;
	}
	const access_token = createToken({ userName, password });
	res.status(200).json({ access_token });
});

router.db._.id = "_id";

server.use("/api", router);

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

const SECRET_KEY = "123456789";
const expiresIn = "1h";

function createToken(payload) {
	return jwt.sign(payload, SECRET_KEY, { expiresIn });
}

function verifyToken(token) {
	return jwt.verify(token, SECRET_KEY, (err, decode) =>
		decode !== undefined ? decode : err
	);
}

function isAuthenticated(userName, password) {
	return (
		users.findIndex(
			user =>
				user.userName === userName &&
				bcrypt.compareSync(password, user.password)
		) !== -1
	);
}

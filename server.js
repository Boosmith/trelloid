const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 5000;

/* eslint-disable no-console */

app.use(express.static(path.join(__dirname, "build")));

app.get("/", function(req, res) {
	res.sendFile(path.join(__dirname, "build/index.html"));
});

app.listen(port, function(err) {
	if (err) {
		console.log(err);
	} else {
		console.log("Server listening on port " + port);
	}
});

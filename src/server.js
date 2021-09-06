const path = require("path");
const http = require("http");
const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
	res.send("Basic Server Setup");
});

const httpServer = http.Server(app);

httpServer.listen(PORT, () => console.log("Server running on port :", PORT));

const path = require("path");
const http = require("http");
const express = require("express");
const SocketIO = require("socket.io");

const app = express();
const PORT = 3000;

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "/views"));

app.use("/public", express.static(path.join(__dirname, "/public")));

app.get("/", (req, res) => {
	res.render("home");
});
app.get("/*", (req, res) => res.redirect("/"));

const httpServer = http.Server(app);
const wsServer = SocketIO(httpServer);

wsServer.on("connection", (socket) => {
	socket.on("join_room", (roomName, done) => {
		socket.join(roomName);
		done();
		socket.to(roomName).emit("welcome");
	});
});

httpServer.listen(PORT, () => console.log("Server running on port :", PORT));

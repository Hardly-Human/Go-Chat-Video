const path = require("path");
const http = require("http");
const express = require("express");

const app = express();
const PORT = 3000;

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "/views"));

app.use("/public", express.static(path.join(__dirname, "/public")));

app.get("/", (req, res) => {
	res.render("home");
});

const httpServer = http.Server(app);

httpServer.listen(PORT, () => console.log("Server running on port :", PORT));

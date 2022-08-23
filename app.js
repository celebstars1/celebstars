const { Router } = require("express");
const express = require("express");
const { expr } = require("jquery");
const app = express();

app.set("view engine", "ejs");
app.use("/static", express.static("static"));

// prepare server
// redirect API calls
// app.use("/api", api);
// redirect root
// app.use("/", express.static(__dirname + "/www"));
// redirect bootstrap JS
app.use("/js", express.static(__dirname + "/node_modules/bootstrap/dist/js"));
// redirect JS jQuery
app.use("/jq", express.static(__dirname + "/node_modules/jquery/dist"));
// redirect CSS bootstrap
app.use("/css", express.static(__dirname + "/node_modules/bootstrap/dist/css"));
// redirect CSS bootstrap
app.use("/icon", express.static(__dirname + "/node_modules/bootstrap-icons"));
// redirect slick-carousel CSS
app.use(
	"/slick",
	express.static(__dirname + "/node_modules/slick-carousel/slick")
);

const port = 8000;

app.get("/", (req, res) => {
	res.render("index");
});

app.get("/casting", (req, res) => {
	res.render("casting/casting");
});

app.get("/profile", (req, res) => {
	res.render("profile/profile");
});
app.get("/profileupdate", (req, res) => {
	res.render("profile/profileUpdate");
});

// localhost:8000/login
app.get("/login", (req, res) => {
	res.render("loginWeb");
});

// 매거진 모델 페이지
// localhost:8000/choiseoah
app.get("/choiseoah", (req, res) => {
	res.render("magazine/choiseoah");
});
// localhost:8000/hannana
app.get("/hannana", (req, res) => {
	res.render("magazine/hannana");
});
// localhost:8000/jangmikwan
app.get("/jangmikwan", (req, res) => {
	res.render("magazine/jangmikwan");
});
// localhost:8000/kimbaekjin
app.get("/kimbaekjin", (req, res) => {
	res.render("magazine/kimbaekjin");
});
// localhost:8000/kimtaehoon
app.get("/kimtaehoon", (req, res) => {
	res.render("magazine/kimtaehoon");
});
// localhost:8000/parkkwanwoo
app.get("/parkkwanwoo", (req, res) => {
	res.render("magazine/parkkwanwoo");
});
// localhost:8000/parkwhite
app.get("/parkwhite", (req, res) => {
	res.render("magazine/parkwhite");
});

// localhost:8000/customersupport
app.get("/customersupport", (req, res) => {
	res.render("customersupport/customer");
});

app.listen(port, () => {
	console.log("server open:", port);
});

app.get("/login", (req, res) => {
  res.render("login/login");
});

app.get("/join", (req, res) => {
  res.render("join/join");
});
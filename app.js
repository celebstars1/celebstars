const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use("/static", express.static("static"));

const port = 8000;

app.get("/", (req, res) => {
  res.render("index");
});

// localhost:8000/nextpage
app.get("/nextpage", (req, res) => {
  res.render("nextpage");
});

// localhost:8000/prepage
app.get("/prepage", (req, res) => {
  res.render("prepage");
});

// fd
// fd
// fd
app.listen(port, () => {
  console.log("server open:", port);
});

const express = require("express");
const path = require("path");

const app = express();

app.arguments(express.static("public"));

app.get("/", (req, res, next) => {
  const filePath = path.join(__dirname, "views", "index.html");
  res.sendFile(filePath);
});

app.get("/about", (req, res, next) => {
  const filePath = path.join(__dirname, "views", "about.html");
  res.sendFile(filePath);
});

app.get("/works", (req, res, next) => {
  const filePath = path.join(__dirname, "views", "works.html");
  res.sendFile(filePath);
});

app.get("/photos", (req, res, next) => {
  const filePath = path.join(__dirname, "views", "photos.html");
  res.sendFile(filePath);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

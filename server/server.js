"use strict";

const express = require("express");
const app = express();
const path = require("path");

const webpagesPath = path.join(__dirname, "../webpages");
const imagesPath = path.join(__dirname, "../images");

app.use("/", (req, res, next) => {
  console.log(new Date(), req.method, req.url);
  next();
});
app.use("/", express.static(webpagesPath));
app.use("/images", express.static(imagesPath));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../webpages/" + "index.html"));
});

const PORT = process.env.PORT || 8082;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});

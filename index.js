const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const users = require("./routes/users");
const mongoose = require("./database");
const app = express();

var jwt = require("jsonwebtoken");

mongoose.connection.on("error",console.error.bind(console, "MongoDB connection error:"));

app.use(cors());
app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.set("secretKey", "jameelioSecretKey");

app.get("/favicon.ico", function(req, res) {
  res.sendStatus(204);
});

// public route
app.use('/users', users);

app.use('/js', express.static('front-end/dist/js'));
app.use('/css', express.static('front-end/dist/css'));
// router.use('/public', express.static('public', { fallthrough: false }));
app.use('/app', express.static('front-end/dist', { fallthrough: false }));

app.use(function(req, res, next) {
  let err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  if (err.status === 404) res.status(404).json({ message: "Route does not exist" });
  else res.status(500).json({ message: "OOPS!! Something went wrong"});
});

app.listen(8000, function() {
  console.log("Listening on port 8000");
});

const express = require("express");
const app = express();
const morgan = require("morgan");
const helmet = require("helmet");
const compression = require("compression");

// init middleware
app.use(morgan("dev")); // http loggger request
app.use(helmet()); // prevent hacker detect technologies that we are using to find security hole
app.use(compression()); // helping we reduce memory that we used

// init db

// init router

// handle error

app.get("/", (req, res) => {
  const strCompress = "Hello";
  return res.status(200).json({
    msg: "Hello",
    metadata: strCompress.repeat(10000),
  });
});

module.exports = app;

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
require("./dbs/initMongo");
const { checkOverload } = require("./helpers/checkConnect");
checkOverload();

// init router

// handle error

module.exports = app;

// untils tần xuất sử dụng nhiều helpers khi cần mới sử dụng

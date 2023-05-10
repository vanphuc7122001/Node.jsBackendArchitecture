"use strict";

const mongoose = require("mongoose");
const os = require("os");
const process = require("process");
const _SECONDS = 5000;
// count connect
const countConnect = () => {
  const numConnections = mongoose.connections.length;
  console.log(`Number of connections: ${numConnections}`);
};

// check overload
const checkOverload = () => {
  setInterval(() => {
    const numConnections = mongoose.connections.length;
    const numCore = os.cpus().length; // get number cores on your machine
    const memoryUsage = process.memoryUsage().rss; // get memory usage on your machine
    // for instance maximum number of connections based on number of cores
    const maximumConnections = numCore * 5; // every core can using 5 connect

    console.log(`Active Connections: ${numConnections}`);
    console.log(`memory usage: ${memoryUsage / 1024 / 1024} MB`);
    if (numConnections > maximumConnections) {
      console.log("Connection overload detected");
    }
  }, _SECONDS); // monitor every 5 second
};

module.exports = {
  countConnect,
  checkOverload,
};

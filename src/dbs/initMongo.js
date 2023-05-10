"use strict";
const mongoose = require("mongoose");
const { countConnect } = require("../helpers/checkConnect");
const {
  db: { host, port, name },
} = require("../configs/configMongodb");

const connectString = `mongodb://${host}:${port}/${name}`;

console.log(`Connecting to ${connectString}`);

class Database {
  constructor() {
    this.connect();
  }

  connect(type = "mongodb") {
    if (1 === 1) {
      // development
      mongoose.set("debug", true);
      mongoose.set("debug", {
        color: true,
      });
    }

    mongoose
      .connect(connectString, {
        maxPoolSize: 50, // number of connections maximum of mongodb at that time
      })
      .then(() => console.log("Connect mongo successfuly", countConnect()))
      .catch((e) => console.log("Error connect"));
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }

    return Database.instance;
  }
}

const instanceMongodb = Database.getInstance();

module.exports = instanceMongodb;

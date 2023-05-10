"use strict";
require("dotenv").config();

const dev = {
  app: {
    port: process.env.DEV_APP_PORT || 4000,
  },
  db: {
    host: process.env.DEV_DB_HOST || "127.0.0.1",
    port: process.env.DEV_DB_PORT || "27017",
    name: process.env.DEV_DB_NAME || "shopDev",
  },
};

const pro = {
  app: {
    port: process.env.PRO_APP_PORT || 4000,
  },
  db: {
    host: process.env.PRO_DB_HOST || "127.0.0.1",
    port: process.env.PRO_DB_PORT || "27017",
    name: process.env.PRO_DB_NAME || "ecommerce",
  },
};

const config = { dev, pro };
const env = process.env.NODE_ENV || "dev";

module.exports = config[env];

const app = require("./src/app");
require("dotenv").config();

const {
  app: { port },
} = require("./src/configs/configMongodb");

const server = app.listen(port, () => {
  console.log(`App listening on ${port}`);
});

process.on("SIGINT", () => {
  server.close(() => {
    console.log("Exit server express");
  });
});

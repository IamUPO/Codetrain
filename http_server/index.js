const express = require("express");
const morgan = require("morgan");
const todoRoute = require("./routes/todoRoute");

const server = express();
server.use(morgan("dev"));
server.use(express.json());

server.use("/api/v1", todoRoute);

server.listen(3000, "127.0.0.1", () => {
  console.log("server is running on port 3000");
});


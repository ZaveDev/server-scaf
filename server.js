const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const authRouter = require("./auth/auth-router");
const usersRouter = require("./router/router");
const carsRouter = require("./router/cars");
const restricted = require("./auth/restricted-middleware");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

server.use("/api/auth", authRouter);
server.use("/api/users", usersRouter);
server.use("/api/cars", carsRouter);

server.get("/", (req, res) => {
  res.status(200).json({ Victor_Frankenstein: "Its ALIVE" });
});

module.exports = server;

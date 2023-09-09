const express = require("express");
const cors = require("cors");
const { getData } = require("./routes/getData");

module.exports = function (app) {
  app.use(express.json({ limit: "50mb" }));
  app.use(
    express.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 })
  );
  app.use(cors({ origin: "*" }));
  app.use("/", getData);
};

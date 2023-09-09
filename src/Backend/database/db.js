const mongoose = require("mongoose");

module.exports = function () {
  mongoose
    .connect("mongodb://127.0.0.1:27017/data_visualization")
    .then(() => console.log("Mongoose connected"))
    .catch((err) => console.log(err));
};

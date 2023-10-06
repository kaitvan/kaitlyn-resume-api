const { Schema, model } = require("mongoose");

const RouteSchema = new Schema({
  name: { type: String },
});

const Route = model("Route", RouteSchema);

module.exports = Route;

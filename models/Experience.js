const { Schema, model } = require("mongoose");

const ExperienceSchema = new Schema({
  organization: String,
  title: String,
  responsibilities: [{ type: String }],
  dateRange: String,
});

const Experience = model("Experience", ExperienceSchema);

module.exports = Experience;

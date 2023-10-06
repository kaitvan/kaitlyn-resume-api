const { Schema, model } = require("mongoose");

const ProjectSchema = new Schema({
  title: String,
  repo: String,
  liveSite: String,
  description: String,
  techStack: [{ type: String }],
});

const Project = model("Project", ProjectSchema);

module.exports = Project;

const { Schema, model } = require("mongoose");

const SkillsSchema = new Schema({
  languages: [{ type: String }],
  certifications: [{ type: String }],
  technologies: [{ type: String }],
  softwareApps: [{ type: String }],
});

const Skills = model("Skills", SkillsSchema);

module.exports = Skills;

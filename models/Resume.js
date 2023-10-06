const { Schema, model } = require("mongoose");

const ResumeSchema = new Schema({
  about: { type: Schema.Types.ObjectId, ref: "About" },
  experience: [{ type: Schema.Types.ObjectId, ref: "Experience" }],
  projects: [{ type: Schema.Types.ObjectId, ref: "Project" }],
  skills: { type: Schema.Types.ObjectId, ref: "Skills" },
  education: [{ type: Schema.Types.ObjectId, ref: "Education" }],
  contact: { type: Schema.Types.ObjectId, ref: "Contact" },
});

const Resume = model("Resume", ResumeSchema);

module.exports = Resume;

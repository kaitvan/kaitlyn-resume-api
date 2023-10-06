const { Schema, model } = require("mongoose");

const EducationSchema = new Schema({
  credential: String,
  institution: String,
  gradDate: String,
  gpa: { type: Number || null, min: 0, max: 4 },
});

const Education = model("Education", EducationSchema);

module.exports = Education;

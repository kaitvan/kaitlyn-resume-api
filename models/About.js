const { Schema, model } = require("mongoose");

const AboutSchema = new Schema({
  name: { type: String, required: true },
  aboutMe: { type: String, required: true },
  hobbies: [{ type: String }],
});

const About = model("About", AboutSchema);

module.exports = About;

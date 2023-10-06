const { Schema, model } = require("mongoose");

const ContactSchema = new Schema({
  email: String,
  gitHub: String,
  linkedIn: String,
  portfolio: String,
});

const Contact = model("Contact", ContactSchema);

module.exports = Contact;

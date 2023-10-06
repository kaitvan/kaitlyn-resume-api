const { Contact } = require("../models");

const controller = {
  getContact(request, response) {
    Contact.find()
      .then((contact) => response.status(200).json(contact))
      .catch((error) => response.status(404).send(error));
  },
  createContact(request, response) {
    Contact.create(request.body)
      .then((contact) => response.status(200).json(contact))
      .catch((error) => response.status(400).send(error));
  },
};

module.exports = controller;

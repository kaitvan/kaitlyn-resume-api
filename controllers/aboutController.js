const { About } = require("../models");

const controller = {
  getAbout(request, response) {
    About.find()
      .then((about) => response.status(200).json(about))
      .catch((error) => response.status(404).send(error));
  },
  createAbout(request, response) {
    About.create(request.body)
      .then((about) => response.status(200).json(about))
      .catch((error) => response.status(400).send(error));
  },
};

module.exports = controller;

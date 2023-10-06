const { Education } = require("../models");

const controller = {
  getEducation(request, response) {
    Education.find({})
      .then((education) => response.status(200).json(education))
      .catch((error) => response.status(404).send(error));
  },
  createEducation(request, response) {
    Education.create(request.body)
      .then((education) => response.status(200).json(education))
      .catch((error) => response.status(400).send(error));
  },
};

module.exports = controller;

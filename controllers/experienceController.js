const { Experience } = require("../models");

const controller = {
  getExperiences(request, response) {
    Experience.find({})
      .then((experiences) => response.status(200).json(experiences))
      .catch((error) => response.status(404).send(error));
  },
  createExperience(request, response) {
    Experience.create(request.body)
      .then((experience) => response.status(200).json(experience))
      .catch((error) => response.status(400).send(error));
  },
};

module.exports = controller;

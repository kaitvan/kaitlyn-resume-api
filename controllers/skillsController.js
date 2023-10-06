const { Skills } = require("../models");

const controller = {
  getSkills(request, response) {
    Skills.find()
      .then((skills) => response.status(200).json(skills))
      .catch((error) => response.status(404).send(error));
  },
  createSkills(request, response) {
    Skills.create(request.body)
      .then((skills) => response.status(200).json(skills))
      .catch((error) => {
        console.log(error);
        response.status(400).send(error);
      });
  },
};

module.exports = controller;

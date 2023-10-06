const { Project } = require("../models");

const controller = {
  getProjects(request, response) {
    Project.find({})
      .then((projects) => response.status(200).json(projects))
      .catch((error) => response.status(404).send(error));
  },
  createProject(request, response) {
    Project.create(request.body)
      .then((project) => response.status(200).json(project))
      .catch((error) => response.status(400).send(error));
  },
};

module.exports = controller;

const { Resume } = require("../models");

const controller = {
  getResume(request, response) {
    Resume.find()
      .then((resume) => response.status(200).json(resume))
      .catch((error) => response.status(404).send(error));
  },
};

module.exports = controller;

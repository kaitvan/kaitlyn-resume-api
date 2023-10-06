const router = require("express").Router();

const { getAbout, createAbout } = require("../controllers/aboutController");
const {
  getExperiences,
  createExperience,
} = require("../controllers/experienceController");
const {
  getProjects,
  createProject,
} = require("../controllers/projectController");
const { getSkills, createSkills } = require("../controllers/skillsController");
const {
  getEducation,
  createEducation,
} = require("../controllers/educationController");
const {
  getContact,
  createContact,
} = require("../controllers/contactController");
const { getResume } = require("../controllers/resumeController");

router.route("/api/about").get(getAbout).post(createAbout);
router.route("/api/experiences").get(getExperiences).post(createExperience);
router.route("/api/projects").get(getProjects).post(createProject);
router.route("/api/skills").get(getSkills).post(createSkills);
router.route("/api/education").get(getEducation).post(createEducation);
router.route("/api/contact").get(getContact).post(createContact);
router.route("/api/resume").get(getResume);

module.exports = router;

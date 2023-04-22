const lecturerController = require("../controllers/lecturerController");
const validations = require("../validations/lecturer.validation");
const validate = require("../middlewares/validate");

const router = require("express").Router();

router.post(
  "/v1/letturer",
  validate(validations.createLecturer),
  lecturerController.addLeturer
);
router.get(
  "/v1/letturer",
  validate(validations.getLecturers),
  lecturerController.getAllLecturer
);
router.get(
  "/v1/letturer/:id",
  validate(validations.getLecturer),
  lecturerController.getALecturer
);
router.put(
  "/v1/letturer/:id",
  validate(validations.updateStudent),
  lecturerController.updateLeturer
);
router.delete(
  "/v1/letturer/:id",
  validate(validations.deleteLecturer),
  lecturerController.deleteLeturer
);

module.exports = router;

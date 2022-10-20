const express = require("express");
const router = express.Router();
const jobPostController = require("../Controllers/jobPostController");
const veryfyToken = require("../middleware/veryfyToken");
router
  .route("/")
  .get(jobPostController.getjobPost)
  .post(jobPostController.createjobPost);

router
  .route("/:id")
  .get(jobPostController.getjobPostById)
  .patch(jobPostController.patchjobPostById);

router
  .route("/:id/apply")

  .patch(veryfyToken, jobPostController.patchjobPostApplyById);

module.exports = router;

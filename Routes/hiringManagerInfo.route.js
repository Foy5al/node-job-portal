const express = require("express");
const router = express.Router();
const hiringManagerInfoController = require("../Controllers/hiringManagerInfo.controller");
const veryfyToken = require("../middleware/veryfyToken");
router
  .route("/")
  .get(veryfyToken, hiringManagerInfoController.getHiringManagerInfo)
  .post(hiringManagerInfoController.createHiringManagerInfo);

router.route("/:id").get(hiringManagerInfoController.getHiringManagerInfoById);
//   .patch(hiringManagerInfoController.updateTourPackageInfo);

module.exports = router;

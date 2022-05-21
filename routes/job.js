const express = require("express");
const router = express.Router();

const jobController = require("../controllers/job");

router.route("/").
		get(jobController.getAllJobs).
		post(jobController.newJob);

router.route("/:id").
		get(jobController.getJob).
		patch(jobController.updateJob).
		delete(jobController.deleteJob);

module.exports = router



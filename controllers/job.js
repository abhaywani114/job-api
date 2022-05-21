const {customAPIError} = require("../errors")
const {StatusCodes} = require("http-status-codes");
const JobModel = require("../models/Job");

const getAllJobs = async (req, res) => {
	const jobData =  await JobModel.find({createdBy: req.userData.userId}).
			sort("createdAt");
	return res.status(StatusCodes.OK).json({
		count: jobData.length,
		user: req.userData.userName,
		data: jobData
	});
}

const getJob = async (req, res) => {
	const {userData:{userId}, params:{id:jobId}} = req;

	const jobData = await JobModel.findOne({createdBy:userId, _id: jobId});
	if (!jobData) throw new customAPIError(`No job with id ${jobId}`, 400);

	return res.status(StatusCodes.OK).json({
		user: req.userData.userName,
		data: jobData
	});
}

const newJob = async (req, res) => {
	try {
		req.body.createdBy = req.userData.userId;
		const newJob = await JobModel.create(req.body)
		res.status(StatusCodes.CREATED).
		json(newJob);
	} catch (err) {
		throw new customAPIError(err, StatusCodes.BAD_REQUEST);
	}
}

const updateJob = async (req, res) => {
	//findByIdAndUpdate
	/*
    const job = await Job.findByIdAndUpdate(
    { _id: jobId, createdBy: userId },
    req.body,
    { new: true, runValidators: true }
  )*/

	const {userData:{userId}, params:{id:jobId}} = req;

	const jobData = await JobModel.findByIdAndUpdate({_id:jobId, createdBy: userId}, req.body, {new:true, runValidators:true});
	if (!jobData) throw new customAPIError(`No job with id ${jobId}`, 400);

	return res.status(StatusCodes.OK).json({
		user: req.userData.userName,
		data: jobData
	});
}

const deleteJob = async (req, res) => {
	
	const {userData:{userId}, params:{id:jobId}} = req;

	const jobData = await JobModel.findByIdAndRemove({_id:jobId, createdBy: userId});
	if (!jobData) throw new customAPIError(`No job with id ${jobId}`, 400);

	return res.status(StatusCodes.OK).json({
		user: req.userData.userName,
		status: "Deleted"
	});
res.json("delete jobs");
}

module.exports = {
	getAllJobs,
	getJob,
	newJob,
	updateJob,
	deleteJob
};

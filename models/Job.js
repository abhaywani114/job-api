const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({
	company: {
		type: String,
		required: [true, "Please provide company name"],
		minlength: 2,
	},
	position: {
		type: String,
		required: [true, "Please provide position info"],
	},
	status: {
		type: String,
		enum: ["pending", "intervied", "placed"],
		default: "pending"
	},
	createdBy:{
		type: mongoose.Types.ObjectId,
		ref: 'User',
		required: [true, "Please provide position info"],
	}}, {timestamps: true}
);

module.exports = mongoose.model('Job', JobSchema);

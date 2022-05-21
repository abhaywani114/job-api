const mongoose = require("mongoose")
const bcryptjs = require("bcryptjs");
const JWT = require("jsonwebtoken");

const UserSchema = new mongoose.Schema( {
	name: {
		type: String,
		required: [true, "Please provide a name"],
		minlength: 3,
		maxlength: 50
	},
	password: {
		type: String,
		required: [true, "Please provide a password"],
		minlength: 6,
	},
	email: {
		type: String,
		required: [true, "Please provide an email"],
		match: [
     	 /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Please provide a valid email',
    	],
		unique: true	
	}
});

//middle ware
UserSchema.pre("save", async function(next) {
	const hashSalt = await bcryptjs.genSalt(10);
	this.password = await bcryptjs.hash(this.password, hashSalt);
	next();
});

UserSchema.methods.generateJWT = function() {
	return JWT.sign({
		userId: this._id,
		userName: this.name
	}, process.env.JWT_SECRET, {expiresIn:process.env.JWT_LIFE});
}

UserSchema.methods.comparePassword = async function(candidatePassword) {
	const isMatch = await bcryptjs.compare(candidatePassword, this.password);
	return isMatch;
}

module.exports = mongoose.model("User", UserSchema);

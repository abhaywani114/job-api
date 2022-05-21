const UserModel = require("../models/User")
const {customAPIError} = require("../errors");
const {StatusCodes} = require("http-status-codes");

const login = async (req, res) => {
	const {email, password} = req.body;

	if (!email || !password){ throw new customAPIError(
					"Please provide username/password", StatusCodes.BAD_REQUEST);}

	const user = await UserModel.findOne({email});
	if (!user) throw new customAPIError("Invalid email", StatusCodes.UNAUTHORIZED);

	const isPasswordMatch = await user.comparePassword(password);
	if (!isPasswordMatch) throw new customAPIError("Invalid password", StatusCodes.UNAUTHORIZED);
	
	const token = await user.generateJWT();
	res.status(StatusCodes.OK).json({
		user: {name: user.name},
		token
	});
}

const register = async (req, res) => {
	try {
		/*
 			Logic shifted to model
		const {password} = req.body
		if (!password || password.length < 6) 
			throw new Error("Please provide a password of min len 6");

		const bcryptSalt = await bcryptjs.genSalt(10);
		const hashedPassword = await bcryptjs.hash(password, bcryptSalt);
		*/
		const newUser = await UserModel.create({ 
					...req.body, 
		});

		/*
 *		logic moved to Schema instance
		const token = jwt.sign({
			id:newUser._id
		}, "myKey", {expiresIn:'1d'});*/
		
		const token = newUser.generateJWT();

		res.status(StatusCodes.CREATED).json({
			user: {name: newUser.name},
			token
		});

	} catch (dbError) {
		throw new customAPIError(dbError, StatusCodes.BAD_REQUEST);
	}

}

module.exports = {
	login,
	register
}

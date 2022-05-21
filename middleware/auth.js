const JWT = require("jsonwebtoken");
const {customAPIError} = require("../errors");
const {StatusCodes} = require("http-status-codes");

const authMiddleware = (req, res, next) => {
	const {authorization} = req.headers;
	
	if (!authorization) throw new customAPIError("Authorization token not present", StatusCodes.BAD_REQUEST);
	
	if (!authorization.startsWith("Bearer "))
		throw new customAPIError("Authorization header invalid", StatusCodes.BAD_REQUEST);

	const token  = authorization.split(" ")[1];
	try {
		const decodedData =  JWT.verify(token, process.env.JWT_SECRET);
		req.userData = decodedData
		next();
	} catch (err) {
		throw new customAPIError("Authorization token invalid", StatusCodes.UNAUTHORIZED);
	}
}

module.exports = authMiddleware;

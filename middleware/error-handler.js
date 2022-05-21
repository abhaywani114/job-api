const {customAPIError} = require("../errors/index");

const errorHandleMiddleware = (err, req, res, next) => {
	if (err instanceof customAPIError) {
		return res.status(err.statusCode).json({
				error: err.message
		});
	}
	//log
	console.log({error: err});
	return res.status(500).json({error: "Some internal server error occured"});
}

module.exports = errorHandleMiddleware;

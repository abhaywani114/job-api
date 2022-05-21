const mongoose = require("mongoose");

const dbConnect = (connectString) => {
	return mongoose.connect(connectString);
}

module.exports = dbConnect;

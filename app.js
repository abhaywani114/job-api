require("dotenv").config();
require("express-async-errors");
const express = require("express");
const app = express();
const dbConnect = require("./db/connect")
const errorHandlingMiddleware = require("./middleware/error-handler.js")
const {customAPIError} = require("./errors/index");
const authMiddleware = require("./middleware/auth");


//Security Middlewares
const cors = require("cors");
const helmet = require("helmet");
const xss_clean = require("xss-clean");
const rateLimit = require("express-rate-limit");
app.use(cors());
app.use(helmet());
app.use(xss_clean());
app.set('trust proxy', 1);
app.use(rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
    max: 200, // limit each IP to 100 requests per windowMs
}));
app.use(express.json());

app.get("/", (req, res) => res.send("Jobs API is up"));

//custom routes
const authRoutes = require("./routes/auth")
const jobRoutes = require("./routes/job")

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/jobs", authMiddleware, jobRoutes);


//Server Middleware and start functionalities
app.use(errorHandlingMiddleware);
const startServer = async () => {
	try {
		const dbString = process.env.ATLAS_DB || "";
		const port = process.env.PORT || 3001;
		await app.listen(port, () => console.log(`Server connected at: ${port}`));
		await dbConnect(dbString);
		console.log("Database connected");
	} catch (err) {
		console.log({error: err});
	}
}

startServer();

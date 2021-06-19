const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const config = require("./utils/config");
const pingRouter = require("./controllers/pingRouter");
const userRouter = require("./controllers/userRouter");
const loginRouter = require("./controllers/loginRouter");
const recipeRouter = require("./controllers/recipeRouter");


const app = express();

try {
	mongoose.connect(config.URI!, config.mongooseConfig, () => {
		console.log("successfully connected to mongoose");
	});
} catch (e) {
	console.log(e.message);
};

app.use(express.json());
app.use(cors());
app.use("/", express.static("build"));
app.use("/api/ping", pingRouter);
app.use("/api/user", userRouter);
app.use("/api/login", loginRouter);
app.use("/api/recipe", recipeRouter);

export = app;
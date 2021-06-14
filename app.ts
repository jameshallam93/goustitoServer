import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import * as config from "./utils/config";
import pingRouter from "./controllers/pingRouter";
import { userRouter } from "./controllers/userRouter";
import { loginRouter } from "./controllers/loginRouter";
import { recipeRouter } from "./controllers/recipeRouter";

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
import express from "express";
import { generateUser } from "./generateUser";

const userRouter = express.Router();

userRouter.post("/signup", async (request, response) => {
	const userDetails = request.body;
	try {
		const newUser = await generateUser(userDetails);

		const returnValue = await newUser.save();
		response.json(returnValue).status(200);
	} catch (e) {
		if (e.name === "ValidationError") {
			response.status(401).json({ error: "Username is already in use" });
		}
	}

});

export { userRouter };
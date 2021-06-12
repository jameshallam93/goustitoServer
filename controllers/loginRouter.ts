import express from "express";
const loginRouter = express.Router();
import bcrypt from "bcrypt";
import User from "../models/user";

const compareWithHash = async (password: string, hash: string) => {
	return await bcrypt.compare(password, hash);
};

loginRouter.post("/login", async (request, response) => {
	const credentials = request.body;
	const userProfile = await User.findOne({ username: credentials.username });

	if (!userProfile) {
		return response.json({ error: "user not found" }).status(401);
	}
	const passwordIsValid = await compareWithHash(credentials.password, userProfile.passwordHash);

	if (!passwordIsValid) {
		return response.json({ error: "incorrect password" }).status(401);
	}
	response.send({ username: userProfile.username }).status(200);

});

export { loginRouter };
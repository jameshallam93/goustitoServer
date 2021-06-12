import express from "express";
const loginRouter = express.Router();
import bcrypt from "bcrypt";
import User from "../models/user";

const compareWithHash = async (password: string, hash: string) => {
	return await bcrypt.compare(password, hash);
};

loginRouter.post("/", async (request, response) => {
	const credentials = request.body;
	const userProfile = await User.findOne({ username: credentials.username });

	if (!userProfile) {
		response.status(400).json({ error: "user not found" });
		return;
	}
	const passwordIsValid = await compareWithHash(credentials.password, userProfile.passwordHash);

	if (!passwordIsValid) {
		response.json({ error: "incorrect password" }).status(401);
		return;
	}
	response.send({ username: userProfile.username }).status(200);

});

export { loginRouter };
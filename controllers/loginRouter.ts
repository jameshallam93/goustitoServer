const express = require("express");
const loginRouter = require("express").Router();
const bcrypt = require("bcrypt");

const User1 = require("../models/user");
const jwt1 = require("jsonwebtoken");


const compareWithHash = async (password: string, hash: string) => {
	return await bcrypt.compare(password, hash);
};

const generateToken = (username: string): string => {
	return jwt1.sign({ username: username }, process.env.TOKEN_SECRET!, { expiresIn: 1800 });//eslint-disable-line
};

loginRouter.post("/", async (request: any, response: any) => {
	const credentials = request.body;
	const userProfile = await User1.findOne({ username: credentials.username });

	if (!userProfile) {
		response.status(400).json({ error: "User not found" });
		return;
	}
	const passwordIsValid = await compareWithHash(credentials.password, userProfile.passwordHash);

	if (!passwordIsValid) {
		response.status(400).send({ error: "Incorrect password" });
		return;
	}
	const token = generateToken(credentials.username);
	const currentTime = Math.round(new Date().getTime() / 1000);
	const expiry = (currentTime + 3600) * 1000;
	response.send({
		username: userProfile.username,
		recipes: userProfile.recipes,
		token,
		expiry
	}).status(200);

});

module.exports = loginRouter;
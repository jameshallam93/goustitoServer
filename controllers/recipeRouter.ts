import express from "express";
import User from "../models/user";
import jwt from "jsonwebtoken";

const recipeRouter = express.Router();

recipeRouter.post("/saveById", async (request, response) => {

	const { recipeId, currentUser } = request.body;

	const token: string | undefined = request.headers.authorization?.slice(7);
	if (!token) {
		response.status(401).json({ error: "no token" });
		return;
	}
	const decodedToken: any = jwt.verify(token, process.env.TOKEN_SECRET!);
	const username = decodedToken.username;
	if (username !== currentUser) {
		response.status(403).json({ error: "token does not match user session" });
		return;
	}
	const userDetails = await User.findOne({ username: username });

	if (userDetails) {
		userDetails.recipes = [
			...userDetails.recipes,
			recipeId
		];
		await userDetails.save();

		response.status(200).send(recipeId);
	}

});

recipeRouter.post("/deleteById", async (request, response) => {

	const { recipeId, currentUser } = request.body;

	const token: string | undefined = request.headers.authorization?.slice(7);
	if (!token) {
		response.status(401).json({ error: "no token" });
		return;
	}
	const decodedToken: any = jwt.verify(token, process.env.TOKEN_SECRET!);
	const username = decodedToken.username;
	if (username !== currentUser) {
		response.status(403).json({ error: "token does not match user session" });
		return;
	}
	const userDetails = await User.findOne({ username: username });
	if (userDetails) {
		const newRecipes = userDetails.recipes.filter((recipe: string) => recipe != recipeId);
		userDetails.recipes = [
			...newRecipes
		];
		console.log(userDetails);
		await userDetails.save();
	}

	response.status(200).send(recipeId);
});

export { recipeRouter };
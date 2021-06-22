const generators = require("./generateApiRequest/generateApiRequest");
export { };
const recipeRouter = require("express").Router();
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const axios = require("axios");

recipeRouter.get("/userRecipes/:user", async (request: any, response: any) => {
	const currentUser = request.params.user;
	const token: string | undefined = request.headers.authorization?.slice(7);
	if (!token) {
		response.status(401).json({ error: "no token" });
		return;
	}
	const decodedToken: any = jwt.verify(token, process.env.GOUSTITO_SERVER_TOKEN_SECRET!);
	const username = decodedToken.username;
	if (username !== currentUser) {
		response.status(403).json({ error: "token does not match user session" });
		return;
	}
	const userDetails = await User.findOne({ username: currentUser });
	const recipes = userDetails.recipes;
	response.status(200).json(recipes);

});

recipeRouter.post("/search", async (request: any, response: any) => {
	try {
		const { searchTerms, mealTypes } = request.body;
		const apiRequest = generators.generateApiRequest(searchTerms, mealTypes);
		const apiResponse = await axios.get(apiRequest);
		response.status(200).send(apiResponse.data);
	} catch (e) {
		console.log(e);
	}
})

recipeRouter.post("/saveById", async (request: any, response: any) => {

	const { recipe, currentUser } = request.body;

	const token: string | undefined = request.headers.authorization?.slice(7);
	if (!token) {
		response.status(401).json({ error: "no token" });
		return;
	}
	const decodedToken: any = jwt.verify(token, process.env.GOUSTITO_SERVER_TOKEN_SECRET!);
	const username = decodedToken.username;
	if (username !== currentUser) {
		response.status(403).json({ error: "token does not match user session" });
		return;
	}
	const userDetails = await User.findOne({ username: username });

	if (userDetails) {
		userDetails.recipes = [
			...userDetails.recipes,
			recipe
		];
		await userDetails.save();

		response.status(200).send(recipe);
	}

});

recipeRouter.post("/deleteById", async (request: any, response: any) => {

	const { recipeId, currentUser } = request.body;

	const token: string | undefined = request.headers.authorization?.slice(7);
	if (!token) {
		response.status(401).json({ error: "no token" });
		return;
	}
	const decodedToken: any = jwt.verify(token, process.env.GOUSTITO_SERVER_TOKEN_SECRET!);
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

module.exports = recipeRouter;
const userRouter = require("express").Router();
const generateUser = require("./generateUser");

userRouter.post("/signup", async (request: any, response: any) => {
	const userDetails = request.body;
	try {
		const newUser = await generateUser(userDetails);
		const returnValue = await newUser.save();
		response.json(returnValue).status(200);
	} catch (e) {
		console.log(e);
		if (e.name === "ValidationError") {
			response.status(401).json({ error: "Username is already in use" });
		}
	}

});

module.exports = userRouter;
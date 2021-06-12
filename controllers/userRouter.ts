import express from "express";
import { generateUser } from "./generateUser";

const userRouter = express.Router();

userRouter.post("/newUser", async (request, response) => {
    const userDetails = request.body;
    const newUser = await generateUser(userDetails);

    const returnValue = await newUser.save();
    response.json(returnValue).status(200);
});

export { userRouter };
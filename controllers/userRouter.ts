import express from "express";
import User from "../models/user";

const userRouter = express.Router();

userRouter.post("/newUser", async (request, response) => {
    const userDetails = request.body;

    const newUser = new User({
        username: userDetails.username,
        passwordHash: userDetails.passwordHash
    })
    const returnValue = await newUser.save();
    response.json(returnValue).status(200);
})

export = userRouter;
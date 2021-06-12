import express from "express";
const pingRouter = express.Router();

pingRouter.get("/", (request, response) => {
    response.send("pong");
});

export =  pingRouter;
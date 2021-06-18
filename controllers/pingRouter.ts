const pingRouter = require("express").Router()

pingRouter.get("/", (request: Express.Request, response: any) => {
    response.send("pong");
});

module.exports = pingRouter;
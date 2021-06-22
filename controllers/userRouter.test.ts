const User = require("../models/user");
const mongoose = require("mongoose");
const config = require("../utils/config");
require("@testing-library/jest-dom");
const app = require("../app");
export { };
const supertest = require("supertest")

const api = supertest(app);

const testUsers = [
    {
        username: "User1",
        passwordHash: "password"
    },
    {
        username: "User2",
        passwordHash: "password2"
    },
    {
        username: "User3",
        passwordHash: "password3"
    },
]
const newTestUser = {
    username: "testuser1",
    password: "12345"
}

const connect = async () => {
    await mongoose.connect(config.URI!, config.mongooseConfig);
}
const initialiseDatabase = async () => {
    await User.deleteMany({})
    await connect()

    const userObjects = testUsers.map(user =>
        new User(user))

    const promiseArray = userObjects.map(object =>
        object.save())

    await Promise.all(promiseArray)
}


describe("the userRouter", () => {
    beforeEach(() => {
        initialiseDatabase();
    })
    test("saves a new user to the database", async () => {
        await api
            .post("/api/user/signup")
            .send(newTestUser)
        const savedUser = await User.findOne({ username: newTestUser.username });
        expect(savedUser.username).toEqual(newTestUser.username);

    })
    test("if given a non-unique username, will return status 401", async () => {
        await api
            .post("/api/user/signup")
            .send(newTestUser)
        await api
            .post("/api/user/signup")
            .send(newTestUser)
            .expect(401)
    })
})

afterAll(() => {
    mongoose.disconnect()
})

const mongoose = require("mongoose");
const config = require("../utils/config");
const axios = require("axios");
require("@testing-library/jest-dom");
const app = require("../app");
export { };
const supertest = require("supertest")
const generators = require("./generateApiRequest/generateApiRequest");
const api = supertest(app);

const generateSpy = jest.spyOn(generators, "generateApiRequest");

const testRecipeTerms = { searchTerms: "search terms", mealTypes: [] };
const testRecipeData = {
    recipes: [
        "meat", "veg"
    ]
}

const connect = async () => {
    await mongoose.connect(config.URI!, config.mongooseConfig);
}
jest.mock("axios");

describe("the recipe router search endpoint", () => {
    beforeAll(async () => {
        await connect();
        jest.mock("axios");
        axios.get.mockImplementation(() =>
            Promise.resolve({
                data: {
                    recipes: [
                        "meat", "veg"
                    ]
                }
            })
        )
    })
    test("calls on generateApiRequest.", async () => {
        await api
            .post("/api/recipe/search")
            .send(testRecipeTerms)
        expect(generateSpy).toHaveBeenCalled();
    })
    test("returns status 200", async () => {
        await api
            .post("/api/recipe/search")
            .send(testRecipeTerms)
            .expect(200)
    })
    test("and returns mocked axios data", async () => {
        const result = await api
            .post("/api/recipe/search")
            .send(testRecipeTerms)
            .expect(200)
        expect(result.body).toEqual(testRecipeData)
    })
})


afterAll(() => {
    mongoose.disconnect();
})
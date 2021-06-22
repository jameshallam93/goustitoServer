require("@testing-library/jest-dom/extend-expect");
const generateUser = require("./generateUser");
export { };
const testUsername = "username";
const testPassword = "password";
const testRecipes = [
    "meat",
    "veg"
]
const testUserDetails = {
    username: testUsername,
    password: testPassword,
    recipes: testRecipes
};

describe("the generateUser function", () => {
    test("returns an object with username and passwordHash", async () => {
        const generatedUser = await generateUser(testUserDetails);
        expect(generatedUser.username).toEqual(testUsername)
        expect(generatedUser.passwordHash).toBeTruthy();
    })
})
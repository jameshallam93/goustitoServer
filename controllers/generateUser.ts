const User = require("../models/user");
const generateHash = require("../utils/auth/generatePasswordHash");
export type UserDetails = {
	username: string,
	password: string,
	recipes?: string[]
}

export const generateUser = async (userDetails: UserDetails): Promise<any> => {
	const passwordHash = await generateHash(userDetails.password);

	return new User({
		username: userDetails.username,
		passwordHash: passwordHash
	});
};

module.exports = generateUser;
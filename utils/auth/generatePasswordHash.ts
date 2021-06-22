const bcrpyt = require("bcrypt");

const saltRounds = 10;

export const generateHash = async (password: string): Promise<any> => {//eslint-disable-line

	const hash = await bcrpyt.hash(password, saltRounds);
	return hash;

};
module.exports = generateHash;
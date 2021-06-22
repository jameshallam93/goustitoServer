const baseUrl = "https://api.edamam.com/search";

const generators = {
	generateMealTypeString(mealTypes: string[]) {

		if (mealTypes.length === 0) {
			return "";
		}
		let mealTypeString = "";

		mealTypes.forEach((type) => {
			mealTypeString = `${mealTypeString}${type}+`;
		});
		return mealTypeString;
	},

	generateSearchTermString(searchTerms: string) {
		const split = searchTerms.split(" ");
		if (split.length === 1) {
			return split[0];
		}
		return split.join("%20");
	},

	generateApiRequest(searchTerms: string, mealTypes: string[]) {
		const API_ID = process.env.REACT_APP_GOUSTITO_FRONTEND_API_ID;
		const API_KEY = process.env.REACT_APP_GOUSTITO_FRONTEND_EDAMAM_API_KEY;
		const apiVariables = `&app_id=${API_ID}&app_key=${API_KEY}&from=0&to=99`;
		const searchTermsString = this.generateSearchTermString(searchTerms);
		const mealTypeString = this.generateMealTypeString(mealTypes);
		let requestString = "";

		requestString = `${baseUrl}?q=${searchTermsString}${apiVariables}`;

		if (mealTypeString) {
			requestString = `${requestString}&mealType=${mealTypeString}`;
		}
		return requestString;
	}
}
module.exports = generators;
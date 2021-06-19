require("dotenv").config();

export const PORT = process.env.GOUSTITO_SERVER_PORT;
export const URI = process.env.GOUSTITO_SERVER_MONGO_DB_URI;
export const mongooseConfig = {
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useNewUrlParser: true
};
export const TOKEN_SECRET = process.env.GOUSTITO_SERVER_TOKEN_SECRET;




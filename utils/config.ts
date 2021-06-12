import "dotenv/config";

export const PORT = process.env.PORT;
export const URI = process.env.MONGO_DB_URI;
export const mongooseConfig = {
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useNewUrlParser: true
};
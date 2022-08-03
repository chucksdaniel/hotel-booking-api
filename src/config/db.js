import mongoose from "mongoose";
import dotenv from "dotenv";

// import config from "./keys.js";

// const db = config.MONGOURI;

dotenv.config();

const connectDB = async () => {
	try {
		await mongoose.connect(process.env.MONGOURI);
		console.log("DB Connection was successful");
	} catch (err) {
		console.log(err);
		process.exit(1);
	}
};

// const connectDB = async () => {
// 	try {
// 		await mongoose.connect(db);
// 		console.log("DB Connection was successful");
// 	} catch (err) {
// 		console.log(err);
// 		process.exit(1);
// 	}
// };

export default connectDB;

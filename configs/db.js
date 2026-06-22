import mongoose from "mongoose";
import envconfig from "./envconfig.js";

const db = async()=>{
    try {
        await mongoose.connect(envconfig.MONGODB_URL);
        console.log("MongoDB connected...");
    } catch (error) {
        console.log(error.message);
    }
}

export default db();
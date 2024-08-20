import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const connectToDB = async () => {
    try {
        const link = await mongoose.connect(process.env.MONGO_DB_URL);
        console.log(`Connected to DB ${link.connection.host}`.blue.bold);
    } catch (error) {
        console.log(`Error While Connecting to DB ${error}`.red.bold);
    }
}

export default connectToDB;
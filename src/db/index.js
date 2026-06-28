import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () =>{
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
        // read about this 
    } catch(error) {
        console.log("mongoDB connection failed", error);
        process.exit(1)
        // read about exit codes
        
    }
}

export default connectDB
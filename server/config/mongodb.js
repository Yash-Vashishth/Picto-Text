import mongoose from "mongoose";

const DB = process.env.MONGODB_URI
const connectDB =async()=>{

    mongoose.connection.on('connected',()=>{
        console.log("Database connected");
    })

    await mongoose.connect(DB)
}

export default connectDB;

import mongoose from 'mongoose'
import dns from "node:dns";

dns.setServers(["8.8.8.8", "1.1.1.1"]);

const connectDB = async ()=> {
    try{
        const conn = await mongoose.connect(process.env.MONGO_DB_URL)
        console.log(`MongoDB Connected`)
    }
    catch(error){
        console.log("MongoDb Connection Failed: ",error.message)
        process.exit(1)
    }
}

export default connectDB;
import mongoose from "mongoose";

const connectDB = async (req,res)=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("conneced to DB succcesully");
        
    } catch (error) {
        console.log("cant connect to db");
        
    }
}

export default connectDB
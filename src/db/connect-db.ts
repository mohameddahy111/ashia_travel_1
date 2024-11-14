import mongoose from "mongoose";

 export const connectDb = ()=>{
    mongoose.connect(process.env.MONGODB as string,).then(()=>{
        console.log("Connected to MongoDB")
    }).catch((err)=>{
        console.log(err)
    })

}
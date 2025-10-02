import mongoose from "mongoose"

const newtaskSchema = new mongoose.Schema({
   taskname:{
    type:String,
    required:true
   },
   time:{
    type:String,
    required:true
   },
   priority:{
    type:String,
    enum:["High","Medium","Low"],
    required:true
   },
   compornot: {
    type: String,
    enum: ["pending", "completed", "backlog"],
    default: "pending"
}
})

const newTask = mongoose.model("newTask",newtaskSchema)

export default newTask;
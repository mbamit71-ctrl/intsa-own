import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import connectDB from "./config/db.js";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";


const app = express();

dotenv.config();
app.use(express.json());
app.use(cors())

app.use(cookieParser());

app.use("/api", authRoutes);

app.get("/",(req,res)=>{
    res.send("hey i am frm backend")
})

const PORT = process.env.PORT;


app.get("/",(req,res)=>{
    res.send("hey i am live here")
})

app.listen(PORT,()=>{
    connectDB()
    console.log(`server is live at port no ${PORT}`)
})



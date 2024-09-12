//step 1
import express from "express";
import dotenv from "dotenv";
import databaseConnection from "./db/database.js"
import cookieParser from 'cookie-parser';
import cors from "cors";
import userRoute from "./routes/userRoutes.js"

databaseConnection();
dotenv.config({
    path:".env"
})

const app=express()

//middleware
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cookieParser())
const corsOptions={
    origin:'http://localhost:5173',
    Credential:true
}
app.use(cors(corsOptions))

//api
app.use("/api/v1/user",userRoute)


app.listen(process.env.PORT,()=>{
    console.log(`"Server linsten at port ${process.env.PORT}"`);
    
});
//step 1
import express from "express";
import dotenv from "dotenv";
import databaseConnection from "./db/database.js"
import cookieParser from 'cookie-parser';
import cors from "cors";

databaseConnection();
dotenv.config({
    path:".env"
})

const app=express()

//middleware
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cookieParser())
app.use(cors())


app.listen(process.env.PORT,()=>{
    console.log(`"Server linsten at port ${process.env.PORT}"`);
    
});
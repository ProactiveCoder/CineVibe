import { User } from "../models/userModel.js";
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken";

export const Login=async(req,res)=>{
    try {
        const {email,password}=req.body;
        //inputbox is empty
        if(!email ||!password){
            return res.status(401).json({
                message:"Invalid Input",
                success:false
            })
        }
        const user=await User.findOne({email});
        if(!user){
            return res.status(401).json({
                message:"email or password is not valid",
                success:false
            })

        }
        const isMatchPassword= await bcryptjs.compare(password,user.password)
        if(!isMatchPassword){
            return res.status(401).json({
                message:"Invalid password",
                success:false
            })
        }
        const tokenData={
            id:user._id
        }
        const token=await jwt.sign(tokenData,"alskdjfalahsdf",{expiresIn:"1d"});
        return res.status(200).cookie("token",token,{httponly:true}).json({
            message:`Welcome back ${user.name}`,
            success:true
        })
    } catch (error) {
        console.log(error)
        
    }
}

export const Logout=async(req,res)=>{
    return res.status(200).cookie("token","",{expiresIn:new Date(Date.now)}).json({
        message:"You have logged out successfully",
        success:true
    })
}

export const Register=async(req,res)=>{
    try{
        const {name,email, password}=req.body;
        if(!name ||!email || !password){
            return res.status(401).json({
                message:"Invalid data",
                success:false
            })
        }
        const user=await User.findOne({email});
        if(user){
            return res.status(401).json({
                message:"user is alreay exist",
                success:false
            })
        }
        const hashPassword=await bcryptjs.hash(password,16);
        await User.create({
            name,
            email,
            password: hashPassword
        });
        return res.status(200).json({
            message:"Account has created successfully",
            success:true
        })
    }catch(error){
        console.log(error)
    }
}
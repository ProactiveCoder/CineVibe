import { User } from "../models/userModel";
const Register=async(req,res)=>{
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
        await User.create({
            name,
            email,
            password
        });
        return res.status(200).json({
            message:"Account has created successfully",
            success:true
        })
    }catch(error){
        console.log(error)
    }
}
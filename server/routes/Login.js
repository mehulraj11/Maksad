import {User} from "./model/userModel.js";
import mongoose from "mongoose";

const Login = async(req,res)=>{
    const {email,password} = req.body;
        if(!email || !password){
            return res.status(401).json({
                message:"invalid user",
                success:false
            })
        };
        // if email is  not found 
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({
                message:"invalid email or password",
                success:false
            })
        }
        // check if password is same or not 
        const check = await User.compare(password,user.password);
        if(check){
            // render to main page
            return res.json({
                message:"successfully logged In",
                success:true
            })
        }
        else{  //if wrong password
            //create component
            res.json({
                message:"wrong password",
                success:false
            })
        }
    }
}
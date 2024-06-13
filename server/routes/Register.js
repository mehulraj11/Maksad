import {User} from "./models/userModel";
import mongoose from "mongoose";

const register = async(req,res) => {
    const {username, email, password} = req.body;
        if(!username || !email || !password){
            res.status(401).json({
                message:"*please fill all fields",
                success:false
            })
        }

        try{
            await User.create(username,email,password);

            res.status(201).json({
                success:true,
                message:"details is added inside database",
            });
        }
        catch(error){
            console.log(error);
        }
}

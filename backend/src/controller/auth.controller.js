import User from "../models/User.js";
import jwt from 'jsonwebtoken';

export async function signup(req, res){
    const {email, password, fullName} = req.body;

    try {
        if(!email || !password || !fullName){
            return res.status(400).json({message: "All fileds are required"});
        }

        if(password.length<8){
            return res.status(400).json({message: "Password must be at least 8 characters"});
        }

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if(!emailRegex.test(email)){
            return res.status(400).json({message: "Invalid email format"});
        }

        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({message: "Email already exists; enter a different one"});
        }

        //choose the random avatar functionality
        const idx = Math.floor(Math.random() * 100) + 1; //generate random number b/w 1-100
        const randomAvatar = `https://avatar.iran.liara.run/public/${idx}.png`

        const newUser = new User.create({
            email, 
            fullName,
            password,
            profilePic: randomAvatar,
        })

        const token = jwt.sign({userId:newUser._id}, process.env.JWT_SECRET_KEY, {
            expresIn: "7d"
        })

        res.cookie("jwt", token, {
            maxAge: 7*24*60*60*1000,
            httpOnly: true, // prevents XSS attacks
            sameSite: 'strict', //prevents CSRF attacks
            secure: process.env.NODE_ENV==='production' //prevents HTTP requests
        })

        res.status(201).json({success:true, user:newUser});

    } catch (error) {
        
    }
    
}

export async function login(req, res){
    res.send('login router')
}

export function logout(req, res){
    res.send('logout router')
}
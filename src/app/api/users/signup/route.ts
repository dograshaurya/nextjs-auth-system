import {connect} from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

connect()

export async function POST(request:NextRequest){
    try {
        const reqBody = await request.json()
        const {username, email, password} = reqBody
        console.log(reqBody); 

        const user = await User.findOne({email})
        if(user){
            return NextResponse.json({
                error:"User Already Exists"
            },{status:400})
        }

        const checkUsername = await User.findOne({username});
        if(checkUsername){
            return NextResponse.json({
                error: "Username already taken!"
            },{status:400})
        }

        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt);

        const newUser = new User({
            username,
            email,
            password: hashedPassword
        });
        const savedUser = await newUser.save();
        console.log(savedUser);

        return NextResponse.json({
            error:"User Created Successfully",
            success:true,
            savedUser
        },{status:200})
        
    } catch (error: any) {
        return NextResponse.json({
            error:error.message
        },{status:500})
    }
}
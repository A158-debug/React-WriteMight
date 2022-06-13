import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import UserModel from "../models/userModel.js";

const secret = "L4lamborghini";

export const signin = async (req, res) => {
    const { email, password } = req.body; //Take email and password from already sign user

    try {
        const oldUser = await UserModel.findOne({ email }); //Find user with email

        if (!oldUser) return res.status(400).json({ message: "User doesn't exist" });

        const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

        if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });

        const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, { expiresIn: "1h" });

        res.status(200).json({ result: oldUser, token })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong" });
    }
}

export const signup = async (req, res) => {
    const { email, password, firstName, lastName } = req.body; //take credentials from user signUp
    try {
        const oldUser = await UserModel.findOne({ email });  //Find email if it exist in database

        if (oldUser) return res.status(400).json({ message: "User already exists" });

        const hashedPassword = await bcrypt.hash(password, 12);
        
        //create a new user in Database
        const result = await UserModel.create({ email, password: hashedPassword, name: `${firstName} ${lastName}`}); 
         
        //Provide sign-in token
        const token = jwt.sign( { email: result.email, id: result._id }, secret, { expiresIn: "1h" } );

        res.status(201).json({ result, token })

    } catch (error) {

        res.status(500).json({ message: "Something went wrong" })
        console.log(error)
    }
}

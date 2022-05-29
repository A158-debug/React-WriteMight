import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import UserModel from "../models/userModel.js";

const secret = "L4lamborghini";

export const signin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const oldUser = await UserModel.findOne({ email });

        if (!oldUser) return res.status(400).json({ message: "User doesn;t exist" });

        const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

        if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });

        const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, { expiresIn: "1h" });

        res.staus(200).json({ result: oldUser, token })
        
    } catch (err) {

        res.status(500).json({ message: "Something went wrong" });
    }
}

export const signup = async (req, red) => {
    const { email, password, firstName, lastName } = req.body;

    try {
        const oldUser = await UserModel.findOne({ email });

        if (oldUser) return res.status(400).json({ message: "User already exists" });

        const hashedPassword = await bcrypt.hash(password, 12);

        const result = jwt.sign({ email: result.email, password: hashedPassword, name: `${firstName} ${lastName}` }, secret, { expiresIn: "1h" });

        res.status(500).json({ result, token })

    } catch (error) {

        res.status(500).json({ message: "Something went wrong" })
        console.log(error)
    }
}

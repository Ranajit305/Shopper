import User from "../models/user.model.js"
import validator from "validator"
import bcrypt from 'bcryptjs'
import generateToken from "../utils/generateToken.js";

export const signup = async (req, res) => {
    try {
        const { name, email, password} = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({success: false, message: 'Fields Missing'})
        }

        if (!validator.isEmail(email)) {
            return res.status(400).json({success: false, message: 'Invalid Email'})
        }

        const isUser = await User.findOne({email});
        if (isUser) {
            return res.status(400).json({success: false, message: 'User already exists'})
        }

        if (password.length < 5) {
            return res.status(400).json({success: false, message: 'Weak Password'})
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            name, 
            email,
            password: hashedPassword
        })
        await newUser.save();
        generateToken(newUser._id, res);
        const resUser = await User.findById(newUser._id).select('-password');
        res.status(200).json({success: true, user: resUser, message: 'Account Created'})
    } catch (error) {
        res.status(500).json({success: false, message: error.message})
    }
    
}

export const login = async (req, res) => {
    try {
        const { email, password} = req.body;
        if (!email || !password) {
            return res.status(400).json({success: false, message: 'Fields Missing'})
        }

        if (!validator.isEmail(email)) {
            return res.status(400).json({success: false, message: 'Invalid Email'})
        }

        const user = await User.findOne({email});
        if (!user) {
            return res.status(400).json({success: false, message: 'User does not exists'})
        }

        const isPassword = await bcrypt.compare(password, user.password);
        if (!isPassword) {
            return res.status(400).json({success: false, message: 'Incorrect Password'})
        }

        generateToken(user._id, res);
        const resUser = await User.findOne({email}).select('-password');
        res.status(200).json({success: true, user: resUser, message: `Welcome Back ${resUser.name}`})
    } catch {
        res.status(500).json({success: false, message: error.message})
    }
}

export const checkAuth = async (req, res) => {
    try {
        res.status(200).json(req.user)
    } catch (error) {
        res.status(500).json({success: false, message: error.message})
    }
}

export const logout = async (req, res) => {
    try {
        res.clearCookie('jwt', { maxAge: 0 });
        res.status(200).json({ success: true, message: 'Logged Out' })
    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}

export const updateAddresss = async (req, res) => {
    try {
        const { address } = req.body;
        await User.findByIdAndUpdate(req.user._id, { $set: { shippingAddress: address } }, { new: true })
        res.status(200).json({success: true, message: 'Address Saved'});
    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}
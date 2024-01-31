import { comparePass, hashPass } from "../helpers/authHelper.js";
import userModel from "../models/userModel.js";
export const signupController = async (req, res) => {
    try {
        const { name, email, pass, answer } = req.body
        //validation
        if (!name) {
            return res.send({ message: 'Name is required' })
        }
        if (!email) {
            return res.send({ message: 'Email is required' })
        }
        if (!pass) {
            return res.send({ message: 'Password is required' })
        }
        if (!answer) {
            return res.send({ message: 'Answer is required' })
        }

        //check user
        const exisitingUser = await userModel.findOne({ email })

        //exisiting user
        if (exisitingUser) {
            return res.status(200).send({
                success: false,
                message: 'Already Registered please Sigin',
            })
        }
        //register user
        const hashedPass = await hashPass(pass)
        //save
        const users = await new userModel({ name, email, pass: hashedPass, answer }).save()
        res.status(201).send({
            success: true,
            message: 'User Registered Successfully',
            users
        })
    }
    catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'Error in signup',
            error
        })
    }
};

//post login
export const signinController = async (req, res) => {
    try {
        const { email, pass } = req.body
        //validation
        if (!email || !pass) {
            return res.status(404).send({
                success: false,
                message: 'Invalid Email or Password'
            })
        }
        //check user
        const user = await userModel.findOne({ email })
        if (!user) {
            return res.status(404).send({
                success: false,
                message: 'Email is not registered'
            })
        }
        const match = await comparePass(pass, user.pass)
        if (!match) {
            return res.status(200).send({
                success: false,
                message: 'Invalid Password'
            })
        }
        res.status(200).send({
            success: true,
            message: 'login successfully',
            user: {
                name: user.name,
                email: user.email,
                role: user.role
            },
        })
    }
    catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'Error in signin',
            error
        })
    }
};

//forgotPasswordController

export const forgotPasswordController = async (req, res) => {
    try {
        const { email, answer, newPass } = req.body
        if (!email) {
            res.status(400).send({ message: 'Email is required' })
        }
        if (!answer) {
            res.status(400).send({ message: 'Answer is required' })
        }
        if (!newPass) {
            res.status(400).send({ message: 'New Password  is required' })
        }

        //check email &answer
        const user = await userModel.findOne({ email, answer })
        if (!user) {
            return res.status(404).send({
                success: false,
                message: 'Wrong Email or Answer'
            })
        }
        const hashed = await hashPass(newPass)
        await userModel.findByIdAndUpdate(user._id, { pass: hashed });
        res.status(200).send({
            success: true,
            message: 'Password Reset Successfully'
        })
    }
    catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'Something went wrong',
            error
        })
    }
};
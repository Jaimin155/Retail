import express from "express";
import {signupController,signinController} from "../controllers/authController.js"


//router object
const router=express.Router()


//routing
//Signup method POST
router.post('/signup',signupController)

//Login method POST
router.post('/signin',signinController)

export default router
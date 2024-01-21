import express from "express";
import {signupController,signinController} from "../controllers/authController.js"


//router object
const router=express.Router()


//routing
//Signup method POST
router.post('/Signup',signupController)

//Login method POST
router.post('/Login',signinController)

export default router
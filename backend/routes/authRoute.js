import express from "express";
import {signupController,signinController} from "../controllers/authController.js"


//router object
const router=express.Router()


//routing
//Signup method POST
router.post('/signup',signupController)

//Login method POST
router.post('/login',signinController)


//protected  route auth 
router.get('/user-auth',requiresignin,(req,res)=>{
    res.status(200).send({ok:true})})
export default router
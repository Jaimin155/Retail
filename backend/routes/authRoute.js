import express from "express";
import { signupController, signinController, forgotPasswordController } from "../controllers/authController.js"

//router object
const router = express.Router()

//routing
//Signup method POST
router.post('/signup', signupController)

//Login method POST
router.post('/login', signinController)

//forgot pass POST
router.post('/forgot-password', forgotPasswordController)

//protected user route auth 
router.get('/user-auth',(req, res) => {
    res.status(200).send({ ok: true });
})

//protected user route auth
router.get('/admin-auth',(req, res) => {
    res.status(200).send({ ok: true });
})


export default router;
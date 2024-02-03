import express from 'express'
import { categoryController, createCategoryController, deleteController, singleController, updateCategoryController } from '../controllers/categoryController.js'
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';


const router=express.Router()

//routes
//create category
router.post('/create-category',requireSignIn,
isAdmin,createCategoryController);

//update category
router.put('/update-category/:id', requireSignIn,
isAdmin,updateCategoryController);

//getall category
router.get('/get-category',categoryController);

//single category
router.get('/single-category/:slug',singleController);

//delete category
router.delete('/delete-category/:id',requireSignIn,
isAdmin,deleteController);
export default router
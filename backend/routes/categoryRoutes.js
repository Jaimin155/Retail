import express from 'express'
import { categoryController, createCategoryController, deleteController, singleController, updateCategoryController } from '../controllers/categoryController.js'


const router=express.Router()

//routes
//create category
router.post('/create-category',createCategoryController);

//update category
router.put('/update-category/:id',updateCategoryController);

//getall category
router.get('/get-category',categoryController);

//single category
router.get('/single-category/:slug',singleController);

//delete category
router.delete('/delete-category/:id',deleteController);
export default router
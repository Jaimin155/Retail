import express from 'express'
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';
import { createProductController, deleteProductController, getProductController, getSingleProductController, productImageController, updateProductController } from '../controllers/productController.js';
import formidable from 'express-formidable'

const router = express.Router()

//routes
//create category
router.post('/create-product', requireSignIn, isAdmin, formidable(), createProductController);
  
//get products
router.get('/get-product', getProductController);

//single products
router.get('/single-product/:slug', getSingleProductController);

//get image
router.get('/product-image/:pid',productImageController);

//get image
router.delete('/product/:pid',deleteProductController);

//update-product
router.put("/update-product/:pid",requireSignIn,isAdmin,formidable(),updateProductController);

export default router
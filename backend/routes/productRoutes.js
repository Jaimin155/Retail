import express from 'express'
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';
import { createProductController, deleteProductController, getProductController, getSingleProductController, productCountController, productFiltersController, productListController, productPhotoController, updateProductController } from '../controllers/productController.js';
import formidable from 'express-formidable'

const router = express.Router()

//routes
//create category
router.post('/create-product', requireSignIn, isAdmin, formidable(), createProductController);
  
//get products
router.get('/get-product', getProductController);

//single products
router.get('/get-product/:slug', getSingleProductController);

//get image
router.get('/product-photo/:pid',productPhotoController);

//get image
router.delete('/delete-product/:pid',deleteProductController);

//update-product
router.put("/update-product/:pid",requireSignIn,isAdmin,formidable(),updateProductController);

//filter product
router.post('/product-filters',productFiltersController)

//count product
router.get("/product-count", productCountController);

//product per page
router.get("/product-list/:page", productListController);

export default router
const express=require('express');
const productController=require('../Controller/productController.js')
const productRouter=express.Router();
productRouter.route('/')
    .get(productController.getAllProduct)
    // .post(productController.addProduct)
module.exports=productRouter;
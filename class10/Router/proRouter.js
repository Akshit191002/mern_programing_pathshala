const express=require('express')
const procon=require('../Controller/product.js')

const proRouter=express.Router();
proRouter.route('/')
    .get(procon.getAllProducts)
    .post(procon.addProduct);

module.exports=proRouter;
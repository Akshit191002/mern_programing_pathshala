const mongoose = require('mongoose');
const productSchema=mongoose.Schema({
    title:{
        type: String,
        unique: true,
        required: true,
    },
    price:{
        type: Number,
        required:true,
    }
})
const productModel=mongoose.model('Products',productSchema)
module.exports=productModel;
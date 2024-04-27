const productModel=require('../Model/productModel')
const getAllProduct=async(req,res)=>{
    const data=await productModel.find();
    console.log(data);
    res.json({
        status:'success',
        data:{
            data,
        }
    })
}
const addProduct =async(req,res)=>{
    const data=await productModel.create(req.body);
    console.log(data)
    console.log(req.body)
    res.json({
        status:'false',
        data :{
            product:data
        }
    })
}
const editProduct=async(req,res)=>{
    const reqId=req.params.id;
    const re={...req.body,reqId}
    const data=await productModel.findOneAndReplace({_id: reqId},re)
    res.json({
        status:'false',
        data :{
            product:data
        }
    })
}

const deleteProduct = async (req, res) => {
    const reqId = req.params.id
    const result = await productModel.deleteOne({ _id: reqId });
    res.json({
        status: 'success',
        data: {
            newProduct: null
        }
    })
}
module.exports={
    getAllProduct,
    addProduct,editProduct,deleteProduct
}
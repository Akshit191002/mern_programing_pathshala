// const fsPromise=require('fs/promises')
const { query } = require('express');
const productModel = require('../models/productsModels')
const getAllProduct = async (req, res) => {

    // const {sort,...q} = req.query;
    // console.log(q,sort);
    // let query = productModel.find(q);
    // query = query.sort(sort.split(',').join(' '))
    // const products = await query

    // const {sort='price',page=1,pageSize=3,field='price',...q}=req.query;
    // const sortStr=sort.split(',').join(' ')
    // let query=productModel.find(q);
    // query=query.sort(sortStr);
    // const skip=pageSize*(page-1);
    // query=query.skip(skip).limit(pageSize);
    // query=query.select(field)

    const q=req.query;
    console.log(q);
    const products=await query;
    
    const totalResult=await productModel.countDocuments();

    console.log(req.url)
    res.send({
        status: 'success',
        totalResult:totalResult,
        result: products.length,
        pageSize:pageSize,
        page:page,
        data: {
            products,
        }
    })
}

const addProduct = async (req, res) => {
    try {
        const { _id, ...reqdata } = req.body
        const data = await productModel.create(reqdata);
        console.log(data)
        console.log(req.body)
        res.json({
            status: 'false',
            data: {
                product: data
            }
        });
    }
    catch (err) {
        res.json({
            status: 'success',
            message: JSON.stringify(err)
        })
    }
}

const editProduct = async (req, res) => {
    try {
        const reqId = req.params.id;
        const data = { ...req.body, reqId }
        const result = await productModel.findOneAndReplace({ _id: reqId }, data);
        res.json({
            status: 'success',
            data: {
                products: result,
            }
        });
    }
    catch (err) {
        res.json({
            status: 'success',
            message: JSON.stringify(err)
        })
    }
}

const deleteProduct = async (req, res) => {
    try {
        const reqId = req.params.id
        const result = await productModel.deleteOne({ _id: reqId });
        res.json({
            status: 'success',
            data: {
                newProduct: null
            }
        })
    }
    catch (err) {
        res.json({
            status: 'success',
            message: JSON.stringify(err)
        })
    }
}
module.exports = {
    getAllProduct,
    addProduct,
    editProduct,
    deleteProduct
}
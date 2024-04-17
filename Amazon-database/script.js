const express=require('express')
const mongoose=require('mongoose')
const productRouter=require('./routes/productsRoute.js')
const test=require('./models/productsModels.js')
const app=express()
app.use('/api/products',productRouter);
const url='mongodb+srv://Akki:Akshit1234@cluster0.lmvmcg6.mongodb.net/$_DB_NAME_$?retryWrites=true&w=majority&appName=Cluster0'
const databaseName="Amazon-backend"
let dblink=url.replace("$_DB_NAME_$",databaseName)

mongoose.connect(dblink)
.then(
    ()=>console.log("...........Database Connected.............")
)
app.listen(1400)
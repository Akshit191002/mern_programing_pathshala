const express=require('express');
const mongoose=require('mongoose');

const productRouter=require('./Routes/productRoute')
const app=express()
app.use(express.json())
app.use('/api/products',productRouter)

const url='mongodb+srv://Akki:Akshit1234@cluster0.lmvmcg6.mongodb.net/$_DB_NAME_$?retryWrites=true&w=majority&appName=Cluster0'
const databaseName="Practice-Database";
let dblink=url.replace("$_DB_NAME_$",databaseName);
mongoose.connect(dblink)
.then(
    ()=>console.log("Database connected")
)
app.listen(2002)
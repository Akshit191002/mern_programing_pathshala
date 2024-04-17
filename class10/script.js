const express = require('express');
const fspromise = require('fs/promises');
// const product=require('./Controller/product.js')
// const userde=require('./Controller/usercont.js');
const productRouter=require('./Router/proRouter.js')
const app = express();

app.use(express.json())
app.use((req, res, next) => {
    // console.log('request ');
    const time= new Date().toLocaleString();
    fspromise.appendFile('./log.txt',req.url+'\t'+time+'\n');
    next();
})
// const productRouter=express.Router();
// const userRouter=express.Router();

app.use('/api/products',productRouter)
// app.use('/api/users',userRouter)

// productRouter.route('/')
//     .get(product.getAllProducts)
//     .post(product.addProduct)

// productRouter.route('/:id')
//     .put(product.editProduct)
//     .delete(product.deleteProduct)

// userRouter.route('/')
//     .get(userde.getuser)
//     .post(userde.adduser)
//     .delete(userde.deleteuser)
//     .put(userde.edituser)


// app.route('/api/products')
//     .get(product.getAllProducts)
//     .post(product.addProduct)

// app.route('/api/products/:id')
//     .put(product.editProduct)
//     .delete(product.deleteProduct)    
        
// app.route('/api/users')
//     .get(userde.getuser)
//     .post(userde.adduser)
//     .delete(userde.deleteuser)
//     .put(userde.edituser)

// app.get('/api/products', product.getAllProducts);
// app.post('/api/products', product.addProduct);
// app.put('/api/products/:id', product.editProduct);
// app.delete('/api/products/:id', product.deleteProduct);
// app.get('/api/users',userde.getuser);
// app.post('/api/users',userde.adduser);
// app.put('/api/users',userde.edituser);
// app.delete('/api/users',userde.deleteuser);
app.listen(2000);
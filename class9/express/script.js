const express = require('express');
const fs = require('fs');
const fspromise = require('fs/promises');
const app = express();
app.use(express.json())
app.get('/api/products', async (req, res) => {
    // const data=fs.readFileSync('./data.json','utf-8');
    const data = await fspromise.readFile('./newdata.json', 'utf-8');
    const arr = JSON.parse(data);
    // res.json(arr);
    res.json({ 
        status: 'success',
        results: arr.length,
        data: {
            products: arr,
        }
    });
})

app.post('/api/products', async (req, res) => {
    // console.log(Object.keys(req))
    // console.log(req.body)
    const data = req.body;
    const db = await fspromise.readFile('./newdata.json', 'utf-8')
    const arr = JSON.parse(db)
    const len = arr.length;
    const newProduct = data;
    if (len == 0) {
        newProduct.id = 1;
        // console.log(arr)
        // arr.push(data);
        // console.log(arr);
        // fspromise.writeFile('./newdata.json',JSON.stringify(arr));
    }
    else {
        const newProduct = data;
        newProduct.id = (arr[len - 1].id) + 1;
        // const neweId=db[len-1];
    }
    arr.push(newProduct)
    fspromise.writeFile('./newdata.json', JSON.stringify(arr));
    res.json({
        status: 'success',
        result: 1,
        data: {
            newProduct: newProduct,
        }
    })
    // res.send('work in progress.....')
});

app.put('/api/products/:id', async (req, res) => {
    const arr = JSON.parse(await fspromise.readFile("./newdata.json", "utf8"));
    // res.send("karya pragati par hai");
    const reqid = parseInt(req.params.id);
    
    const data = req.body;
    data.id = reqid;
    const newArr = arr.map((elem) => {
        if (elem.id == reqid) return data;
        else return elem;
    });
    fspromise.writeFile("./newdata.json", JSON.stringify(newArr));
    res.json({
        status: 'success',
        results: 1,
        data: {
            newProduct:data,
        }
    })
    console.log(data);
})

app.delete('/api/products/:id',async(req,res)=>{
    const reqid=parseInt(req.params.id)
    const arr=JSON.parse(await fspromise.readFile("./newdata.json","utf-8"))
    const newarr=arr.filter((elem)=>{
        if(elem.id===reqid) return false;
        else return true;
    })
    fspromise.writeFile("./newdata.json",JSON.stringify(newarr));
    res.json({
        status:'success',
        data:{
            newProduct:null
        }
    })
})
app.listen(3000);
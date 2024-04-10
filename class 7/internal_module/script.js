//syncronous api

// const fs=require('fs');
// const fs=require('node:fs');

// const data = fs.readFileSync('./Myread.txt',{encoding:'utf-8'});
// console.log(data);
// console.log(data.toString());

// const fs=require('fs')
// fs.writeFileSync('./logo.txt','10th April 2024: Day 7')


// const fs=require('fs');
// console.log('start')
// const data = fs.readFileSync('./Myread.txt',{encoding:'utf-8'});
// console.log(data);
// console.log('end');

//promises api


// const fsPromises=require('fs/promises');
// console.log('start')
// const pr = fsPromises.readFile('./Myread.txt','utf-8');
// console.log(pr)
// pr.then((res)=>{
//     console.log(res);
// })
// console.log('end')


//callback api

// const fs=require('fs')
// fs.readFile('./Myread.txt','utf-8',(err,data)=>{
//     if(err){
//         console.log('err')
//     }
//     else{
//         console.log(data)
//     }
// });

//create server
// const http=require('http');
// const app=http.createServer((req,res)=>{
//     console.log('request recieved');
//     console.log(req.url);
//     res.writeHead(200,{
//         'content-type': 'text/html',

//     })
//     res.end('<h2>hello</h2><h3>hi.........</h3');
// });
// app.listen(1400,()=>{
//     console.log('................server started..................')
// });



const http = require('http');
const fs = require('fs');

const data = fs.readFileSync('./data.json', 'utf-8');

const obj = JSON.parse(data);
const product = obj.products;

const htmlTemplete = `
<!DOCTYPE HTML>
<html lang='en'>
    <head>
        <style>
            .product-card{
                max-width: 500px;
                margin: 20px auto;
                border: 3px double brown;
                border-radius: 8px;
                padding: 16px;
            }
        </style>
    </head>
    <body>
        _Product_card_
    </body>
</html>`
const CardTemplete = `
<div class='product-card'>
    <h1>Name: _title_</h1>
    <p>Description: _info_</p>
    <p>Price: _price_</p>
    <p>Discount: _dis_</p>
    <p>Rating: _rating_</p>
</div>
`;

const allCard = product.map((elem) => {
    let newcard = CardTemplete;
    newcard = newcard.replace('_title_', elem.title);
    newcard = newcard.replace('_info_', elem.description);
    newcard = newcard.replace('_price_', elem.price);
    newcard = newcard.replace('_dis_', elem.discountPercentage);
    newcard = newcard.replace('_rating_', elem.rating);
    return newcard
});
const allCardstr = allCard.join('');
const page = htmlTemplete.replace(' _Product_card_', allCard);
const app = http.createServer((req, res) => {
    console.log('request recieved');
    console.log(req.url);
    res.writeHead(200, { 'content-type': 'text/html', })
    res.end(page);
});
app.listen(1400, () => {
    console.log('................server started..................')
});

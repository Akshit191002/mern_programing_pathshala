const fs = require("fs")
const http = require("http");
const url = require("url");
const data = fs.readFileSync("./data.json", "utf8");
const dataObj = JSON.parse(data).products;
// console.log(data);
const htmlTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
<style>
header{
    text-align: center;
    font-size: 60px;
    background-color:aqua;
    border: 2px solid black;
    border-radius:20px;
    width:70vw;
    margin:0px auto
}
body{
    background-color:yellow;
}
.p-card{
    width:350px;
    height:350px;
    border:2px solid black;
    margin:20px auto;
    padding:16px;
    border-radius:16px;
    background-color:aqua;
    color:black;
    transition:transform ease-in-out 2s;
}
.p-card:hover{
    transform: scale(1.3);

}
main{
    display:grid;
    grid-template-columns:1fr 1fr 1fr;
}

</style>
</head>
<body>
    <header >Product Details</header>
  <main>
   _Product_
  </main>
  <footer>
    <div style="text-align:center;border:2px solid black; background-color:aqua">
        <h2>Contact me:</h2>
        <h2>Developed by: Akshit Bansal</h2>
    </div>
  </footer>
</body>
</html>
`
const cardTemplate = `
<div class="p-card">
<h2 style="text-align:center">_title_</h2>
<p style="text-align:center">_description_</p>
<img src="pro-img" alt='pro-img'  style = "width:200px; height:200px;display:block;margin:0px auto"/>
<a href="more">More Info</a>
 
</div>
`
let result = [];
for (let i = 0; i < dataObj.length; i++) {
    let temp = cardTemplate;
    temp = temp.replace('_title_', dataObj[i].title);
    temp = temp.replace('_description_', dataObj[i].description);
    temp = temp.replace('pro-img', dataObj[i].images[0]);
    temp = temp.replace('more', `/products?id=${i}`);
    result.push(temp);
}

result = result.join('  ')
const page = htmlTemplate.replace('_Product_', result);


// console.log(result)
const server = http.createServer((req, res) => {
    // const {pathname,query}=url.parse(req.url,true);
    const path = url.parse(req.url, true);
    // console.log('\n',query,'\n');
    // console.log('\n',pathname,'\n');
    const pathname = path.pathname;
    const query = path.query;

    if (pathname === '/home') {
        res.end(page);
    }
    else if (pathname === '/products') {
        const id = query.id;
        const item = dataObj[id];
        // let tags_string = item.tags.join('</li>\n\t<li>');
        // tags_string = '<ul type="square">\n\t<li>' + tags_string + '</li>\n</ul>';
        res.end(`
            <div style=
            "text-align:center; 
            border: 2px solid black; 
            width:80vw; 
            margin: 0px auto; 
            border-radius: 16px;
            box-shadow:10px 10px 10px black">
            <h3>Id: ${item.id}</h3>
            <h2>Title : ${item.title}  </h2>
         <h2>Description: ${item.description}  </h2>
         <img src="${item.images[0]}"  style = "width:200px; height:200px"/>
         <p>Price :  ${item.price}  </p> 
         <p>Discount percentage : ${item.discountPercentage}  </p> 
         <p>Ratings : ${item.rating}  </p> 
         <p>Stocks : ${item.stock}  </p> 
         <p>Brand : ${item.brand}  </p> 
         <p>Category : ${item.category}  </p> 
         </div>
            `)
        // console.log(dataObj[id]); 
    }
    else {
        res.end('404 .......page not found')
    }
    // res.end(result);
})

server.listen(2000);
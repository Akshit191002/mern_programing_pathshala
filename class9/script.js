const fs = require("fs")
const http = require("http");
const url = require("url");
const data = fs.readFileSync("./data.json", "utf8");
const dataObj = JSON.parse(data).products;

const inputElement = `
<form action='/products'>
    <input type='text' name='productName' placeholder='Search..'>
    <button type='submit'>Search</button>
</form>
`
// console.log(data);

const cardTemplate = `
<div class="p-card">
<h2>_title_</h2>
<p>_description_</p>
<img src="pro-img" alt='pro-img'  style = "width:200px; height:200px;"/>
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
// const page = htmlTemplate.replace('_Product_', result);


// console.log(result)
const server = http.createServer((req, res) => {
    res.writeHead(200,{
        'content-type':'text/html',
    });
    // const {pathname,query}=url.parse(req.url,true);
    const path = url.parse(req.url, true);
    // console.log('\n',query,'\n');
    // console.log('\n',pathname,'\n');
    const pathname = path.pathname;
    const query = path.query;

    if (pathname === '/home') {
        res.end(inputElement+result);
    }
    else if (pathname === '/products') {
        const id = query.id;
        const item = dataObj[id];
        const pName=query.productName;
        if(pName){
            // res.end(pName);
            const SearchName=dataObj.filter((elem)=>{
                if(elem.title.includes(pName)){
                    return true;
                }
                else{
                    return false;
                }
            })
            // res.end(JSON.stringify(SearchName));
            res.end(`
                <div >
                <h3>Id: ${SearchName.id}</h3>
                <h2>Title : ${SearchName.title}  </h2>
             <h2>Description: ${SearchName.description}  </h2>
             
             <p>Price :  ${SearchName.price}  </p> 
             <p>Discount percentage : ${SearchName.discountPercentage}  </p> 
             <p>Ratings : ${SearchName.rating}  </p> 
             <p>Stocks : ${SearchName.stock}  </p> 
             <p>Brand : ${SearchName.brand}  </p> 
             <p>Category : ${SearchName.category}  </p> 
             </div>
                `);
        }
        else{
            res.end('<h3>Error...</h3>')
        }
        // let tags_string = item.tags.join('</li>\n\t<li>');
        // tags_string = '<ul type="square">\n\t<li>' + tags_string + '</li>\n</ul>';
        // res.end(`
        //     <div >
        //     <h3>Id: ${item.id}</h3>
        //     <h2>Title : ${item.title}  </h2>
        //  <h2>Description: ${item.description}  </h2>
        //  <img src="${item.images[0]}"  style = "width:200px; height:200px"/>
        //  <p>Price :  ${item.price}  </p> 
        //  <p>Discount percentage : ${item.discountPercentage}  </p> 
        //  <p>Ratings : ${item.rating}  </p> 
        //  <p>Stocks : ${item.stock}  </p> 
        //  <p>Brand : ${item.brand}  </p> 
        //  <p>Category : ${item.category}  </p> 
        //  </div>
        //     `)
        // console.log(dataObj[id]); 
    }
    else {
        res.end('404 .......page not found')
    }
    // res.end(result);
})

server.listen(2002);
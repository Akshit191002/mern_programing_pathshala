const fsPromise=require('fs/promises')
const getAllProduct = (req, res) => {
    console.log(req.url)
    res.send({
        status:'success',
        results:0,
        data:{
            products:[],
        }
    })
}
// const addProduct=async (req, res) => {
//     const data = req.body;
//     const db = await fsPromise.readFile('./data.json', 'utf-8')
//     const arr = JSON.parse(db)
//     const len = arr.length;
//     const newProduct = data;
//     if (len == 0) {
//         newProduct.id = 1;
//     }
//     else {
//         const newProduct = data;
//         newProduct.id = (arr[len - 1].id) + 1;
//     }
//     arr.push(newProduct)
//     fsPromise.writeFile('./data.json', JSON.stringify(arr));
//     res.json({
//         status: 'success',
//         result: 1,
//         data: {
//             newProduct: newProduct,
//         }
//     })
// }
module.exports={
    getAllProduct,

}
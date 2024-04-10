// let arr = [2, 10, 21, 32];

// function printPretty(elem){
//     console.log(': ',elem);
// }
// function printArray(arr) {
//     // for(let i=0;i<arr.length;i++)
//     // {
//     //     console.log(arr[i]);
//     //     // printPretty(arr[i]);
//     // }
//     // arr.forEach(function printPretty(elem){
//     //     console.log(': ',elem);
//     // });
//     // arr.forEach(printPretty);

//     // arr.forEach((elem)=>{
//     //     console.log(': ',elem);
//     // });

//     // arr.forEach((a,b,c)=>{
//     //     console.log(': ',a,b,c);
//     // });
//     arr.map((a, b, c) => {
//         console.log(': ', a, b, c);
//     });
// }
// printArray(arr);
// console.log('start')
function printPretty(){
    const sel=document.getElementById('hello-container')
    const para = document.createElement("p");
    para.innerText='Hello.. ,I am Akshit Bansal';
    sel.append(para)
}
// setTimeout(printPretty,10000);
let abs;
function myStart(){
    abs=setInterval(printPretty, 500);
}
function myStop(){
    clearInterval(abs);
}

console.log('start');
// promise pdhna hai tere ko 
const req =fetch('https://dummyjson.com/products/1')
const res=req.then(res => res.json())
res.then((data)=>console.log(data))
// .then(json => console.log(json))

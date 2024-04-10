// console.log('start');
// setTimeout(()=>(console.log('time...')))
// console.log('end');

// setTimeout(()=>{console.log('time.1..')},0)
// console.log('start');
// setTimeout(()=>{console.log('time.2..')},0)
// console.log('imm');
// console.log('end');

// function createorder(x,fn){
//     console.log(x);
//     setTimeout(()=>{fn('123')},1000);
//     setTimeout(()=>{fn('123')},1000);
// }
// function make(orderId){
//     console.log(orderId)
// }
// createorder('soap',make)

// const pr=new Promise((resolve,reject)=>{
//     if(true){
//         // resolve();
//         setTimeout(()=>{
//             resolve();
//         },(Math.random()%10)*10000);
//     }
//     else{
//         reject();
//     }
// });
// console.log(pr);


// const pr = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject('done');
//     }, 0);
// });

// setTimeout(() => {
//     console.log('not done');
// }, 0);
// // console.log(pr)

// pr.then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// })


setTimeout(function abc(){
    console.log('i m one');
},0);
const pr=new Promise((res,req)=>{
    setTimeout(()=>{res('done')},0);
})

pr.then(function b(res){
    console.log('promise complete',res)
});
setTimeout(function xyz(){
    console.log('i m two')
},0)
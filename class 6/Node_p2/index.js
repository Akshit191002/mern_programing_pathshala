// // const figlet=require("figlet");
// // figlet("hello world",(err,data)=>{console.log(data)})

// // old method......
// fetch('https://api.github.com/users/deepak3440')
// .then((res)=>{
//     return res.json();
// })
// .then((data)=>{
//     console.log(data)
// })
// .catch((err)=>{
//     console.log('Error Detect')
// })
// console.log('end')


//asunc await '

// console.log('start')
// async function getAPI(){
//     console.log('API Calling')
//     const pr=await fetch('https://api.github.com/users/deepak3440');
//     // console.log(pr);\
//     console.log('API Fetched')
//     const data=await pr.json()
//     console.log('data')
// }
// getAPI();
// console.log('end')


console.log('start')
async function callAPI(){
  const pr=new Promise((res,req)=>{
    console.log('promise 1....')
    setTimeout(()=>{
      console.log('timeour 1....')
    },10000)
  })
  console.log('promise 1 complete')
  
//   const pr2=new Promise((res,req)=>{
//     console.log('promise 2....')
//     setTimeout(()=>{
//       console.log('timeour 2..')
//     },10000)
//   })
//   console.log('promise 2 complete')
}
callAPI()
console.log('END')
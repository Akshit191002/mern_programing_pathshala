// console.log('hello')

// const arr=[10,20,30,40];

// const ans = arr.forEach((a)=>{
//     console.log(a)
//     return a;
// });

// const ans1 = arr.map(a=>a*2);
// console.log(ans);
// console.log(ans1);

// const arr=[10,20,30]
// const ans=arr.push(40);
// const arr2=arr.map((a)=>a*2);
// console.log(arr)
// console.log(ans)
// console.log(arr2)


// const arr=[10,20,30]

// const ans=arr.filter((a)=>{
//     if(a>10)return true;
//     else return false;
// })
// console.log(ans);
// console.log(arr);

// const arr = ['delhi,india', 'mumbai,india', 'kolkata,india', 'pune,india', 'ukrain,russia', 'whasington,USA', 'texas,USA']

// let char = prompt('pls enter the char')
// const ans = arr.filter((a) => {
//     const ns=a.toLowerCase();
//     if (ns.includes(char)) return true;
//     else return false;
// })
// console.log(ans);
// // console.log(arr);

// reduce


const arr = [10, 20, 30, 40]
const ans = arr.reduce((a, b, c, d) => {
    console.log(a , b , c , d)
    return a+b
})

console.log(ans)
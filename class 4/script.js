// const obj={
//     "name": "akshit",
//     "last": "bansal"
// }
// console.log(obj);
// // document.write(obj.name);
// // document.write(obj.last);
// document.write(JSON.stringify(obj));

// const obj1={
//     "name" : "akshit",
//     "last" : "bansal",
// }
// obj1.last=21;
// console.log(obj1);

// let arr=[];
// console.log(arr);

// let arr1=[1,2,3];
// console.log(arr1);

// let arr2=[];
// arr2=[5,6,7];
// console.log(arr2);

// let arr3=[5,6,7];
// arr3[1]=50;
// console.log(arr3);

// let arr4=[5,6,7];
// arr4.push(50);
// console.log(arr4);
// console.log(typeof(arr4));
// console.log(Array.isArray(arr4));
// console.log(Array.isArray(obj1));

// let arr={
//     'name':'ram'
// };
// function check(arr){
//     if(Array.isArray(arr)){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(check(arr));
// document.write(check(arr));


const arr=['name',2];
const obj={
    'name':'ram',
    age: 21
}
// for(let i=0;i<2;i++)
// {
//     console.log(i)
// }
// for(let i=0;i<2;i++)
// {
//     console.log(arr[i])
// }
// for(let i=0;i<2;i++)
// {
//     console.log(obj[i])
// }
// for(let i of arr){
//     console.log(i)
// }
// for(let i of obj){
//     console.log(i)
// }
// for(let i in arr){
//     console.log(arr[i])
// }
// for(let i in obj){
//     console.log(obj[i])
// }

// for(let i in arr){
//     console.log(arr[i])
// }
// for(let i in obj){
//     console.log(obj[i])
// }

// console.log(window.document)
// console.log(window)
// console.dir(window.document)
// console.dir(window)

// const res= document.getElementsByTagName('h1')
// console.log(res)

// const res= document.getElementById('parent')
// console.log(res)

// const res= document.querySelectorAll('div>h1')
// console.log(res)

// const res=document.getElementsByTagName('h1')
// // res[0].innerHTML("hello");
// res[0].setAttribute('id' ,'child')
// console.log(res)

// const ne= document.createElement("h3")
// ne.innerText="text";
// // console.log(ne);
// const firstdiv=document.getElementsByClassName('first')
// firstdiv[0].appendChild(ne)
// // document.body.appendChild(ne)

// const div=
// document.querySelector('div')
// console.log(div)
// const res=
// document.querySelector('div')
// res.remove()
// console.log(res)

// const res=
// document.querySelector('div');
// const c=
// document.querySelector('p:nth-of-type(2)');
// res.removeChild(c);


// Event

// function getInfo()
// {
//     const d=
//     document.querySelector('div')
//     const el=
//     document.createElement('p')
//     el.innerText='My name is Akshit'
//     d.append(el)
// }
function getInfo(e)
{
    console.log(e);
    e.target.style.margin='50px'
    // e.target.style.backgroundColor ='green'
    // e.target.setAttribute('style' , 'background-color:green')
    // const ne=
    // document.querySelector('body')
    // ne.setAttribute('style' ,'background-color:aqua')
}
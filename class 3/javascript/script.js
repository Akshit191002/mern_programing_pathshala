
// function fun(){
//     console.log(message);
//     var message='hello';
//     console.log(message);
//     message='world';
//     console.log(message);
// }
// fun();


// function loop(){
//     for(var i=0;i<5;i++)
//     {
//         console.log(i);
//     }
//     console.log(i);
// }
// loop();


// // console.log(msg);
// let msg='hello';
// console.log(msg);
// msg='world';


// function loop2(){
//     for(let i=0;i<5;i++)
//     {
//         console.log(i);
//     }
//     // console.log(i);w
// }
// loop2();

// const msg1='helo';
// console.log(msg1);

// var asg=5;
// let asg1=10;
// const ags2=5;

// let age = 'abcd';

// age = 'abbd';
// console.log(typeof(age));
// console.log(age);

// let arr=['a','b','c'];
// arr[0]='abcd';
// console.log(arr);

// let str='12';
// let age=20;
// // let ans=age+ +str;
// // let ans=age - (-str);
// let ans=age + (str*1);

// console.log(ans);


// let str='12.12';
// let p=parseInt(str);
// let q=Number(str);
// console.log(p,q);


// let str='12a';
// let p=parseInt(str);
// let q=Number(str);
// console.log(p,q);

// let a='12';
// let b=12;
// if(a==b) // value check
// {
//     console.log('yes');
// }
// else{
//     console.log('no');
// }
// if(a===b) //datatype and value check
// {
//     console.log('yes again');
// }
// else{
//     console.log('no again');
// }


// let a=['a','b','c','d'];
// let b=[...a];
// // let b=c;

// if(a==b)
//  //value check
// {
//     console.log('yes');
// }
// else{
//     console.log('no');
// }
// if(a===b) //datatype and value check
// {
//     console.log('yes again');
// }
// else{
//     console.log('no again');
// }


// let a=['a','b','c','d'];
// let b=a;

// if(a!=b)
// {
//     console.log('yes');
// }
// else{
//     console.log('no');
// }
// if(a!==b)
// {
//     console.log('yes again');
// }
// else{
//     console.log('no again');
// }

// const str='akshit';
// const uname=`my name is  ${str}`;
// console.log(uname);
// const ans=`${uname} ${str}`;
// console.log(ans);

// function fun(str){
//     console.log(str);
// }
// let s='hello';
// fun(s);
// fun();//undefine 

// function sum(a, b)
// {
//     if(a && b){
//         console.log(a+b);
//     }
//     else if(a){
//         console.log(a);
//     }
//     else
//     {
//         console.log(0);
//     }

// }
// sum();
// sum(20);
// sum(20,40);

// function declafrtion
// print();
// // a(); error before intializing 
// function print(){
//     console.log('--');
// }
// // function assignment (named)
// const a=function print(){
//     console.log('--');
// }

// // function assignment (anonymous)
// const b=function (){
//     console.log('--');
// }
// // arrow function assignment 
// const c=()=>{
//     console.log('--');
// }

// print();
// a();
// b();
// c();

//how many ways to written arror function


// let a=2;
// switch(a){
//     case 1:{
//         console.log('one');
//         break;
//     }
//     case 2:{
//         console.log('two');
//         break;
//     }
//     case 3:{
//         console.log('three');
//         break;
//     }
//     default:{
//         console.log('--');
//     }
// }


// const obj = new Object();
// obj[1] = 'one';
// obj[2] = 'two';
// obj[3] = 'three';
// obj[4] = 'four';
// obj[5] = 'five';
// console.log(obj);


const obj={
    'first':'Akshit',
    'second':'Bansal',
}
const x=prompt('please tell the propert to know');
// console.log(obj[x]);
alert(obj[x]);
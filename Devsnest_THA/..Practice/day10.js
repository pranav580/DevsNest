// function sum(a,b){
//     // console.log(a+b);
//     return a+b;
// }
// console.log(sum(1,2));

// const sum = function sunofTtwoNumbers(a,b){
//     return a+b;
// }
// console.log(sum(1,2));

// var sum = (a,b) => console.log("I am arrow function",a+b);
// console.log(sum(1,2));


// function way1(){
//     console.log(this ,'ok');
// }
// const way2 = () =>{
//     console.log(this,'ok');
// }
// const obj = {
//     mymethod: function(){
//         console.log(this,'ok');
//     }
// }
// way1();
// way2();
// obj.mymethod();

// function outer(a, callback){
//     const c = callback();
//     return a+c;
// }
// function inner(){
//     const b = 30;
//     return b;
// }
// console.log(outer(20,inner));


setTimeout(() => console.log('I am in setTimeOut'),3000);
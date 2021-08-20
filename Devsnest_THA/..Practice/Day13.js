// var promise =  new Promise((resolve, reject) => {
//     let a=1+1;
//     if(a==3){
//         resolve("Success");
//     }else{
//         reject("Failed");
//     }
// });
// // console.log(promise);
// promise.then((data)=>{
//     // console.log("Promise was resolved");
//     console.log(data);
// })
// .catch((error)=>{
//     // console.log("Promise was Rejected");
//     console.log(error);
// })

// async function hello(){
//     const res = await fetch('https://api.github.com/users/pranav580');
//     console.log(res);
// }
// var a = hello();

const btn = document.querySelector('button');
async function getData(username){
    const res = await fetch(`https://api.github.com/users/${username}`)
    const data = await res.json()
    return data;
}
btn.addEventListener('click',async () => {
    let response = getData("pranav580");
    let user = await response;
    console.log(user.name);
})
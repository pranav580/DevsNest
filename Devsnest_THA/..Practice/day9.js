// var a=10;
// function ab(){
//     var b=90;
// }
// console.log(window);

// const server = {
//     Name:"Devsnest",
//     getInvite: function(){
//         console.log("discord.gg/"+this.Name);
//     } 
// }
// server.getInvite();
// console.log(server);

// var a=10;
// function ab(){
//     var a=20;
//     console.log(a);
//     console.log(this.a);
// }
// ab();

// const server = {
//     serverName: "Devsnest",
//     getInvite: function(a,b){
//         console.log(this);
//         console.log(a+b);
//     }
// }
// const server2={
//     serverName:"TheDevloperCommunity",
// }
// server.getInvite();
// server.getInvite.call(server2,1,2); // parameter without list
// server.getInvite.apply(server2,[1,2]); //parameter in array


// const ab =server.getInvite.bind(server2,1,2);
// ab();


// var a= [1,2,3];
// var b=a;
// var c=[...a];
// b.push(10);
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(...a);

const arr1=[1,2,3,4]
const arr2=[4,3,2,1]
console.log([...arr1,...arr2]);

const server = {
    serverName: "Devsnest",
    memberCount:4000
}
console.log({...server,memberCount:45000});
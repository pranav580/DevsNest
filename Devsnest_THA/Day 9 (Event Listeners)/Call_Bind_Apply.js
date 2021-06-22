
const server = {
    serverName: "Devsnest",
    getInvite: function(a,b){
        console.log(this);
        console.log(a+b);
    }
}
const server2={
    serverName:"TheDevloperCommunity",
}
server.getInvite();
server.getInvite.call(server2,1,2); // parameter without list
server.getInvite.apply(server2,[1,2]); //parameter in array

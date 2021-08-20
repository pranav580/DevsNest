// const obj1={name:'Pranav'}

// obj2= Object.create(obj1);

// // obj2.name='anothername';

// console.log(obj2.name);
// console.log(obj1);

var car={
    name:'lambo',
    get getcarPrice(){
        console.log("Price is 2 Crores");
    },
    set setCarName(carname){
        this.name = carname;
    },
    drive: function(item){
        console.log("I will drive my ",this.name,item);
    }
}
// console.log(car.getcarPrice);
// car.setCarName = 'Porsche';
// car.drive();
 
// console.log(car);

function Person(first,last,age,eye){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

const myFather = new Person("John","Shelby",28,"blue");
const myMother = new Person("Jasmin","Bros",35,"black");

// console.log(myFather);
// console.log(myMother);

// spread Operator

// const obj1 = {name:"Kiran"};
// // const obj2 = {};
// // Object.assign(obj2,obj1); //old 
// const obj2 = {...obj1} //for coping array too
// console.log(obj2);

// function sumofAllArray(a,b,c, ...d){
//     console.log(c);
//     return a+b+c;
// }
// console.log(sumofAllArray(1,2,3,4,5,6,7,8,9));

// function somefunction(a,b,c){
//     console.log(arguments); // argumants act as an object
// }
// somefunction(10,20,30);

function sum(a,b,...c){
    const reduceFn = c.reduce((acc,item)=>{
        acc=acc+item;
        return acc;
    },0);
    return a+b+reduceFn;
}
console.log(sum(1,2,3,4,5,6,1000,2000));
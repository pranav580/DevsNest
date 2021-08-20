const person = {
    firstName: 'Pranav',
    lastName: 'Bhangale',
    gender: 'Male',
    city: 'Jabalpur',
    country: 'India',
    working:{organisation:'Devsnest',BasedIn:'Bangalore'},
    talk: function(){
        console.log('I am speaking in Javascript class');
    },
    walk: function(){
        console.log('I love walking around parks and at around peaceful areas');
    },
    teach: function(){
        console.log('I can teach frontend concepts vey well');
    }
}

// console.log(person);
// console.log(person.firstName);

// const person1 = new Object({name:'John',isStudying:'true'});
// console.log(person1);

// const person2 = Object.create({gender:'Male'});
// console.log(person2.gender);

// const anotherPerson = person;
// anotherPerson.firstName = 'John';
// console.log(anotherPerson);
// console.log(person);

// for (let item in person){
//     console.log(item,'--',person[item]);
// }

// console.log(person.working.organisation);
// console.log(person['working']['organisation']);

// console.log(Object.keys(person));
// console.log(Object.values(person));

// Object.freeze(person);
// person.city='Jabalpur';
// console.log(person.city);

// console.log(Object.getOwnPropertyNames(person));
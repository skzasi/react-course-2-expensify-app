//object Desctructuring

// const person = {
//     name: 'zaid',
//     age: 28,
//     location: {
//         city: 'Mumbai',
//         temp: 89
//     }
// }

// const { name = 'Anonymous', age} = person;

// console.log(name);
// console.log(age);

// const { city, temp: temperature} = person.location;

// console.log(city);
// console.log(temperature);

//Array Desctructuring

const address = ['1 Zaid Street', 'Mumbai', 'Maharashtra', '401921'];

const [street, city, state = 'Kerala', zip] = address;

console.log(street);
console.log(city);
console.log(state);
console.log(zip);


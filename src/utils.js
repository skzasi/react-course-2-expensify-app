console.log('util is running!!');

const square = x =>  x * x;
const add = (y, z) => y + z;
const subtract = (a, b) => a - b; 

export { square, add, subtract as default };

// There are two type of exports - default exports and named exports
// you can have 0 or 1 default exports, no more tha 1 default exports is possible
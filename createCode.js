// Object.is():- method of JavaScript is used to determine whether two values are the same value. There is a special built-in method that compares values.

// Object.is(value1, value2); 

console.log(Object.is(5, 5)); // Output: true
console.log(Object.is('hello', 'hello')); // Output: true

console.log(Object.is(0, -0)); // Output: false
console.log(Object.is(NaN, NaN)); // Output: true

console.log(Object.is({}, {})); // Output: false (different object references)
console.log(Object.is([], [])); // Output: false (different object references)

const obj = {};
console.log(Object.is(obj, obj)); // Output: true (same object reference)

// Array :- It is collection more the single value inside an variable
// from() :- create the new array which hold the shallow copy of the (it will change the original array because shallow copy shares the same reference)

// Array.from(object,map_fun,thisArg);
// object: It is the name of the array-like or iterable object on which from() method will be applied.
// map_fun: It is an optional parameter used for calling the elements of the array via map() function.
// thisArg: An optional parameter whose value is used as 'this' when we execute the map_fun


const arr=Array.from({length:5},(_,index) =>index+1);
console.log(arr);
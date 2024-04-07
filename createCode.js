// Array :- It is collection more the single value inside an variable
// findIndex():- Return the index of first element that satify the condition if element is not present it will return -1

// Array.findIndex(callback(value.index,arr),thisArg)


const arr1=[1,2,3,4,1,4,3];
const val = arr1.findIndex(4);//this is not posible because it always expects the callback function

console.log(val);
console.log(arr1.findIndex(1));//this is not posible because it always expects the callback function
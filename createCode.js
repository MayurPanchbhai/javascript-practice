// Array :- It is collection more the single value inside an variable
// filter(): extract the element from array which is satisfy the condition

// array.filter(callback(currentvalue,index,arr),thisArg)  

// callback - It represents the function that test the condition.
// currentvalue - The current element of array.
// index - It is optional. The index of current element.
// arr - It is optional. The array on which filter() operated.
// thisArg - It is optional. The value to use as this while executing callback.

const arr1=[1,2,3,4,5,6,7,8]

const arr2=arr1.filter(function(value){
    return value<5
});
console.log(arr1);
console.log(arr2);
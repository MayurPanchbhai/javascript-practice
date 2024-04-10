// Array :- It is collection more the single value inside an variable
// forEach() : This method invoke the function for each element of array

// Array.forEach(callback(value,index,arr),thisArg)


const arr1=[1,2,3,4,5];

const arr2=arr1.forEach(function (value){// foreach does not return a new array 
    return value*2;
})

console.log(arr1);
console.log(arr2);//this is will give the undefined output
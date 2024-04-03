// Array :- It is collection more the single value inside an variable
// fill():- fills  elements of the given array with the specified static values.

// arr.fill(value,start, end) 
// value - The static value to be filled.
// start - It is optional. It represents the index from where the value starts filling. By default, it is 0.
// end - It is optional. It represents the index where the value stops filling. By default, it is length-1.

const arr1=[1,2,3,4,5];

const arr1Copy = arr1.fill("m",1,4)//it will fill the "m" from start index to end index

console.log(arr1);// and this method modify the original array
console.log(arr1Copy);

// Array :- It is collection more the single value inside an variable
// keys(): This method creates and returns a new iterator object which holds the key for every index in the array. This method does not affect the original array.


const arr1=[1,2,3,"m",89];
let r =arr1.keys();

for(let key of r){
    console.log(key);
    // console.log(arr1[key]);
};

for(let key of r){//this loop is not executing
    console.log(arr1[key]);
};
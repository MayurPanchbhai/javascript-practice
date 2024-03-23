// Array are used to store multiple values inside a single variable

// There are 3 ways to construct array in JavaScript

// 1) JavaScript array literal
const arr1 = [1,2,"e30 m5","787b"];
console.log(arr1);

// 2) JavaScript Array directly (new keyword)
const arr2 = new Array();
arr2[0] = 3;
arr2[1] = "hello";
arr2[2] = 65;
arr2[3] = 'n';
console.log(arr2);



// 3) JavaScript array constructor (new keyword)
const arr3 = new Array("I" , "want" , "rs200")

for(let i=0 ; i<arr3.length ; i++){
    console.log(arr3[i]);
}
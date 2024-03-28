// Array :- It is collection more the single value inside an variable
// concat :- It return a new array by merging two or more than two arrays.

// e.g. let try to concat an array along with element directly if it is possible
const lang1 = ["python","java"];
const lang2 = ["script" , "tailwind"]


const output =lang1.concat(lang2 ,"adding element","Github" ,8);

console.log(output);//It only create new array and not change the original arrays
console.log(lang1);//not change like me
console.log(lang2);
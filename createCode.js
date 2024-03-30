// Array :- It is collection more the single value inside an variable
// every() : this method check the condition and return the boolean value if it is satisfy the condition 
//array.every(callback(currentvalue,index,arr),thisArg)  

const arr=[22,3,44,7,58,8]

function test(element, index, array) {  
    return index < 4;  
  }  
console.log([21,32,2,43].every(test)); //true  
console.log([21,32,2,43,35].every(test)); //false  
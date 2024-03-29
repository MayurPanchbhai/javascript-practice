// Array :- It is collection more the single value inside an variable
// copywithin -It copies the element from the own array and return to new array

// array.copyWithin(target, start, end)
// target - position where the copied element take place
// Start :- from which index it is gonna start the copying
//  end : before the specified index


var arr=["AngularJS","Node.js","JQuery","Bootstrap" , 89]  
// place from 0th position, the elements between 1st and 3rd position.  
var result=arr.copyWithin(0,1,3);  //here the replacement not happen till the thired index it will end before it 
//and also will keep repeating the second last index until it reaches the final array length
console.log(result); 
console.log(arr); 
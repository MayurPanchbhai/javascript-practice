// Array :- It is collection more the single value inside an variable
// copywithin -It copies the element from the own array and return to new array

// array.copyWithin(target, start, end)
// target - position where the copied element take place
// Start :- from which index it is gonna start the copying
//  end : till the specified index


var arr=["AngularJS","Node.js","JQuery","Bootstrap"]  
// place at 0th position, the element between 1st and 2nd position.  
console.log(arr);
var result=arr.copyWithin(0,1,2);  //if we given the target as 2/3 it will not replace the element before the indexcing 
console.log(result); //And this methos change the original array also 
console.log(arr); 

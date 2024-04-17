// values:- this method creates a new array iterator object that carries the values specified at each array index. We can iterate the array elements via loops or iterator methods.


const arr=["v","a","l","u","e","s"];
console.log(arr);

let val=arr.values();

console.log(val);

for (let x of val){
    console.log(x);
}
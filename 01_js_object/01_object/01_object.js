// object :- It is collection of the key and value pairs 

// methods of creating the objects


// 1)JavaScript Object by object literal
let obj={name:"mayur",surname:"panchbhai",key:"value"};
console.log(obj);


// 2) By creating instance of Object
// Here, new keyword is used to create object.
var obj1= new Object();
// adding the key and value pairs
obj1.name="Mayur"
obj1.surname="Panchbhai"
console.log(obj1);

// 3)By using an Object constructor
function fun(id,name,salary){  
    this.id=id;  
    this.name=name;  
    this.salary=salary;  
}  
let obj2=new fun(103,"Vimal Jaiswal",30000);  
console.log(obj2.id , obj2.name , obj2.salary);
console.log(obj2);
// Object :- A javaScript object is an entity having state and behavior.

// By using an Object constructor

function emp(id,name,salary){  
    this.id=id;  
    this.name=name;  
    this.salary=salary;  
      
    this.changeSalary=changeSalary;  
    function changeSalary(otherSalary){  
    this.salary=otherSalary;  
    }  
}  
e=new emp("what number comes after 4","beetlejuice",35);  
console.log(e.id+" "+e.name+" "+e.salary);  
e.changeSalary(45);  
console.log(e.id+" "+e.name+" "+e.salary);  

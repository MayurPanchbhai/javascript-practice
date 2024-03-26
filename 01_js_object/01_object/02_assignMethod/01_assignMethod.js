// The Object.assign() method is used to copy the values of all enumerable own properties from one or more source objects to a target object. Objects are assigned and copied by reference. It will return the target object.

// syntax
// Object.assign(target, sources)
// Object.assign(target, source1, source2) --for multiple object to the one object
// target: The target object. Where it get stored.
// sources: The source object(s). Take the reference.

const obj1={
    a:1,
    b:2,
    c:3
};

const obj2={
    g:1,
    h:2
}
console.log(obj1);
console.log(obj2);

Object.assign(obj2,obj1);

console.log(obj1);
console.log(obj2);


// Copy by reference:- New object in which we assign the old object , now if we changes the value in the new object it will also changes the Old/Main object

const oldObj = {2:"1", 5:"2"};


const newObj = oldObj;

console.log(oldObj);
console.log(newObj);

newObj[5]="changed value";
console.log(oldObj);
console.log(newObj);
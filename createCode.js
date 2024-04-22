// freeze(): freeze the object that prevent new prperty being add to it.

// Object.freeze(object)

const obj1={
    name:"Maximus"
}

const obj2 = Object.freeze(obj1);

obj2.Fuel2="98octane";//new property can't be added here

obj1.Fuel2="98octane";

console.log(obj2);
console.log(obj1);



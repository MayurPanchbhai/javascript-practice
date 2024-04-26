// Object.isExtensible(obj):- check wheather we can add new proprty or not 
const obj1={
    "name":"mayur"
}

console.log(Object.isExtensible(obj1));


Object.preventExtensions(obj1);

console.log(Object.isExtensible(obj1));
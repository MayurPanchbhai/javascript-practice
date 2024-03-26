// Object.create(prototype,propertiesObject) method

let obj = {
    name:"the dude"
}

let obj2=Object.create(obj,{});

console.log(obj2);
console.log(obj2.name);


let obj3 =Object.create(obj2,{
    fullname:{
        configurable:true,
        writable:true,
        enumerable:true,
        value:"Mayur Panchbhai"
    },

    canBowl:{
        configurable:true,
        writable:true,
        enumerable:true,
        value:true
    }
})

console.log(obj3)
console.log(obj3.name)//this is still access the parent data
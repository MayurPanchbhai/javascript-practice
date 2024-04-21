// defineProperty(): used to define the that can't be changed 

// Object.defineProperty(objName, PropertyName, value)
const obj={
    name:"Mayur"
}

Object.defineProperty(obj , "ID" ,{
    value:"panchbhaimayur",
    writable:true
}
);

console.log(obj.ID)
obj.ID="PanchbhaiGaurav";
console.log(obj.ID);
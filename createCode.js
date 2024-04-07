// Array :- It is collection more the single value inside an variable
// find():-This method return the first element that satisfy coondition

// Array.find(callback(,valueindex,arr,),ThisArg)


const arr1=[1,2,3,4,5,3,2];

const result =arr1.find(val)


function val(element){
    return element>2;
}
console.log(result);
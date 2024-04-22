// Object.getOwnPropertyDescriptors():_ This method returns all own property descriptors of a given object. The difference between getOwnPropertyDescriptors() and getOwnPropertyDescriptor() method is that getOwnPropertyDescriptors() method ignores symbolic properties.


// Object.getOwnPropertyDescriptors(obj)  

const object1 = {  
    property1: 103  
};  
    
  const descriptors1 = Object.getOwnPropertyDescriptors(object1);  
  console.log(descriptors1.property1.writable);  
  console.log(descriptors1.property1.value);  
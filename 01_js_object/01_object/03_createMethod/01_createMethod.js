// The Object.create() method is used to create a new object with the specified prototype object and properties. We can create an object without a prototype by Object.creates (null). [this is the oops concept]


// parent 
const people = {  
    printIntroduction: function ()  
     {  
      console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);  
    }  
  };  


const me = Object.create(people);  //child
me.name = "Cherry"; // "name" is a property set on "me", but not on "person"  
me.isHuman = true; // inherited properties can be overwritten  
me.printIntroduction();  
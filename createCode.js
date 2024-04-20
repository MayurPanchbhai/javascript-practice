// create() :-used to create new object from specified prototype of the object 

// Object.create(prototype[propertiesObject])

const man ={
    printIntro:function (){
        console.log(`My name is ${this.name} . Am I machine? ${this.isMachine}`);
    }
}

const me = Object.create(man);
me.name="Gaurav";//name is property of the "me" but not on "person"
me.isMachine ="May Be"//inherited property can be over written

me.printIntro();
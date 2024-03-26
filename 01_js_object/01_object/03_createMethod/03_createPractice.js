let laptop={
    cpu:"i5",
    ram:8,
    brand:"Dell",
    greet: function (){
        console.log("hello ");
    }
}

// greet();//this will give error beacuse it is inside a object
laptop.greet();
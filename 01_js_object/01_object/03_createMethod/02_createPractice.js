// example for practice
const Nagpur={
    print:function (){
        console.log(`${this.location} is on the ${this.direction} of the Nagpur`);
    }
}


const Bardi = Object.create(Nagpur);

Bardi.location="bardi";
Bardi.direction="South";


Bardi.print();
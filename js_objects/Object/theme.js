// changing the theme dark and white
let Theme = document.getElementById("Bg");
let bd = document.querySelector("body");
let counter = 0;
let ed = document.getElementById("editor");
let TT = document.getElementById("themeText");
let heading = document.querySelector("h1");

Theme.addEventListener('click',() =>{
    // console.log("clciked")
    // body.classList.add='dark';
    if(counter%2==0){
        bd.style.backgroundColor="black";
        bd.style.color="white";
        // console.log(counter);
        TT.innerText="White";
        Theme.style.borderColor="white";
        heading.forEach(h1 => {
            heading.style.color="white";
        });
        

        counter++;
    }
    else{
        bd.style.backgroundColor="white";
        bd.style.color="black";
        TT.innerText="Black"
        Theme.style.borderColor="black";

        counter++;
        
        console.log(counter);
    }
    console.log(counter)
})
// changing the theme dark and white
let Theme = document.getElementById("Bg");
let bd = document.querySelector("body");
let counter = 0;
let ed = document.getElementById("editor");
let TT = document.getElementById("themeText");
let headings = document.querySelectorAll("h1"); // Select all h1 elements

Theme.addEventListener('click',() =>{

    

    // console.log("clciked")
    // body.classList.add='dark';
    if(counter%2==0){
        bd.style.backgroundColor="black";
        bd.style.color="white";
        // console.log(counter);
        TT.innerText="White";
        Theme.style.borderColor="white";
        


        headings.forEach(h1 => { // Loop through all h1 elements and change color
            h1.style.color = "white";
        });
        

        counter++;
    }
    else{
        bd.style.backgroundColor="white";
        bd.style.color="black";
        TT.innerText="Black"
        Theme.style.borderColor="black";

        headings.forEach(h1 => { // Loop through all h1 elements and change color
            h1.style.color = "black";
        });

        counter++;
        
        console.log(counter);
    }
    console.log(counter)
})
let universalThemeNumber=0;


let T1=document.getElementById("theme1")
let T2=document.getElementById("theme2");


// variables for all sections 
let Sec=document.querySelectorAll("section")


function white(){
    if(universalThemeNumber%2 != 0){


        T2.classList.remove("active");
        T1.classList.add("active");


        // adding all the color
        document.body.style.backgroundColor = "white";
        document.querySelectorAll('h1').forEach(h1 => {
            h1.style.color="black";
        });

        universalThemeNumber++;
    }
    console.log(universalThemeNumber);
}


function dark(){
    if(universalThemeNumber%2 == 0){
        T1.classList.remove("active");
        T2.classList.add("active");
        

        // adding color for dark theme
        document.body.style.backgroundColor = "black";
        document.querySelectorAll('h1').forEach(h1 => {
            h1.style.color="white";
        });


        universalThemeNumber++;
    }
    

    console.log(universalThemeNumber);
}
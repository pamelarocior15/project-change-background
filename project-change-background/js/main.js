function changeBackground() {

     const symbols="0123456789ABCDEF";
     let color= "#";

     for (let i=0; i<6; i++){

     color= color+symbols[Math.floor(Math.random()*16)];

     }
     
     document.body.style.background = color;
     document.querySelector("span").innerHTML= color;

    }

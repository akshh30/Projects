let inc=document.getElementById("incBtn");
let count=0;
let numEl= document.getElementById("num");

function onInc(){

    inc.style.backgroundColor="grey";
    dec.style.backgroundColor="red";
    
   
  
  count=count+1;

        
  numEl.textContent=count;
  numEl.style.color="green";
        
   
  

}

let dec=document.getElementById("decBtn");

function onDec(){
    dec.style.backgroundColor="grey";
    inc.style.backgroundColor="green";

    
    count=count-1;
  
    numEl.textContent=count;
    numEl.style.color="red";
   
}





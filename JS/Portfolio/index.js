let aboutCl=document.getElementById("aboutColor");
let educationCl=document.getElementById("educationColor");
let skillsCl=document.getElementById("skillsColor");
let experienceCl=document.getElementById("experienceColor");
let projectCl=document.getElementById("projectColor");
let contactCl=document.getElementById("contactColor");


let aboutEl=document.getElementById("about");
let listElA=document.getElementById("listA");
let listElB=document.getElementById("listB");
let listElC=document.getElementById("listC");
let listElD=document.getElementById("listD");
let listElE=document.getElementById("listE");
let listElF=document.getElementById("listF");
let listElG=document.getElementById("listG");
let listElH=document.getElementById("listH");
let listElI=document.getElementById("listI");
let listElJ=document.getElementById("listJ");



var count = 0;


let linkEl=document.getElementById("links");

function menu(){
  
   
    if(count==0){
        
        
        listElG.textContent="";
        listElH.textContent="";
        listElI.textContent="";
        listElJ.textContent="";
        listElE.textContent="";
        listElF.textContent="";
        
        
        
        count=1;
        
    }
    else{
        
        listElG.textContent="LinkedIN";
        listElH.textContent="Github";
        listElI.textContent="Instagram";
        listElJ.textContent="Telegram";
        listElE.textContent="8482898320";
        listElF.textContent="akshayzade770@gmail.com";
        
        count=0;
    }

}






function aboutShow(){
    
    
    if(count==0){

        aboutCl.style.color="black";
        contactCl.style.color="white";
        educationCl.style.color="white";
        experienceCl.style.color="white";
        skillsCl.style.color="white";
        projectCl.style.color="white";
        listElA.textContent="";
        listElB.textContent="";
        listElC.textContent="";
        listElD.textContent="";
        listElE.textContent="";
        listElF.textContent="";
        listElG.textContent="";
        listElH.textContent="";
        listElI.textContent="";
        listElJ.textContent="";
        aboutEl.textContent="Cs graduate and adept front end devoloper focusing on Javascript based development. Iam eager to join a firm as a Front end developer and boost my career by hardworking and being interactive with the professional team where i will expand my Javascript Knowledge into perfecting accessibility and responsive web design";
        count=1;
    }
    else{
        aboutCl.style.color="white";
        aboutEl.textContent="";
       
        count=0;
    }

    
}






function educationShow(){
    
   
    if(count==0){
        aboutEl.textContent="";
        listElD.textContent="";
        listElE.textContent="";
        listElF.textContent="";
        listElG.textContent=""
        listElH.textContent=""
        listElI.textContent=""
        listElJ.textContent=""
        aboutCl.style.color="white";
        contactCl.style.color="white";
        experienceCl.style.color="white";
        skillsCl.style.color="white";
        projectCl.style.color="white";
        contactCl.style.color="white";
        educationCl.style.color="black";
        listElA.textContent="1. Completed Btech in CSE with 7.8 pointer (P.O.Y-2023)";      
        listElB.textContent="2. Completed HSC in Science with 77.07% (P.O.Y-2018)";      
        listElC.textContent="3. Completed SSC from CBSE board with 68% (P.O.Y-2016)";
        
        count=1;
    }
    else{
        educationCl.style.color="white";
        listElA.textContent="";
        listElB.textContent="";
        listElC.textContent="";
        count=0;
    }
}





function skillsShow(){
    
    if(count==0){

        listElE.textContent="";
        listElF.textContent="";
        listElG.textContent=""
        listElH.textContent=""
        listElI.textContent=""
        listElJ.textContent=""
        aboutCl.style.color="white";
        contactCl.style.color="white";
        educationCl.style.color="white";
        experienceCl.style.color="white";
        projectCl.style.color="white";
        contactCl.style.color="white";
        skillsCl.style.color="black";
        aboutEl.textContent="These are the basic skills i have learnt and used to make this portfolio webpage."
        listElA.textContent="1. HTML";
        listElB.textContent="2. CSS,Bootstrap"
        listElC.textContent="3. Javascript,React.js"
        listElD.textContent="4. SQL"
        count=1;
    }
    else{
        skillsCl.style.color="white";
        aboutEl.textContent=""
        listElA.textContent="";
        listElB.textContent="";
        listElC.textContent=""
        listElD.textContent=""
        count=0;
    }
}





function experienceShow(){
    
    if(count==0){

        listElA.textContent="";
        listElB.textContent="";
        listElC.textContent="";
        listElD.textContent="";
        listElE.textContent="";
        listElF.textContent="";
        listElG.textContent=""
        listElH.textContent=""
        listElI.textContent=""
        listElJ.textContent=""
        aboutCl.style.color="white";
        contactCl.style.color="white";
        educationCl.style.color="white";
        skillsCl.style.color="white";
        projectCl.style.color="white";
        contactCl.style.color="white";
        aboutEl.textContent="Web Developer Intern at Digital Ipsum PVT LTD and pursuing a Full Stack course at ARC Technologies and solutions ";
        experienceCl.style.color="black";
        count=1;
    }
    else{
        experienceCl.style.color="white";
        aboutEl.textContent="";
        count=0;
    }
}





function projectShow(){
   
    if(count==0){

        listElE.textContent="";
        listElF.textContent="";
        listElG.textContent=""
        listElH.textContent=""
        listElI.textContent=""
        listElJ.textContent=""
        aboutCl.style.color="white";
        contactCl.style.color="white";
        educationCl.style.color="white";
        experienceCl.style.color="white";
        skillsCl.style.color="white";
        contactCl.style.color="white";
        projectCl.style.color="black";
        aboutEl.textContent="While training period in the organization few projects were deployed using particular languages/frameworks.";
        listElA.textContent="1. A proper functioning TO-DO-LIST using HTML,CSS & Javascript. ";
        listElB.textContent=" 2. This current portfolio using HTML,CSS & Javascript.";
        listElC.textContent=" 3. A dummy web page using HTML,CSS,Javascript & React.js. "
        listElD.textContent=" 4. Some mini projects using JS like (Tip Calculator),(Application for inc/dec width) and some other "
        count=1;
    }
    else{
        projectCl.style.color="white";
        aboutEl.textContent="";
        listElA.textContent="";
        listElB.textContent="";
        listElC.textContent=""
        listElD.textContent=""

        count=0;
    }
}





function contactShow(){

    
    if(count==0){
        aboutEl.textContent="";
        listElA.textContent="";
        listElB.textContent="";
        listElC.textContent="";
        listElD.textContent="";
        listElG.textContent=""
        listElH.textContent=""
        listElI.textContent=""
        listElJ.textContent="@akshh0130"
        listElE.textContent="8482898320";
        listElF.textContent="akshayzade770@gmail.com";
        contactCl.style.color="black";
        aboutCl.style.color="white";
        educationCl.style.color="white";
        experienceCl.style.color="white";
        skillsCl.style.color="white";
        projectCl.style.color="white";
        count=1;
    }
    else{
        contactCl.style.color="white";
        listElG.textContent=""
        listElH.textContent=""
        listElI.textContent=""
        listElE.textContent="";
        listElF.textContent="";
        listElJ.textContent="";

        count=0;
    }
}




       
       
        
function linkedin(){
    if(count==0){
        aboutEl.textContent="";
        listElA.textContent="";
        listElB.textContent="";
        listElC.textContent="";
        listElD.textContent="";
        listElE.textContent="";
        listElG.textContent="LinkedIN";
        listElH.textContent=""
        listElI.textContent=""
        listElJ.textContent=""
        listElF.textContent="";
        aboutCl.style.color="white";
        contactCl.style.color="white";
        educationCl.style.color="white";
        experienceCl.style.color="white";
        skillsCl.style.color="white";
        projectCl.style.color="white";
        
        count=1;
    }
    else{
        listElG.textContent="";
        count=0;

    }
}

function github(){
    if(count==0){
        aboutEl.textContent="";
        listElA.textContent="";
        listElB.textContent="";
        listElC.textContent="";
        listElD.textContent="";
        listElE.textContent="";
        listElG.textContent=""
        listElH.textContent="Github";
        listElI.textContent=""
        listElJ.textContent=""
        listElF.textContent="";
        aboutCl.style.color="white";
        contactCl.style.color="white";
        educationCl.style.color="white";
        experienceCl.style.color="white";
        skillsCl.style.color="white";
        projectCl.style.color="white";
        
        count=1;
    }
    else{
        listElH.textContent="";
        count=0;

    }
}


function instagram(){
    if(count==0){
        aboutEl.textContent="";
        listElA.textContent="";
        listElB.textContent="";
        listElC.textContent="";
        listElD.textContent="";
        listElE.textContent="";
        listElG.textContent=""
        listElH.textContent=""
        listElI.textContent="Instagram";
        listElJ.textContent=""
        listElF.textContent="";
        aboutCl.style.color="white";
        contactCl.style.color="white";
        educationCl.style.color="white";
        experienceCl.style.color="white";
        skillsCl.style.color="white";
        projectCl.style.color="white";
        
        count=1;
    }
    else{
        listElI.textContent="";
        count=0;

    }
}




function telegram(){
    if(count==0){
        aboutEl.textContent="";
        listElA.textContent="";
        listElB.textContent="";
        listElC.textContent="";
        listElD.textContent="";
        listElE.textContent="";
        listElG.textContent=""
        listElH.textContent=""
        listElI.textContent=""
        listElJ.textContent="Telegram";
        
        listElF.textContent="";
        aboutCl.style.color="white";
        contactCl.style.color="white";
        educationCl.style.color="white";
        experienceCl.style.color="white";
        skillsCl.style.color="white";
        projectCl.style.color="white";
        
        count=1;
    }
    else{
       listElJ.textContent=""
        count=0;

    }
}


function phone(){
    if(count==0){
        aboutEl.textContent="";
        listElA.textContent="";
        listElB.textContent="";
        listElC.textContent="";
        listElD.textContent="";
        listElF.textContent="";
        listElG.textContent=""
        listElH.textContent=""
        listElI.textContent=""
        listElJ.textContent=""
        listElE.textContent="8482898320";
        aboutCl.style.color="white";
        contactCl.style.color="white";
        educationCl.style.color="white";
        experienceCl.style.color="white";
        skillsCl.style.color="white";
        projectCl.style.color="white";
        contactCl.style.color="white";
        
        count=1;
    }
    else{
        listElE.textContent="";
        count=0;

    }
}

function mail(){
    if(count==0){
        aboutEl.textContent="";
        listElA.textContent="";
        listElB.textContent="";
        listElC.textContent="";
        listElD.textContent="";
        listElE.textContent="";
        listElG.textContent=""
        listElH.textContent=""
        listElI.textContent=""
        listElJ.textContent=""
        listElF.textContent="akshayzade770@gmail.com";
        aboutCl.style.color="white";
        contactCl.style.color="white";
        educationCl.style.color="white";
        experienceCl.style.color="white";
        skillsCl.style.color="white";
        projectCl.style.color="white";
        
        count=1;
    }
    else{
        listElF.textContent="";
        count=0;

    }
}

let mainEl=document.getElementById("mainWidth");
let imgEl=document.getElementById("imgSize");
let txtEl=document.getElementById("txtWid");
let count=200;
mainWid=mainEl.offsetWidth;
imgWid=imgEl.offsetWidth;

function incSize(){
    
count=count+5;
txtEl.textContent=count;
imgWid=imgWid+5
imgEl.style.width=imgWid+"px"
mainWid=mainWid+5
mainEl.style.width=mainWid +"px"


}


function decSize(){
    
    count=count-5;
    txtEl.textContent=count;
    imgWid=imgWid-5
    imgEl.style.width=imgWid +"px"
    mainWid=mainWid-5
    mainEl.style.width=mainWid +"px"
    
}
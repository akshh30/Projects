let bill=document.getElementById("billAmt");
let per=document.getElementById("tipPer");
let tip=document.getElementById("tipAmt");
let total=document.getElementById("totalAmt");
let errorTxt=document.getElementById("error");


function calcAmt(){

    if(bill.value === "" || per.value === ""){

errorTxt.textContent= "Please fill both values";
    }

        else{
            let billAmnt = parseInt(bill.value);

    let tipPer= parseInt(per.value);
    
    let tipVal = billAmnt * tipPer / 100;
    console.log(tipVal);
    
    
    let totalVal= tipVal + billAmnt ;
    
    tip.value = tipVal ;

    total.value = totalVal ;

    errorTxt.textContent= " ";
        }
    

   


}
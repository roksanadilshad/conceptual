/*function signature/sample */

function cashOut( money ) {    
    if(money < 0 || typeof money != "number"){
        return "Invalid"
     }
    // You have to write your code here 
     let charege = money * 0.0175;
     let fixedcharge = charege.toFixed(4);
     let finalCharge = parseFloat(fixedcharge);

     return finalCharge;

    } 
    console.log(cashOut("mewauu"));
    
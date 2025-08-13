/*function signature/sample */ 
function  willSuccess( marks ) {  
    if(!Array.isArray(marks))  {
        return "Invalid";
    }
    if(marks.length === 0){
        return false;
    }
        for(let m of marks){
            if(typeof m !== "number" || Number.isNaN(m)){
                return "Invalid";
            }
        }
        // You have to write your code here
    let passMark = 0; 
     let failMark = 0;

     for(let mark of marks){
        if(mark >= 50 ){
            passMark++;
        }
        else{
            failMark++;
        }
     }
     return passMark > failMark;

    } 
    console.log(willSuccess(90 
    ));
    
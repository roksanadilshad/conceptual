/*function signature/sample */ 
function  validContact( contact ) { 
    if(typeof contact !== "string") {
        return "Invalid"
    }        
     // You have to write your code here
     if(contact.length === 11 &&
        contact.startsWith("01") === true &&
        contact.includes(" ") !== true){
        return true;
     }
     else{
        return false;
     }




     } 
     console.log(validContact(true ));
     
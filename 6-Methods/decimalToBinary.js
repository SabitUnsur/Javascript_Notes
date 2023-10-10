
convertDecimalToBinary(6);

function convertDecimalToBinary(number){
    let binary = "";
    while(true){
        binary += (number%2).toString();
        number = Math.floor(number/2); //Math.Floor() bölüm 7,5 ise 7 alir.
        if(number == 1)
        { 
            binary+=1; 
            break;
        } 
    }

    let result = revert(binary);
    console.log("Result : " + result);
}


function revert(binary){
    let reversedBinary = "";
    for(let i=binary.length-1;i>=0;i--){
        reversedBinary += binary.charAt(i);
    }
    return reversedBinary;
}
/**
 * function = method
 */


function print(){
    debugger; 
    console.log("Egemen");
}

debugger; //Proje debug modda calisir.

print();

function printName(name,surname){
    console.log(name + surname);
}

printName("Egemen","Ünsür");

let yas = Number(prompt("Age : "));

function checkAge(age){
    yas>18 ?  console.log("successfully") : console.log("failed.");
}

function cube(num){
    let result = Math.pow(num,3);
    return result;
}

debugger;
cube(9);
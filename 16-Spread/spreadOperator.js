//Spread Operator

let numbers = [10,20,30,40];

function addNumbers(a,b,c,d){
    return a+b+c+d;
}

addNumbers(...numbers); //spread operator ile arrayi fonksiyona parametre olarak gonderdik. 

const langs1 = ["Java","C++"];
const langs2 = ["C#","Php", ...langs1]; 
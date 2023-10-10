
let name1="sabit";
let surname="Ünsür";
let nameSurname = name1 + " " + surname;
console.log(nameSurname.toUpperCase());
let index = nameSurname.indexOf('s');
console.log("S index : " + index);

// javascript hata alınan koddan aşağısını çalıştırmaz
// var function scope iken let block scope çalışır.

let slicedName = nameSurname.slice(0,5); // 0 dan 5 e kadar olan indexteki elemanları alır.
console.log(slicedName);

let subString = nameSurname.substring(2,4); //2 den başlar 4. indexte bitirir.
console.log(subString); 

let replaced = nameSurname.replace('t','k');
console.log(replaced);

let radius = 3;
const pi = 3.14;

let areaCircle = pi * radius**2 //(pi* r^2)

//NaN => Not a Number  

console.log(14 / "Sabit"); //NaN verir.

let compiledWord = 'Repeated this lecture' + areaCircle + 'times';
console.log(compiledWord);
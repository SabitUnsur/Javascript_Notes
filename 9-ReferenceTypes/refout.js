 //DEĞER VE REFERANS TİPLER

 //Primitiv Types/ Value Types --> Stack
 //Reference Types --> Modelleri stackte, değerleri  Heapte tutulur.

// let a = 7;

// let b = a;

// console.log("a : " + a);
// console.log("b :" + b);

// console.log("----------------------------");

// b = 10;
// console.log("a : " + a);
// console.log("b : " + b);

// let dizi1 = [1,2,3];
// let dizi2 = [1,2,3];
// let dizi2 = dizi1;

// if(dizi1==dizi2){
//     console.log("esittir");
// }else{
//     console.log("esit degildir");
// }

// console.log(dizi1);
// console.log(dizi2);



let dizi1 = [1,2,3];
let dizi2 = dizi1;
let dizi3 =dizi2;


dizi3.push(23);

console.log(dizi1);
console.log(dizi2);
console.log(dizi3);
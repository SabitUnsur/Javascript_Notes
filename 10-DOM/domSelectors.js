/**
 * Selectors
 */

//getElementById: Idye göre elemanı yakalar.
//getElementByClassName: Class Nameye göre elemenletri yakalar.


// const button=document.getElementById("todoAddButton");
// console.log(button.id);
// let buttonText= button.textContent; //string olarak buton içindeki metni alır.
// let buttonText2=button.innerHTML; // string yanında html etiketleri varsa ona göre metne işlem yapar.
// button.innerHTML= "<b>ToDo Ekleyin </b>"; //EX 
// console.log(buttonText);


const toDoList = Array.from(document.getElementsByClassName("list-group-item")); //Arraye çevirme
toDoList.forEach(function(todo){
    console.log(todo);
});
console.log(toDoList);
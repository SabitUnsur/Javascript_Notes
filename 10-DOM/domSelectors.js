/**
 * Selectors
 */

//getElementById: Idye göre elemanı yakalar.
//getElementByClassName: Class Nameye göre element yakalar.
//getElementByTagName: Etiket ismine göre element yakalar.
//querySelector - querySelectorAll metotları -> getElementById - getElementByClassName - getElementByTagName işlemlerini bir arada yaparlar


// const button=document.getElementById("todoAddButton");
// console.log(button.id);
// let buttonText= button.textContent; //string olarak buton içindeki metni alır.
// let buttonText2=button.innerHTML; // string yanında html etiketleri varsa ona göre metne işlem yapar.
// button.innerHTML= "<b>ToDo Ekleyin </b>"; //EX 
// console.log(buttonText);

// const toDoList = Array.from(document.getElementsByClassName("list-group-item")); //Arraye çevirme
// toDoList.forEach(function(todo){
//     console.log(todo);
// });
// console.log(toDoList);

// const forms = document.getElementsByTagName("form");
// console.log(forms);

// const todolist = document.getElementsByTagName("li");
// console.log(todolist);


//QUERYSELECTORS

// const clearButton = document.querySelector("#todoClearButton"); //ID secimlerinde # kullanılır.

// const toDoList = document.querySelector(".list-group"); //Class secimlerinde . kullanılır.

// const toDoList = document.querySelectorAll(".list-group-item"); //Birden fazla olan classları secmek icin kullanılır.

// const toDoList = document.querySelectorAll(".list-group-item") [2]; //2. indexteki elementi getirir.

//const toDoList = document.querySelectorAll("li:first-child"); //Li taglerinin ilk çocugu döner.
//const toDoList = document.querySelectorAll("li:nth-child(2)"); //Li taglerinin ikinci çocugu döner.


// ODD AND EVEN
// const toDoList = document.querySelectorAll("li:nth-child(odd)"); //1-3-5-7 şeklinde tekleri seçer. 

 const toDoList = Array.from(document.querySelectorAll("li:nth-child(even)")); // çiftleri seçer.

 toDoList.forEach(function(todo){
    todo.style.backgroundColor = "lightgrey" ;
 }); //Çiftlerin background coloru değişti.
// HTML Elementleri Üzerinde Gezinmek.

const todo = document.querySelector(".list-group-item");
const todoList = document.querySelector(".list-group");
const todoLastChild = document.querySelector(".list-group-item:nth-child(4)");
// const card = document.getElementsByClassName("card")[0];
const card = document.querySelector(".card");

const row = document.querySelector(".row");

let value;

//Anneden çocuklara erişmek

value = todoList;
value = todoList.children[0];
value = todoList.children[3];
value = todoList.children[todoList.children.length-1];
value = todoList.children[3].textContent = "Değişti";

// value = Array.from(todoList.children);

// value.forEach(function(todo){
//     console.log(todo.textContent);
// })



//Çocuktan Anneye Erişmek

value = todo;
let ul  = todo.parentElement;
let cardBody = ul.parentElement;
let cardElement = cardBody.parentElement;
// let row = cardElement.parentElement;
let container = row.parentElement;


// Kardeşler arasında gezinmek
value = todo;
value = todo.nextElementSibling.nextElementSibling.nextElementSibling;


value = todoLastChild;
value = todoLastChild.previousElementSibling.previousElementSibling
.previousElementSibling.nextElementSibling.previousElementSibling
.previousElementSibling;


value = row.children[0].children[3].children[0].textContent="Todo Listesi Başlığı Değişti";

let todo3 = row.children[0].children[3].children[2].children[2];
todo3.textContent="Todo3 Değişti";
todo3.style.backgroundColor="lightgrey";
todo3.style.color="red";

console.log(value);

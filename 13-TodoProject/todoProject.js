//Tüm elementleri secmek

const form = document.querySelector("#todoAddForm");
const addInput = document.querySelector("#todoName"); 
const todoList= document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const clearButton = document.querySelector("#clearButton");

let todos = [];

runEvents();


function runEvents(){
    form.addEventListener("submit",addTodo);
    document.addEventListener("DOMContentLoaded",pageLoad);
}


function pageLoad(){
    checkTodosFromStorage();
    todos.forEach(function(todo){
        addTodoToUI(todo);
    });
}


function addTodo(e){
    const InputText = addInput.value.trim();
    if(InputText == null || InputText == ""){
        showAlert("warning","Lütfen Değer Giriniz.");
    }else{
        //Arayüze ekleme
        addTodoToUI(InputText);

        //storage ekleme
        addTodoToStorage(InputText);

        showAlert("success","Todo Eklendi.");

    }

    e.preventDefault(); //Farklı sayfaya yönlendirmesini engelledik.
}


function addTodoToUI(newTodo){
 
  const li = document.createElement("li");
  li.className = "list-group-item d-flex justify-content-between"; 
  li.textContent=newTodo;

  const a = document.createElement("a");
  a.href = "#";
  a.className="delete-item";

  const i = document.createElement("i");
  i.className = "fa fa-remove";

  a.appendChild(i);
  li.appendChild(a);
  todoList.appendChild(li);

  addInput.value = "";
}


function addTodoToStorage(newTodo){
    checkTodosFromStorage();
    todos.push(newTodo);
    localStorage.setItem("todos",JSON.stringify(todos));
}


function checkTodosFromStorage(){
    if(todos = localStorage.getItem("todos") === null){
        todos=[];
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }    
}


function showAlert(type,message){

  const div = document.createElement("div");
  //div.className = "alert alert-"+type;
  div.className = `alert alert-${type}`;
  div.textContent = message; 

  firstCardBody.appendChild(div); 

  setTimeout(function(){
    div.remove();
  },2500); //2.5 sn sonra icindeki method calisir.

}
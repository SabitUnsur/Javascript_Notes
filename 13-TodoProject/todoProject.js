//Tüm elementleri secmek

const form = document.querySelector("#todoAddForm");
const addInput = document.querySelector("#todoName"); 
const todoList= document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const clearButton = document.querySelector("#todoClearButton");
const filterInput = document.querySelector("#todoSearch"); 

let todos = [];

runEvents();


function runEvents(){
    form.addEventListener("submit",addTodo);
    document.addEventListener("DOMContentLoaded",pageLoad);
    secondCardBody.addEventListener("click",removeTodoFromUI);
    clearButton.addEventListener("click",allTodosEveryWhere);
    filterInput.addEventListener("keyup",filter);
}


function pageLoad(){
    checkTodosFromStorage();
    todos.forEach(function(todo){
        addTodoToUI(todo);
    });
}

function filter(e){ //targetı yakalayıp icindeki deger alinacagi zaman event parameter gec.
    const filterValue = e.target.value.toLowerCase().trim();
    const todoList = document.querySelectorAll(".list-group-item");

    if(todoList.length>0){
        todoList.forEach(function(todo){
            if(todo.textContent.toLowerCase().trim().includes(filterValue)){

                todo.setAttribute("style","display : block "); //eslesiyorsa goster.

            } else{

                todo.setAttribute("style","display : none !important"); //eslesmiyorsa gosterme. //bootstrap none ozelligini ezdigi icin !important kullanildi.
            }
        });

    } else{
        showAlert("warning","Filtreleme için en az bir öge olmalıdır.");
    }
}

function allTodosEveryWhere(){
    const AllTodos = document.querySelectorAll(".list-group-item");
    if(AllTodos.length>0){
        //ekrandan silme
        AllTodos.forEach(function(todo){
            todo.remove();
        });

        //Storageden silme
        todos=[];
        localStorage.setItem("todos",JSON.stringify(todos));
        showAlert("success","Başarılı bir şekilde silindi.");
    
    } else{
        showAlert("warning","Silinecek öge yok.");
    }

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

function removeTodoFromUI(e){
    if(e.target.className==="fa fa-remove"){
        const todo = e.target.parentElement.parentElement;
        //Ekrandan silme
        todo.remove();

        //Storageden silme
        removeTodoStorage(todo.textContent);

        showAlert("success","Başarıyla silindi.");
    }
}

function removeTodoFromStorage(removeTodo){

    checkTodosFromStorage();
    todos.forEach(function(todo,index){
       if(removeTodo === todo){
        todos.splice(index,1); //arrayden silindi.
       } 
    });

    localStorage.setItem("todos",JSON.stringify(todos));

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


//Html elementleri uzerinde herhangi bir sey meydana geldiğinde olusan olaylardir.
//Dinamik hale getirmek icin AddEventListener() kullanılır.

const clearButton = document.querySelector("#todoClearButton");
clearButton.addEventListener("click",function (){
    alert("Merhaba");
});

  function changeTitle(){
    document.querySelectorAll(".card-tite")[1].textContent = "Sabit";
  }
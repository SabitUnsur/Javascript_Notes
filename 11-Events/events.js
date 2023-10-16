//Html elementleri uzerinde herhangi bir sey meydana geldiğinde olusan olaylardir.
//Dinamik hale getirmek icin AddEventListener() kullanılır.
  
const clearButton = document.querySelector("#todoClearButton");

clearButton.addEventListener("click",changeTitle);

//metodu çalıştıran eventin bir objesi parametre olarak gecer.
  function changeTitle(e){
    console.log(e.type);
    console.log(e.target);
    console.log(e.textContent);
    console.log(e.className);
    //document.querySelectorAll(".card-tite")[1].textContent = "Sabit";
  }
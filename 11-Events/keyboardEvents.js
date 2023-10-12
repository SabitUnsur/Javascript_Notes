//KEYBOARD EVENTS

//keypress = klavyeden sadece harf ve sayilari algilayabilir.

//keydown = klavyedeki ekstra capslock, tab vs.de de yani her seyde calisir. keypress ile farki budur.

//keyup = tustan eli kaldirinca calisir. keydown ile farki budur. 

//document.addEventListener("keypress",run);

//document.addEventListener("keydown",run);

// function run(e){
//     console.log(e.keyCode);
//     if(e.keyCode==116){
//         alert("ssayfa yenileme engellendi");
//     }
//     e.preventDefault();

//    // console.log(e.key); //basılmıs olan tusu verir. 
//   // console.log(e.keyCode); veya console.log(e.which); //basılan harflerin ASCII karsiliklari doner.  
// }


//Inputa girilen degeri almak. 
const cardTitle = document.querySelectorAll(".card-title")[0];
const input = document.querySelector("#todoName");
input.addEventListener("keypress",run);

function run(e){
  console.log(e.target.value); //html elementi icindeki degeri alir.
}
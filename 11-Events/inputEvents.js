// INPUT EVENTS

//focus // input kutu icine girilince calisir.
//blur  // inputtan ciktiginda tetiklenir.
//copy  // inputun icindeki bir veriyi kopyalarsak calisir.
//paste // inputun icine bir veriyi paste ettigimizde calisir.
//cut   // inputun icindeki deger kesildiginde tetiklenir.
//select // input icindeki veri mouse ile secilirse tetiklenir. CTRL+A ile de tetiklenir.

const todo = document.querySelector("#todoName");

todo.addEventListener("focus",run);
todo.addEventListener("blur",run);
todo.addEventListener("copy",run);
todo.addEventListener("paste",run);
todo.addEventListener("cut",run);
todo.addEventListener("select",run);


function run(e) {
    console.log(e.type);
}
//MOUSE EVENTS

//DOMContentLoaded = sayfa yüklendiğinde çalışır.
//load = window ile kullanılıyor.
//click
//dblclick = cift tiklamada calisir.
//mouseover = mouse ile belirtilen element üstüne gelince calisir.
//mouseout = mouse elementin üzerinden ayrıldıgında calisir.
//mouseenter = sadece verilen html elementi icin calısır, o element icindeki elementler icin calısmaz digerleri gibi.
//mouseleave = sadece verilen html elementi icin cıkısta calısır, o element icindeki elementler icin calısmaz digerleri gibi.

// document.addEventListener("DOMContentLoaded",run);

// window.addEventListener("load",run);

const cardTitle = document.querySelectorAll(".card-title")[1];
//cardTitle.addEventListener("click",run);
cardTitle.addEventListener("dblclick",run);

const cardBody = document.querySelectorAll(".card-body")[1];
// cardBody.addEventListener("mouseover",run);
// cardBody.addEventListener("mouseout",run);
cardBody.addEventListener("mouseenter",run);
cardBody.addEventListener("mouseleave",run);


function run(e){
    console.log(e.type);
} 
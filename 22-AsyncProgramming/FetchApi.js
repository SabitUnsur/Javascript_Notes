//FETCH API
// fetch api, http requestleri yonetmek icin kullanılır. ajax yerine kullanılır. Daha iyi bir alternatiftir.
// bize bir response tipinde promise dondurur , onun içindeki json degeri yakalanir. try catch ile hata yakalanır.

function getStudents(url){
   fetch(url)
   .then((response) => {
         return response.json(); //almak istenen veri alınır
        //Promise <Response> tipinde döner
   }) 
   .then((data) => {
       console.log(data); //
   })
   .catch((error) => {
         console.log(error);
   })
}

getStudents("students.json");

function getData(url){
    /*fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    })*/

    // YA DA 
   // return fetch(url) diyip aşağıda metodun çağırıldıgı yerde then kullanılabilir.
}   

getData("https://jsonplaceholder.typicode.com/users");


function saveStudent(){
    fetch("https://jsonplaceholder.typicode.com/users",{
        method : "POST",
        body : JSON.stringify({
            userId : 11,
            title : "Ali",
            body : "Ali",
        }),
        headers : {
            "Content-type" : "application/json; charset=UTF-8"
        }
    })
}
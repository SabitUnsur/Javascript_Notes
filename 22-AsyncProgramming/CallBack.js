
//Callback : bir fonksiyonu, başka bir fonksiyona parametre geçerek
//asenkron yapıyı senkron hale getirmek için kullanılır.


function getName(callback){
    setTimeout(() => {
        let name ="Sabit";
        callback(name); //sorun cozulmus olur.
    }, 1000);
}

function getSurname(name,callback){
    setTimeout(() => {
        let surname = "Unsur"; // nameye gore soyismi buldu . 
        callback(surname);
    }, 500);
}

function getAge(name,surname,callback){
    setTimeout(() => {
        let age = 25;
        callback(age);
    }, 300);

}


//getName(getSurname);

//Kullanim Ornegi 2 
//Burada daha fazla logic kod icin daha fazla callback yazılır ve callback hell olusur. 
//Dolayısıyla callbackler ic ice girmeye baslar. Bu da kodun okunurlugunu azaltır.
getName((name)=>{
    getSurname(name , (surname)=>{
        getAge(name,surname,(age)=>{
            console.log(name , surname , age);
        })
    })
})

//getName();
//getSurname();
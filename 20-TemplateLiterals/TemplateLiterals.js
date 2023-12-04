//ES6 ile bir gelen Template Literals ile stringlerimizi daha kolay bir sekilde olusturabiliriz.

function write(firstName, lastName) {

    console.log("İsim: " + firstName + " Soyisim: " + lastName);

    //template literals ile kullanım
    console.log(`İsim: ${firstName} Soyisim: ${lastName}`); // altgr+ 2 kez ; 
} 

write("Sabit", "Ünsür");

function getUserById(userId) {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
}

getUserById(1); 
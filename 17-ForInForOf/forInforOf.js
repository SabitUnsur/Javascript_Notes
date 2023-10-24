//For In ve For Of Döngüleri

let names = ["Mustafa","Ahmet","Mehmet"];
 
//For In
//Dizi üzerinde gezerken dizinin indexlerini almak için kullanılır.
for(let name in names){
    console.log(name);
}

for(let name in names){
    console.log(name,names[name]); //index ve degeri 
}

//For Of
//Dizi üzerinde gezerken dizinin elemanlarını almak için kullanılır.
for(let name of names){
    console.log(name);
}

for(let name of names){
    console.log(name, names.indexOf(name)); //deger ve indexi
}
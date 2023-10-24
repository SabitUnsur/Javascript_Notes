let langs = ["C#","Java","Python","Php"];

let [lang1,lang2,lang3,lang4] = langs;

console.log(lang1,lang2,lang3,lang4);

const hesapla = (a,b) =>{
    const toplam = a+b;
    const carpim = a*b;
    const cikar = a-b;
    const bol = a/b;

    const dizi = [toplam,carpim,cikar,bol];

    return dizi;

};

let[a,b,c,d] = hesapla(10,2);

console.log(a,b,c,d);


const person = {

    firstName : "Mustafa",
    lastName : "Keskin",
    age : 25,
    salary : 4000,
}


let {firstName,lastName,age,salary} = person;

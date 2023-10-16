//Session Storage Kullanimi
//Key-Value mantigi vardir.
//Tarayıcının depolamasidir.

//Session vs Local Storage
//Session Storageya bir değer eklendiginde tarayici yeni bir sekme acildiginda veya kapatildiginda, bilgisayar kapatildiginda oradaki deger silinir.
//Local storagedeki silinmez.
//Window objesinin icinde bulunurlar.
//Eklenen degerler string olarak tutulur.

//Deger Ekleme
sessionStorage.setItem("350","Sabit");
sessionStorage.setItem("216","Ali");

//Deger Silme 
sessionStorage.removeItem("154");

//Deger Alma
let value = sessionStorage.getItem("350");

 //Hepsini Silme
 sessionStorage.clear();

 //Session-Storage Array Yazdirma  
 let names = ["Ali","Enes","Kübra","Adem"];
 sessionStorage.setItem("names",JSON.stringify(names)); //degeri array formatinda cikti olarak ekler.

 let values = JSON.parse(sessionStorage.getItem("names")); // tipi array olarak alir. artık typeof array doner.
 console.log(typeof values); //string gelir. Biz bunu Array olarak almak icin setItem icinde JSON.stringify kullandik.

 //LOCAL STORAGE
  localStorage.setItem("1","Sabit");

  //Kullanimlar session ile aynidir. 
 //Dinamik olarak Element Olusturmak

 const cardBody = document.querySelectorAll(".card-body")[1]; //hangi card body içine ekleyeceğimizi belirledik.
 const link = document.createElement("a");
 link.id = "goBlogWebsite";
 link.className = "btn btn-dark btn-sm mt-3";
 link.href="http://expozy.co";
 link.target="_blank"; //ayrı bir sekmede gitsin
 link.innerHTML = "Go to Website";

cardBody.appendChild(link); //CardBody sonuna eklemis olduk.

 console.log(link);
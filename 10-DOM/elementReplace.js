//Elementleri Yer Değiştirme

const cardBody= document.querySelectorAll(".card-body")[1];
const newTitle = document.createElement("h2");
newTitle.className="card-title";
newTitle.textContent = "To-Do Yeni";

cardBody.replaceChild(newTitle,cardBody.childNodes[1]);
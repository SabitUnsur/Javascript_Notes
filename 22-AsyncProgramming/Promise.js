//PROMISE
//1- pending : işliyor, sonuçlanmamış
//2- fulfilled (resolve) : işlendi, sonuçlandı
//3- rejected : işlenmedi, sonuçlanmadı

//resolve, then ile yakalanır
//reject, catch ile yakalanır

let check = true ;

// const promise1 = new Promise((resolve, reject) => {
//   if(check){
//     resolve("Promise1 successfull"); }
//     else{
//         reject("Promise1 failed");
//         }
// });

// console.log(promise1);

//Asenkron yapıları senkron hale getirmek için promise kullanılır
//Callbacklerin alternatifi olarak kullanılır


// function createPromise(){
//     return new Promise((resolve, reject) => {
//         if(check){
//           resolve("Promise1 successfull"); }
//           else{
//               reject("Promise1 failed");
//               }
//     });
// }

// createPromise()
// .then((response) => console.log(response))
// .catch((error) => console.log(error))
// .finally(() => console.log("Promise1 finished")); 


// PROMISE + XMLHTPPREQUEST 

function readStudents(url){
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        try{
            xhr.addEventListener("readystatechange",() => {
                if(xhr.readyState === 4 && xhr.status === 200){
                        resolve(JSON.parse(xhr.responseText));
                    }
                }
            );
        }
        catch(error){
            reject(error);
        }

        xhr.open("GET", url);
        xhr.send();
      
    });
}

// readStudents("students.json")
// .then((data) => console.log(data))
// .catch((error) => console.log(error));

function getUsers(url){
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
       
            xhr.addEventListener("readystatechange",() => {
                try{
                    if(xhr.readyState === 4 && xhr.status === 200){
                        resolve(JSON.parse(xhr.responseText));
                    }
                }
                catch(error){
                    reject(error);
                }
            });

        xhr.open("GET", url);
        xhr.send();
      
    });
}

function getCommentsByUserID(url){
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
       
            xhr.addEventListener("readystatechange",() => {
                try{
                    if(xhr.readyState === 4 && xhr.status === 200){
                        resolve(JSON.parse(xhr.responseText));
                    }
                }
                catch(error){
                    reject(error);
                }
            });

        xhr.open("GET", url);
        xhr.send();
      
    });
}


getUsers("https://jsonplaceholder.typicode.com/users/3")
.then((data) => {
    return getCommentsByUserID(`https://jsonplaceholder.typicode.com/comments/${data.id}`);
})
.then((res) => console.log(res)) //getCommentsByUserID promise'inden gelen response
.catch((error) => console.log(error));


//promise.all
//tüm promise'lerin sonucunu döner

const p1 = Promise.resolve("Promise1");
const p2 = Promise.resolve("Promise2");
const p3 = new Promise((resolve, reject) => {
    resolve("Promise3 basarili");
});

Promise.all([p1,p2,p3])
.then((response) => {
    for(let value of response){
        console.log(value);
    }
})
.catch((error) => console.log(error));
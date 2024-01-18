//ASYNC AWAIT 
//Bizi promise then ve catch yapısından kurtarır.

//bir metodu async ile işaretlersek döndüğü tip promise olur.

/*async function hello(){
    return "Hello World ";
}*/

/*
hello()
.then(response => console.log(response));
*/


//PROMISE VE ASYNC ILE ORNEK
document.querySelector("#button").addEventListener("click",()=>{
    fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => response.json())
    .then(data => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${data.id}`)
        .then(response=>response.json())
        .then(comments => console.log(comments))
    }) 
}); 

//ASYNC AWAIT İLE YAPILIŞI
document.querySelector("#button").addEventListener("click",async ()=>{
 const responsePosts =  await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json();
 const responseComments = await (await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)).json();
 console.log(responsePosts,responseComments);
});

 
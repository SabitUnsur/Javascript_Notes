/*
Js, senkron calısan bir dildir.

Asenkron calıstıgı kısımlar 
1-Timing 
2-HTTP Request
3-Events
4- Web API tarafında calısan her sey asenkron calısır.  
*/ 

// ASENKRON PROBLEMLERİ YONETMEK ICIN // 
// --- CALLBACK ---  PROMISE --- ASYNC/AWAIT --- //
// --> Asenkron yapıları senkrona cevirip yonetir. 


/*
// //1. Timing
 setTimeout(() => { 
    console.log("Time is out and worked")
 }, 1000); //1 saniye sonra calısır.

 setTimeout(() => { 
    console.log("Time 2 is out and worked")
 }, 500); 

 setTimeout(() => { 
    console.log("Time 3 is out and worked")
 }, 750); 


 console.log("Sabit"); //once bu calısır sonra time is out calısır. Beklemedi. */


  //Asenkron Problemleri 
  // 1 - Http requests 

  const users = [ 

     {  userId : 5,
        post : "Sabit Post 1 ",
     },

     {  userId : 5,
        post : "Sabit Post 2 ",
    },

    {   userId : 5,
        post : "Sabit Post 3 ",
    },

    {   userId : 6,
        post : "Ali Post 1 ",
    },

    {   userId : 7,
        post : "Betul Post 1 ",
    },

  ];

  //user id 
  //post by user id
  //Bu kodda asenkron oldugu icin userId den once getPost calısır ve alamayız.
  // userId undefined doner. Bunu engellemek icin CALLBACK-PROMISE-ASYNC AWAIT kullaniriz.
  function getUserId(){
    setTimeout(() => {
        //servise gittik ve cevabı aldık olarak varsayıldı.
        return 5;
    }, 1000);
  }

  function getPostByUserId(userId){
    setTimeout(() => {
        users.forEach((user) => {
            if(user.userId === userId){
                console.log(user.post);
            }
        });
    }, 500);
  }

  let userId = getUserId(); 
  getPostByUserId(userId); 


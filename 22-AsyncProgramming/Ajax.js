//AJAX, ASYNCHRONOUS JAVASCRIPT AND XML anlamındadir.
//bir sayfayı yenilemeden, bir sayfadan veri alıp göndermeye yarayan bir teknolojidir.

// const xhr = new XMLHttpRequest();
//status 200 olursa sayfa bulunmustur.
//status 403 olursa sayfaya erisim yetkiniz yoktur.
//status 404 olursa sayfa bulunamadi.
//status 500 olursa sunucu hatası.

//readyState 0 olursa request olusturuldu. 
//readyState 1 olursa open metodu cagrildi (iletisim kuruldu) default olarak asenkron calisir.
//readyState 2 olursa send metodu cagrildi (istek alindi).
//readyState 3 olursa response işleniyor.
//readyState 4 olursa request bitti ve response hazir.

//responsetext : response olarak gelen veriyi string olarak dondurur.
//onreadystatechange : readyState degistiginde tetiklenir.

// tarayici ----> AJAX ----> Sunucu
//Eski bir yontemdir. Cok kullanilmaz. Y


function prepareURL(url,id){
    if(id === null){
        return url;
    }
    return `${url}?postId=${id}`;
}


function getComments(url,id){
    let newUrl = prepareURL(url,id);
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange",()=>{
        if(xhr.readyState === 4 && xhr.status === 200){
        console.log(JSON.parse(xhr.responseText));}
    })

    xhr.open("GET",newUrl);
    xhr.send();
}


getComments("https://jsonplaceholder.typicode.com/comments",null);
//STATIC 
//static olarak tanımlanan bir fonksiyonu nesne oluşturmadan kullanabiliriz.
//Bir function veya property static ise class'a ozgudur. 
//Yani, static olarak tanımlanan bir maas deger, tum nesneler icin aynidir.
// Bu durumlarda static kullanılır.

class Matematik{
    static topla(sayi1, sayi2){
        return sayi1 + sayi2;
    }

    cikar(sayi1, sayi2){
        return sayi1 - sayi2;
    }

    carp(sayi1, sayi2){
        return sayi1 * sayi2;
    }

    bol(sayi1, sayi2){ 
        return sayi1 / sayi2;
    }
}

const math = new Matematik();
// math.topla(2,3); //hata
Matematik.topla(2,3); //5

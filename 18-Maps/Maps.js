//Maps --> key-value pairs 

const map1 = new Map();

/**
 * Set Keys
 
map1.set(1, 'Sabit');
map1.set(true, 5);
map1.set([1,2,3], {firstName: 'Sabit', lastName: 'Ünsür'});
 */

map1.set(6, 'Ankara');
map1.set(34, 'İstanbul');
map1.set(35, 'Ankara');
map1.set([1,2,3], 'Array'); //Undefiend doner cunku array referans tipli bir veri tipidir.

//GET
console.log(map1.get(6));

//Size
console.log(map1.size);

//DELETE
map1.delete(6); //boolean döner

//Has
console.log(map1.has(6)); //boolean döner 


//For Of 

for(let [key,value] of map1){ //Destructing
    console.log(key,value);
}

/*
for(let value of map1){ 
    console.log(key,value);

    outputs is be like that [34, 'İstanbul'] --> array
}
 */


/*
const keys = map1.keys(); //keyleri doner

keys.forEach((key) => {
    console.log(key); //hata verir, cunku keyler array degil, iterator. O yuzden Array.from() kullanmamiz gerekir.
    
});
*/

const keys = Array.from(map1.keys()); 

keys.forEach((key) => {
    console.log(key);
    
});


//2.yol 
const keysArray = map1.keys(); //keyleri doner

keys.Array.forEach((key) => {
    console.log(key,map1.get(key)); //valueyi de almak istersek
}); 

  
//MAPTEN ARRAYE CEVİRME
const array = Array.from(map1);
console.log(array); //arraye formatlandi. 

//ARRAYDEN MAP OLUSTURMA
const map2 = new Map(array);
console.log(map2); //map2 olusturuldu.



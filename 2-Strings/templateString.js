const f1 = 'Angular';
const f2 = 'Vue';
const f3 = 'React';

let result = 'Sabit Ünsür know those frameworks : ' + f1 + ' ' + f2 + ' ' + f3 ;  

let templateResult = `Sabit Ünsür know those frameworks : ${f1} ${f2} ${f3}`;
console.log(templateResult);

let html = ` 
<h1> ${f1} </h1>
<h2> ${f2} </h2>
<h3> ${f3} </h3>
`

console.log(html);
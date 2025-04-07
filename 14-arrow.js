/// function declaration  rodykles naudojamas tik ten kur norima isreiksti paprasta varianta. 
const n1=7;
const n2=5;

function sum(a,b){
    return a+b;
};
console.log(`${n1}+${n2}=${sum(n1,n2)}`);


// kintamaja priskirta anomime funkcija 

const minus=function(a,b){
    return a-b;

};
console.log(`${n1}-${n2}=${minus(n1,n2)}`);

// arrow function  ismetam zodi function ir return  po duomenu imetam => 

const multi= (a,b)=>{
    return a*b;
}
console.log(`${n1}*${n2}=${multi(n1,n2)}`);

/// 3a) arrow function 
// jei logikos bloke yra tik 1 salyga, tau galima nerasyti {return} skliaustu ir returno. Reikia visus pasalinti ness kitaip neveiks. 
// jeigu bloke yra tik viena salyga (statement )

const div=(a,b)=> a/b;

console.log(`${n1}*${n2}=${div(n1,n2)}`);

// 3b) variantas 
// jeigu parametru bloke yra tik 1 parametras 
// galima nerasyti skliaustu ()

const sqr=a=> a*a;

console.log(`${n1}*${n1}=${sqr(n1)}`);
console.log(`${n2}*${n2}=${sqr(n2)}`);

// funkcija grazina vardo pirma raide.

const firstLeter = name=> name[0];

console.log(firstLeter('Jonas'));
console.log(firstLeter('Monas'));


// funkcija grazina pataisyta varda; logikos bloke  turi buti tik viena eilute, jeigu yra daugiau paziureti ar jie susiraso i viena 

const  correctName=name=>name[0].toUpperCase()+name.slice(1,0).toLowerCase();

console.log(correctName('jonas'));
console.log(correctName('monas'));

// reverse() funkcija grazina atbulini teksta 

const reverseString=text=> text.split('').reverse().join('');

console.log(reverseString('jonas'));
console.log(reverseString('kedes'));
console.log(reverseString('alus'));



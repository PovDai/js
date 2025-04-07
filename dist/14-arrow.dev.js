"use strict";

/// function declaration  rodykles naudojamas tik ten kur norima isreiksti paprasta varianta. 
var n1 = 7;
var n2 = 5;

function sum(a, b) {
  return a + b;
}

;
console.log("".concat(n1, "+").concat(n2, "=").concat(sum(n1, n2))); // kintamaja priskirta anomime funkcija 

var minus = function minus(a, b) {
  return a - b;
};

console.log("".concat(n1, "-").concat(n2, "=").concat(minus(n1, n2))); // arrow function  ismetam zodi function ir return  po duomenu imetam => 

var multi = function multi(a, b) {
  return a * b;
};

console.log("".concat(n1, "*").concat(n2, "=").concat(multi(n1, n2))); /// 3a) arrow function 
// jei logikos bloke yra tik 1 salyga, tau galima nerasyti {return} skliaustu ir returno. Reikia visus pasalinti ness kitaip neveiks. 
// jeigu bloke yra tik viena salyga (statement )

var div = function div(a, b) {
  return a / b;
};

console.log("".concat(n1, "*").concat(n2, "=").concat(div(n1, n2))); // 3b) variantas 
// jeigu parametru bloke yra tik 1 parametras 
// galima nerasyti skliaustu ()

var sqr = function sqr(a) {
  return a * a;
};

console.log("".concat(n1, "*").concat(n1, "=").concat(sqr(n1)));
console.log("".concat(n2, "*").concat(n2, "=").concat(sqr(n2))); // funkcija grazina vardo pirma raide.

var firstLeter = function firstLeter(name) {
  return name[0];
};

console.log(firstLeter('Jonas'));
console.log(firstLeter('Monas')); // funkcija grazina pataisyta varda; logikos bloke  turi buti tik viena eilute, jeigu yra daugiau paziureti ar jie susiraso i viena 

var correctName = function correctName(name) {
  return name[0].toUpperCase() + name.slice(1, 0).toLowerCase();
};

console.log(correctName('jonas'));
console.log(correctName('monas')); // funkcija grazina atbulini teksta 

var reverseString = function reverseString(text) {
  return text.split('').reverse().join('');
};

console.log(reverseString('jonas'));
console.log(reverseString('kedes'));
console.log(reverseString('alus'));
"use strict";

/*https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array*/
// .push () i gala nustumiam nauja kintamaji.Galima ir daugiau reiksmiu itraukti i gala. 
var list = [];
console.log(list);
/*[ 10 ]
[ 10, 2 ]
[ 10, 2, 8 ]
*/

list.push(10);
console.log(list);
list.push(2);
console.log(list);
list.push(8);
console.log(list);
list.push(8, 6);
console.log(list);
list.push(8, 6, 5, 3, 2, 1); // neribotas kiekis galima pagal ideja. 

console.log(list);
list.push(8, 'awdawsd'); // galima ir stringus ipushint

console.log(list);
var numbers = [10, 2, 8, 4, 6];
var daubleNumbers = [];

for (var i = 0; i < numbers.length; i++) {
  var number = numbers[i]; /// isspauzdino visa eilute tiesiog.// bet ja panaikina 

  daubleNumbers.push(number * 2); // isspauzdina per naujo visa eilute ir padauginam is 2 
}

console.log(daubleNumbers); // isspauzdinam 
//// 

var names = ['Jonas', 'Maryte', 'Petras', 'Ona'];
var nameSize = [];
var nameFirstLetters = [];
var upperCaseNames = []; //// JEIGU SURASTI vardus, VARDO ILGI, PIRMA RAIDE, VISUS VARDUS DIZIOSIOMIS PADAROM. 

for (var _i = 0; _i < names.length; _i++) {
  var name = names[_i]; // parodo visus vardus. ir visus nunulina 

  console.log('---', name, name.length, name[0]);
  nameSize.push(name.length); // vardo ilgi sukuria 

  nameFirstLetters.push(name[0]); // pirma raide paima

  upperCaseNames.push(name.toLocaleUpperCase()); /// visus vardus padarom DIDZIOSIOMIS.
}

console.log(nameSize);
console.log(upperCaseNames);
console.log(nameFirstLetters);
var n1 = [1, 11, 11];
var n2 = [2, 22, 222, 2222];
var n12 = []; // const n12=[1,11,111,2,22,222,2222];

for (var _i2 = 0; _i2 < n1.length; _i2++) {
  /// vienas bus vienoje dalyje 
  n12.push(n1[_i2]); // jeigu cia irasysim n2[i] papildomai eitu pirmas antras pirmas antras n1 n2 n1 n2 
}

for (var _i3 = 0; _i3 < n2.length; _i3++) {
  ///kitas kitoje dalyje 
  n12.push(n2[_i3]);
}

;
console.log(n12);

function wave(str) {
  var zodziai = [];

  for (var _i4 = 0; _i4 < str.length; _i4++) {
    var zodis = str[_i4];
  }

  return zodziai;
}

console.log(wave('hello'));
var numbers2 = [10, 2, 8, 4, 6];
console.log(numbers2);
numbers2.push(9);
console.log(numbers2); //// .pop() PASALINA PASKUTINI ELEMENTA, IR JI GRAZINA JEIGU REIKIA. 

numbers2.pop();
var g1 = numbers2.pop(); /// jeigu pavadinam ji per let arba const gale po masyvo ji parodo ka pasalino. 

console.log(numbers2, g1); /// unshift() itraukia i prieki elemento 

numbers2.unshift(1);
console.log(numbers2); /// shift() is prieko pasalina nari. 

numbers2.shift();
var g2 = numbers2.shift();
console.log(numbers2, g2); /// irgi grazina ka pasalina is priekio 
/// includes() patikrina ar egzistuoja siame sarase reiksme arba ne ir grazina true arba false reiksme. 

var magic = [11, 22, 33, 44, 55, 66];
console.log(magic.includes(55));
console.log(magic.indexOf(44)); // ondexOf() grazina skaiciaus arba zodzio reiksme. 

console.log(magic.indexOf(44)); /// join() sujungs norimus saraso elementus. Jeigu jokio tekso neidesim, per kalbeli sujungs. 

var text = ['agurkas', 'pomidoras', 'svogunas', 'paprika']; // reikalingi produktai:a,b,c,d.

var products = "Reikalingi produktai:".concat(text.join(','));
console.log(products); // reverse() - apsuka rezultatus is kito galo. // jeigu du kartus apsuksim grisim prie pirmnos reiksmes. 

var b = [1, 2, 3, 4, 5];
console.log(b.reverse().reverse()); /// concat() - prijungia prie vieno masyvo antra masyva, galima concat() kelis kartus sujungiant kelis. 

var c14 = [1, 11];
var c2 = [2, 22];
var c3 = [3, 33];
var c4 = [4, 44];
var c12 = c14.concat(c2).concat(c4).concat(c3);
console.log(c12);
var c15 = c3.concat(c4);
console.log(c15);
var c1234 = c12.concat(c14, c3, c4); // galima irasyt i eilute ne viena duomeni, apjungiami skirtingi masyvai. 

var c1111 = c12.concat(c14, c14); /// galima ir tuos pacius masyvus panaudoti kelis kartus nera skirtumo. 
// splice()jis paima ir pasalina nurodytas reiksmes is saraso. Grazina sarasa be ju. 

var h = [11, 22, 33, 44, 55];
console.log(h.splice(0)); // viska istrina lieka tuscia. 

console.log(h.splice(1, 2)); // isima 22 ir 33 lieka 11 44 55 

console.log(h.splice(2)); // lieka 11 22  44 55 

console.log(h.splice(0, 2)); //